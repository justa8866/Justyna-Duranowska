import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Trolley, DropdownMenu, BodyStyle, Badge } from "./CartDropdown.style";
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
            <>
                <BodyStyle whiteColor={this.state.whiteBackground} />
                <Link to="/cart">
                    <Trolley
                        src={trolley}
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
                    />
                    <Badge>{this.props.cartItemsCount}</Badge>
                    <DropdownMenu toggleOn={this.state.isToggleOn}>
                        <h3>My Bag</h3> {this.props.cartItemsCount} items
                    </DropdownMenu>
                </Link>
            </>
        );
    }
}

export default CartDropdown;
