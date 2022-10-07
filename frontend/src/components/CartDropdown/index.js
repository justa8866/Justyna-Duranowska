import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            whiteBackground: true,
            isToggleOn: true,
        };
    }

    render() {
        return (
            <div style={{display: "block"}}
                onMouseEnter={() =>
                    this.setState({
                        whiteBackground: false,
                        isToggleOn: true,
                    })
                }
                onMouseLeave={() =>
                    this.setState({
                        whiteBackground: true,
                        isToggleOn: false,
                    })
                }
            >
                <BodyStyle whiteColor={this.state.whiteBackground} />

                <Trolley src={trolley} />
                <Badge>{this.props.cartItemsCount}</Badge>
                <DropdownMenu toggleOn={this.state.isToggleOn}>
                    <Container>
                        <Items>
                            <MyBag>My Bag,&nbsp;</MyBag>{" "}
                            {this.props.cartItemsCount}{" "}
                            {this.props.cartItemsCount === 1 ? "item" : "items"}
                        </Items>

                        <TextContainer>
                            <Left>Total</Left>
                            <Right>2000</Right>
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
