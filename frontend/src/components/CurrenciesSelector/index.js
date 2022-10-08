import React, { Component } from "react";
import { gql } from "@apollo/client";

import {
    Dollar,
    Arrow,
    DropdownMenu,
    DropdownItem,
} from "./CurrenciesSelector.style";

import arrow from "./arrow.png";

const GET_CURRENCIES = gql`
    query GetCurrencies {
        currencies {
            label
            symbol
        }
    }
`;

class CurrenciesSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            currencies: [],
            ActiveCurrency: new Object()
        };
    }

    onChangeActiveCurrency = (currency) => { 
        this.setState({ ActiveCurrency: currency, isToggleOn: false });
        this.props.onChangeActiveCurrency(currency); 
    };

    componentDidMount() {
        this.getCurrencies();
    }

    async getCurrencies() {
        const result = await this.props.client.query({
            query: GET_CURRENCIES,
        });      
        const currencies = [...this.state.currencies];

    if (result.data) {
        if (result.data.currencies) {
            result.data.currencies.map((currency,index) => {
                if(index === 0) {
                    this.props.onChangeActiveCurrency(currency) 
                }
                currencies.push({ label: currency.label, symbol: currency.symbol });
            });
        }
    }

    this.setState({ currencies, ActiveCurrency: { symbol: currencies[0].symbol, label: currencies[0].label } });
}

    handleClick = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    };

    render() {
        return (
            <>
                <Dollar>{this.state.ActiveCurrency.symbol}</Dollar>
                <Arrow src={arrow} onClick={this.handleClick}></Arrow>
                <DropdownMenu toggleOn={this.state.isToggleOn}>
                {this.state.currencies.map((currency,index) => (
                    <DropdownItem key={index}
                    ActiveCurrency={this.state.ActiveCurrency}
                    onClick={() => this.onChangeActiveCurrency(currency)}
                    >{currency.symbol} {currency.label}</DropdownItem>))}
                </DropdownMenu>
            </>
        );
    }
}

export default CurrenciesSelector;
