import React, { Component } from "react";
import CartItems from "../CartItems";
import { NumericFormat } from "react-number-format";

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

	getPrice(product) {
		if (!product.prices) {
		return 0;
		}

		const price = product.prices.find(
		(price) => price.currency.label === this.props.ActiveCurrency.label
		);

		if (!price) {
		return 0;
		}

		return price.amount;
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
		(item) => (sum += this.getPrice(item.product) * item.quantity)
		);

		this.state.cartItems.map((item) =>
		console.log(this.getPrice(item.product))
		);

		console.log(sum);

		return sum;
	}

	onChangeCartItem = (cartItems) => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
		this.setState({ cartItems });
		this.props.onChangeCartItem();
	};

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
						<NumericFormat
						value={Number(this.getTotalPrice() * 0.21)}
						displayType={"text"}
						thousandSeparator={true}
						decimalScale={2}
						prefix={this.props.ActiveCurrency.symbol}
						/>
					</BoldText>
					<Text>Quantity: </Text>
					<BoldText>{this.getTotalQuantity()}</BoldText>
					<Text>Total: </Text>
					<BoldText>
						<NumericFormat
						value={Number(this.getTotalPrice())}
						displayType={"text"}
						decimalScale={2}
						thousandSeparator={true}
						prefix={this.props.ActiveCurrency.symbol}
						/>
					</BoldText>
					</Row>
					<Button>ORDER</Button>
				</LastRow>
			</InnerContainer>
		</Container>
		);
	}
}
