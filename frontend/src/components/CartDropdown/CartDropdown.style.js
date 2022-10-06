import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const BodyStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
        props.whiteColor ? "white" : "rgba(57, 55, 72, 0.22)"};
  }
`;

export const Trolley = styled.img`
    width: 20px;
    height: 20px;
`;

export const DropdownMenu = styled.span`
    width: 325px;
    position: absolute;
    flex-direction: column;
    top: 60px;
    right: -21px;
    z-index: 9999;
    background-color: red;
    -webkit-box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    display: ${(props) => (props.toggleOn ? "flex" : "none")};
`;

export const Badge = styled.span`
    position: absolute;
    top: 16px;
    right: -15px;
    width: 25px;
    height: 25px;
    background: red;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding-bottom: 3.5px;
    color: var(--basicWhite);
    background-color: var(--black);
`;