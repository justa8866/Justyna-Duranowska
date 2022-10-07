import React, { Component } from "react";
import CartItems from "../CartItems";

import {
    Container,
    InnerContainer,
    Text,
    Hr,
    BoldText,
    Button,
    FirstRow,
    LastRow,
    Row,
} from "./CartView";

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            selectedIndexOfPhotos: [],
            total: 0,
        };
    }

    componentDidMount() {
        this.getCart();
    }

    getCart() {
        const cart = [];
        const cartStorage = localStorage.getItem("cart");

        if (cartStorage) {
            JSON.parse(cartStorage).map((item) =>
                cart.push({ selectedPhoto: 0, ...item })
            );
        }

        this.setState({ cartItems: cart });
    }

    getTotalQuantity() {
        let cartItemCount = 0;
        this.state.cartItems.map((item) => (cartItemCount += item.quantity));
        return cartItemCount;
    }

    getTotalPrice() {
        let sum = 0;
        this.state.cartItems.map(
            (item) => (sum += item.product.prices[0].amount * item.quantity)
        );
        return sum;
    }

    onChangeCartItem = (cartItems) => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.setState({ cartItems });
        this.props.onChangeCartItem();
    }

    render() {
        return (
            <Container>
                <InnerContainer>
                    <FirstRow>
                        <h1>CART</h1>
                        <Hr />
                    </FirstRow>

                    <CartItems
                        cartItems={this.state.cartItems}
                        ActiveCurrency={this.props.ActiveCurrency}
                        onChangeCartItem={this.onChangeCartItem}
                    />

                    <LastRow>
                        <Row>
                            <Text>Tax 21%: </Text>
                            <BoldText>
                                {this.props.ActiveCurrency.symbol}
                                {(this.getTotalPrice() * 0.21).toFixed(2)}
                            </BoldText>
                            <Text>Quantity: </Text>
                            <BoldText>{this.getTotalQuantity()}</BoldText>
                            <Text>Total: </Text>
                            <BoldText>
                                {this.props.ActiveCurrency.symbol}
                                {this.getTotalPrice().toFixed(2)}
                            </BoldText>{" "}
                        </Row>
                        <Button>ORDER</Button>
                    </LastRow>
                </InnerContainer>
            </Container>
        );
    }
}
