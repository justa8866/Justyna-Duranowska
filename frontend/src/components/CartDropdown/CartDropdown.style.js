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

export const DropdownMenu = styled.div`
    width: 325px;
    position: fixed;
    flex-direction: column;
    right: 60px;
    z-index: 9999;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    display: ${(props) => (props.toggleOn ? "flex" : "none")};
    justify-content: center;
    align-items: center;
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

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 60px;
`;

export const MyBag = styled.h3`
    font-weight: 700;
    font-family: "Raleway";
    font-size: 16px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 30px;
`;

export const Button = styled.button`
    width: calc(100% - 1rem);
    text-transform: uppercase;
    border-radius: 0;
    border: 1px solid black;
    background-color: #ffffff;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-top: 13px;
    padding-bottom: 13px;

    &:hover {
        cursor: pointer;
    }
`;

export const GreenButton = styled.button`
    border: none;
    background-color: #5ece7b;
    color: #ffffff;
`;

export const TextContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 30px;
`;

export const Left = styled.span`
    text-align: left;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

export const Right = styled.span`
    text-align: right;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;
