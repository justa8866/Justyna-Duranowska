import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    SingleProduct,
    ImageContainer,
    Image,
    Name,
    Price,
    OverlayImage,
    Trolley,
    Background,
    OutOfStockName,
    OutOfStockPrice,
} from "./ProductBox.style";

import trolley from "./trolley.png";

import { addToCart } from "../../common/utils";

export default class ProductBox extends Component {
    constructor(props) {
        super(props);
    }

    getPrice() {
        const price = this.props.product.prices.find(
            (price) =>
                price.currency.symbol === this.props.ActiveCurrency.symbol
        );
        return price.amount;
    }
    render() {
        console.log(this.props);
        return (
            <SingleProduct>
                <Link to={`/product/${this.props.product.id}`}>
                    <ImageContainer>
                        {this.props.product.inStock == true ? (
                            <Image image={this.props.product.gallery[0]}>
                                <Background
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart(this.props.product, [], 1);
                                        this.props.onChangeCartItem();
                                    }}
                                >
                                    <Trolley src={trolley} />
                                </Background>
                            </Image>
                        ) : (
                            <OverlayImage image={this.props.product.gallery[0]}>
                                out of stock
                            </OverlayImage>
                        )}
                    </ImageContainer>
                    {this.props.product.inStock == true ? (
                        <>
                        <Name>{this.props.product.name}</Name>
                        <Price>
                        {this.props.ActiveCurrency.symbol}
                        {this.getPrice()}
                        </Price>
                        </>
                    ) : (
                        <>
                            <OutOfStockName>
                                {this.props.product.name}
                            </OutOfStockName>
                            <OutOfStockPrice>
                                {this.props.ActiveCurrency.symbol}
                                {this.getPrice()}
                            </OutOfStockPrice>
                        </>
                    )}
                </Link>
            </SingleProduct>
        ); // CURRENCY schemat
    }
}
