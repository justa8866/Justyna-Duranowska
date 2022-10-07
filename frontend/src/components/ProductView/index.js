import React, { Component } from "react";
import {
    Container,
    DescriptionContainer,
    Name,
    Text,
    Description,
    Price,
    StandardText,
    PriceValue,
} from "./ProductView";

import { gql } from "@apollo/client";

import { withProductIdParam } from "../withRouter";
import ProductGallery from "../ProductGallery";
import AddToCard from "../AddToCard";
import AttributeSelector from "../AttributeSelector";

const GET_PRODUCT = gql`
    query ($productId: String!) {
        product(id: $productId) {
            category
            name
            description
            gallery
            inStock
            brand
            id
            attributes {
                name
                items {
                    displayValue
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
        }
    }
`;

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: new Object(),
            selectedImage: "",
            selectedAttributes: [],
        };
    }

    async componentDidMount() {
        await this.getProduct();
    }

    async componentDidUpdate(previousProps) {
        if (previousProps.productId !== this.props.productId) {
            await this.getProduct();
        }
    }

    async getProduct() {
        const result = await this.props.client.query({
            query: GET_PRODUCT,
            variables: { productId: this.props.productId },
        });

        if (result.data) {
            if (result.data.product) {
                this.setState({
                    product: result.data.product,
                });
            }
        }
    }

    getPrice() {
        if (!this.state.product.prices) {
            return 0;
        }

        const price = this.state.product.prices.find(
            (price) => price.currency.label === this.props.ActiveCurrency.label
        );

        return price.currency.symbol + price.amount;
    }

    setSelectedAttributeValues = (name, value) => {
        const selectedAttributes = [...this.state.selectedAttributes];

        const selectedAttributesIndex = selectedAttributes.findIndex(
            (attribute) => attribute.name === name
        );

        if (selectedAttributesIndex === -1) {
            selectedAttributes.push({ name, value });
        } else {
            selectedAttributes[selectedAttributesIndex].value = value;
        }

        this.setState({
            selectedAttributes,
        });
    };

    render() {
        return (
            <Container>
                <ProductGallery photos={this.state.product.gallery} />
                <DescriptionContainer>
                    <Name>{this.state.product.name}</Name>
                    <Text>{this.state.product.brand}</Text>
                    {this.state.product.attributes
                        ? this.state.product.attributes.map(
                              (attribute, index) => (
                                  <AttributeSelector
                                      key={index}
                                      attribute={attribute}
                                      setSelectedAttributeValues={
                                          this.setSelectedAttributeValues
                                      }
                                  />
                              )
                          )
                        : ""}
                    <Price>
                        <StandardText>PRICE:</StandardText>
                        <PriceValue>{this.getPrice()}</PriceValue>
                    </Price>
                    <AddToCard
                        product={this.state.product}
                        selectedAttributes={this.state.selectedAttributes}
                        onChangeCartItem={this.props.onChangeCartItem}
                    />
                    <Description
                        dangerouslySetInnerHTML={{
                            __html: this.state.product.description,
                        }}
                    ></Description>
                </DescriptionContainer>
            </Container>
        );
    }
}

export default withProductIdParam(ProductView);