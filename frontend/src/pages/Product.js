import React, { Component } from "react";
import ProductView from "../components/ProductView";
import Navbar from "../components/Navbar";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ActiveCurrency: new Object(),
            ActiveCategory: "",
            cartItemsCount: 0,
        };
    }

    componentDidMount() {
        this.getCartItemsCount();
    }

    onChangeActiveCurrency = (currency) => {
        this.setState({ ActiveCurrency: currency });
    };

    onChangeCategory = (category) => {
        this.setState({ ActiveCategory: category });
    };

    onChangeCartItem = () => {
        this.getCartItemsCount();
    };

    getCartItemsCount() {
        const cart = localStorage.getItem("cart");

        if (cart) {
            const temp = JSON.parse(cart);

            if (temp) {
                if (temp.length) {
                    let count = 0;
                    temp.map((item) => (count += item.quantity));

                    this.setState({ cartItemsCount: count || 0 });
                    return;
                }
            }
        }

        this.setState({ cartItemsCount: 0 });
    }

    render() {
        return (
            <>
                <Navbar
                    client={this.props.client}
                    onChangeActiveCurrency={this.onChangeActiveCurrency}
                    onChangeCategory={this.onChangeCategory}
                    cartItemsCount={this.state.cartItemsCount}
                    onChangeCartItem={this.onChangeCartItem}
                />
                <ProductView
                    client={this.props.client}
                    ActiveCurrency={this.state.ActiveCurrency}
                    ActiveCategory={this.state.ActiveCategory}
                    onChangeCartItem={this.onChangeCartItem}
                />
            </>
        );
    }
}

export default Product;
