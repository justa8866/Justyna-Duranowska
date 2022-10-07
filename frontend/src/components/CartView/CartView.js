import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    text-align: left;
    font-family: Raleway;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 900px) {
        grid-template-columns: 10% 50% 40%;
    }
`;

export const InnerContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
`;

export const LeftColumn = styled.div`
    flex: 1;
`;

export const FirstRow = styled.div``;

export const Hr = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--hr);
    margin: 1em 0;
    padding: 0;
`;
export const Name = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
`;

export const Brand = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin: 15px 0;
`;

export const Text = styled.span`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`;

export const BoldText = styled.span`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

export const Price = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

export const Button = styled.button`
    @media (max-width: 1250px) {
        width: 50%;
    }
    width: 28%;
    height: 52px;
    border: none;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-family: "Raleway";
    font-weight: 600;
    font-size: 16px;
    color: var(--basicWhite);
    background: var(--green);
    margin-top: 15px;
    &:hover {
        cursor: pointer;
    }
`;

export const Arrow = styled.button`
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 26px;
    margin-left: 8px;
    border: none;
    color: var(--basicWhite);
    // background: var(--arrow);
    background: rgba(0, 0, 0, 0.73);
    padding: 0px;
    &:hover {
        cursor: pointer;
    }
`;

export const InfinityRow = styled.div`
    width: 100%;
    font-family: Raleway;
    margin-top: 50px;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 70% 10% 20%;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--hr);
    grid-auto-rows: 1fr;
`;

export const ThirdColumn = styled.div`
    display: flex;
    align-items: flex-start;
    width: 45px;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;

    & > *:last-child {
        align-self: flex-end;
        margin-bottom: 0px;
    }
`;

export const Sign = styled.button`
    display: block;
    text-align: center;
    background: var(--basicWhite);
    height: 45px;
    width: 45px;
    border: 1px solid var(--black);
    font-weight: 200;
    font-size: 40px;
    text-transform: uppercase;
    &:hover {
        background: var(--black);
        color: var(--basicWhite);
        cursor: pointer;
    }
`;

export const Number = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: block;
    width: 100%;
    text-align: center;
`;

export const RightColumn = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
`;

export const Space = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    margin-left: auto;
`;

export const LastRow = styled.div`
    margin-top: 24px;
`;

export const ImageContainer = styled.div`
    background-image: url("${(props) => props.image}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    max-height: 288px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    &:not(:last-of-type) {
        margin-bottom: 35px;
    }
`;

export const ImageSmall = styled.img`
    max-height: 288px;
    width: 100%;
    margin-bottom: 35px;
    &:not(:last-of-type) {
        margin-bottom: 35px;
    }
`;
