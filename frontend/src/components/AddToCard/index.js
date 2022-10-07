import React, { Component } from "react";
import { ButtonAddToCart } from "./AddToCard";

import { addToCart } from "../../common/utils";

export default class AddToCard extends Component {
    render() {
        return (
            <ButtonAddToCart
                onClick={() => {
                    addToCart(
                        this.props.product,
                        this.props.selectedAttributes,
                        1
                    );
                    this.props.onChangeCartItem();
                }}
            >
                ADD TO CART
            </ButtonAddToCart>
        );
    }
}
