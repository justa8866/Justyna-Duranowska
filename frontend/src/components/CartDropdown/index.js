import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItems from "../CartItems";

import {
  Trolley,
  DropdownMenu,
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
    return {
      cartItemsCount: parseInt(props.cartItemsCount, 10) || 0,
    };
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
  };

  enableDropdown = () => {
    this.getCart();
    this.props.onViewCardListBackdropFilter(true);
    this.setState({
      isToggleOn: true,
    });
  };

  render() {
    return (
      <div
        style={{ display: "block", position: "relative"  }}
        onMouseEnter={() =>
          this.props.disableDropDown ? null : this.enableDropdown()
        }
        onMouseLeave={() => {
          this.props.onViewCardListBackdropFilter(false);
          this.setState({
            isToggleOn: false,
          });
        }}
      >
        <Trolley src={trolley} />
        {this.state.cartItemsCount > 0 ? (
          <Badge>{this.state.cartItemsCount}</Badge>
        ) : (
          ""
        )}
        <DropdownMenu toggleOn={this.state.isToggleOn}>
          <Container>
            <Items>
              <MyBag>My Bag,&nbsp;</MyBag> {this.state.cartItemsCount}{" "}
              {this.state.cartItemsCount === 1 ? "item" : "items"}
            </Items>

            <CartItems
              cartItems={this.state.cartItems}
              ActiveCurrency={this.props.ActiveCurrency}
              onChangeCartItem={this.onChangeCartItem}
              disableArrows
              small
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
