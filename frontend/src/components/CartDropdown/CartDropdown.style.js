import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const BodyStyle = createGlobalStyle`
    body {
        background-color: ${(props) =>
            props.whiteColor ? "var(--basicWhite)" : "rgba(57, 55, 72, 0.22)"};
    }
`;

export const Trolley = styled.img`
    width: 20px;
    height: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const DropdownMenu = styled.div`
    width: 400px;
    position: absolute;
    flex-direction: column;
    right: -20px;
    z-index: 9999;
    background-color: var(--basicWhite);
    box-shadow: 0px 3px 14px -12px rgba(66, 68, 90, 1);
    display: ${(props) => (props.toggleOn ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`;

export const Badge = styled.span`
    position: absolute;
    top: 14px;
    right: -16px;
    color: var(--basicWhite);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding-top: 1px;
    color: var(--basicWhite);
    background-color: var(--black);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
`;

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
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
    background-color: var(--basicWhite);
    border: 1px solid var(--black);
    color: var(--black);
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    padding-top: 13px;
    padding-bottom: 13px;

    &:hover {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }

    a:link,
    a:visited {
        color: var(--black);
    }
`;

export const GreenButton = styled.button`
    border: none;
    background-color: var(--green);
    color: var(--basicWhite);
`;

export const TextContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 30px;
    margin-top: 10px;
`;

export const Left = styled.span`
    text-align: left;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
`;

export const Right = styled.span`
    text-align: right;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;
