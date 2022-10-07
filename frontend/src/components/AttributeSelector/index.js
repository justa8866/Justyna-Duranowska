import React, { Component } from "react";
import {
    ActiveBox,
    ActiveButton,
    Box,
    Button,
    ButtonBox,
    Color,
    ColorBox,
    Property,
    StandardText,
    Wrapper,
} from "./AttributeSelector";

export default class AttributeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.selectedValue == "") {
            if (props.attribute) {
                if (props.attribute.items.length) {
                    console.log(props.defaultAttribute);

                    // if (props.defaultAttribute) {
                    //     return {
                    //         selectedValue: props.defaultAttribute.value,
                    //     };
                    // }

                    console.log(props.setSelectedAttributeValues);

                    if (props.setSelectedAttributeValues) {
                        props.setSelectedAttributeValues(
                            props.attribute.name,
                            props.attribute.items[0].displayValue
                        );
                    }

                    console.log(props.attribute.name, props.attribute.items);

                    return {
                        selectedValue: props.attribute.items[0].displayValue,
                    };
                }
            }
        }

        return null;
    }

    setSelectedAttributeValue = (name, value) => {
        this.setState({
            selectedValue: value,
        });

        this.props.setSelectedAttributeValues(name, value);
    };

    generateAttributes() {
        if (!this.props.attribute) {
            return <></>;
        }

        const { attribute } = this.props;

        if (attribute.name.toLowerCase() === "color") {
            return (
                <Color>
                    <StandardText>COLOR:</StandardText>
                    <ColorBox>
                        {attribute.items.map((item, index) => {
                            return this.state.selectedValue ===
                                item.displayValue ? (
                                <ActiveBox
                                    key={index}
                                    background={item.displayValue}
                                />
                            ) : (
                                <Box
                                    key={index}
                                    background={item.displayValue}
                                    onClick={() =>
                                        this.setSelectedAttributeValue(
                                            attribute.name,
                                            item.displayValue
                                        )
                                    }
                                />
                            );
                        })}
                    </ColorBox>
                </Color>
            );
        }

        return (
            <>
                <StandardText>{attribute.name}:</StandardText>
                <ButtonBox>
                    {attribute.items.map((item, index) => {
                        return this.state.selectedValue ===
                            item.displayValue ? (
                            <ActiveButton key={index}>
                                {item.displayValue}
                            </ActiveButton>
                        ) : (
                            <Button
                                key={index}
                                onClick={() =>
                                    this.setSelectedAttributeValue(
                                        attribute.name,
                                        item.displayValue
                                    )
                                }
                            >
                                {item.displayValue}
                            </Button>
                        );
                    })}
                </ButtonBox>
            </>
        );
    }

    render() {
        return <>{this.generateAttributes()}</>;
    }
}
