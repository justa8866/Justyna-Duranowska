import React, { Component } from "react";
import AttributeSelector from "../AttributeSelector";
import {
    Container,
    InnerContainer,
    Name,
    Text,
    Price,
    Hr,
    BoldText,
    Brand,
    Button,
    ThirdColumn,
    RightColumn,
    LeftColumn,
    Number,
    InfinityRow,
    FirstRow,
    LastRow,
    Sign,
    ImageContainer,
    Arrow,
    Space,
    Row,
    Column,
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

    setSelectedAttributeValues = (name, value, index) => {
        const cartItems = [...this.state.cartItems];

        const findAttributeIndex = cartItems[index].attributes.findIndex(
            (attribute) => attribute.name === name
        );

        if (findAttributeIndex > -1) {
            cartItems[index].attributes[findAttributeIndex].value = value;
        }

        this.setCartItems(cartItems);
    };

    setSelectedPhotoIndex = (itemIndex, sign) => {
        const cartItems = [...this.state.cartItems];

        if (sign === "+") {
            cartItems[itemIndex].selectedPhoto += 1;
        } else {
            cartItems[itemIndex].selectedPhoto -= 1;
        }

        if (
            cartItems[itemIndex].selectedPhoto >=
            cartItems[itemIndex].product.gallery.length
        ) {
            cartItems[itemIndex].selectedPhoto = 0;
        }

        if (cartItems[itemIndex].selectedPhoto < 0) {
            cartItems[itemIndex].selectedPhoto =
                cartItems[itemIndex].product.gallery.length - 1;
        }

        this.setCartItems(cartItems);
    };

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

    setCartItems(cartItems) {
        this.setState({ cartItems });
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.props.onChangeCartItem();
    }

    changeItemQuantity = (index, quantity, sign) => {
        const cartItems = [...this.state.cartItems];

        if (sign === "+") {
            cartItems[index].quantity += quantity;
        } else {
            cartItems[index].quantity -= quantity;
        }

        if (cartItems[index].quantity <= 0) {
            cartItems.splice(index, 1);
        }

        this.setCartItems(cartItems);
    };

    generateCart() {
        return this.state.cartItems.map((item, index) => {
            return (
                <InfinityRow key={index}>
                    <LeftColumn>
                        <Name>{item.product.name}</Name>
                        <Brand>{item.product.brand}</Brand>
                        <Price>
                            {this.props.ActiveCurrency.symbol}
                            {this.getPrice(item.product)}
                        </Price>
                        {item.product.attributes
                            ? item.product.attributes.map(
                                  (attribute, attrIndex) => (
                                   
                                      <AttributeSelector
                                          key={attrIndex}
                                          attribute={attribute}
                                          defaultAttribute={item.attributes.find(
                                              (attr) =>
                                                  attr.name === attribute.name
                                          )}
                                          setSelectedAttributeValues={(
                                              name,
                                              value
                                          ) =>
                                              this.setSelectedAttributeValues(
                                                  name,
                                                  value,
                                                  index
                                              )
                                          }
                                      />
                                  )
                              )
                            : ""}
                    </LeftColumn>
                    <ThirdColumn>
                        <Sign
                            onClick={() =>
                                this.changeItemQuantity(index, 1, "+")
                            }
                        >
                            {"+"}
                        </Sign>
                        <Number>{item.quantity}</Number>
                        <Sign
                            style={{ marginBottom: "auto" }}
                            onClick={() =>
                                this.changeItemQuantity(index, 1, "-")
                            }
                        >
                            {"-"}
                        </Sign>
                    </ThirdColumn>
                    <RightColumn>
                        <ImageContainer
                            image={item.product.gallery[item.selectedPhoto]}
                        >
                            <Space>
                                <Arrow
                                    onClick={() =>
                                        this.setSelectedPhotoIndex(index, "-")
                                    }
                                >
                                    {"<"}
                                </Arrow>
                                <Arrow
                                    onClick={() =>
                                        this.setSelectedPhotoIndex(index, "+")
                                    }
                                >
                                    {">"}
                                </Arrow>
                            </Space>
                        </ImageContainer>
                    </RightColumn>
                </InfinityRow>
            );
        });
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

    render() {
        return (
            <Container>
                <InnerContainer>
                    <FirstRow>
                        <h1>CART</h1>
                        <Hr />
                    </FirstRow>

                    {this.generateCart()}

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
