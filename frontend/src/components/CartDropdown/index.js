import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItems from "../CartItems";

import {
    Trolley,
    DropdownMenu,
    BodyStyle,
    Badge,
    Items,
    MyBag,
    ButtonContainer,
    Button,
    GreenButton,
    Container,
    TextContainer,
    Left,
    Right,
} from "./CartDropdown.style";
import trolley from "./trolley.png";

class CartDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            whiteBackground: true,
            isToggleOn: true,
            cartItemsCount: 0,
        };
    }

    getCart = () => {
        const cart = [];
        const cartStorage = localStorage.getItem("cart");

        if (cartStorage) {
            JSON.parse(cartStorage).map((item) =>
                cart.push({ selectedPhoto: 0, ...item })
            );
        }

        this.setState({ cartItems: cart });
    };

    static getDerivedStateFromProps(props, state) {
        if (props.cartItemsCount) {
            return {
                cartItemsCount: props.cartItemsCount,
            };
        }

        return null;
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
            <div
                style={{ display: "block" }}
                onMouseEnter={() => {
                    this.getCart();
                    this.setState({
                        whiteBackground: false,
                        isToggleOn: true,
                    });
                }}
                onMouseLeave={() =>
                    this.setState({
                        whiteBackground: true,
                        isToggleOn: false,
                    })
                }
            >
                <BodyStyle whiteColor={this.state.whiteBackground} />

                <Trolley src={trolley} />
                <Badge>{this.state.cartItemsCount}</Badge>
                <DropdownMenu toggleOn={this.state.isToggleOn}>
                    <Container>
                        <Items>
                            <MyBag>My Bag,&nbsp;</MyBag>{" "}
                            {this.state.cartItemsCount}{" "}
                            {this.state.cartItemsCount === 1 ? "item" : "items"}
                        </Items>

                        <CartItems
                            cartItems={this.state.cartItems}
                            ActiveCurrency={this.props.ActiveCurrency}
                            onChangeCartItem={this.onChangeCartItem}
                            disableArrows
                        />

                        <TextContainer>
                            <Left>Total</Left>
                            <Right>
                                {this.props.ActiveCurrency.symbol}
                                {this.getTotalPrice().toFixed(2)}
                            </Right>
                        </TextContainer>

                        <ButtonContainer>
                            <Link to="/cart">
                                <Button>View bag</Button>
                            </Link>
                            <GreenButton>Check out</GreenButton>
                        </ButtonContainer>
                    </Container>
                </DropdownMenu>
            </div>
        );
    }
}

export default CartDropdown;
