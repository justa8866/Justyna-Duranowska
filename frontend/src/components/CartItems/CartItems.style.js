import styled from "styled-components";


export const Brand = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin: 15px 0;
`;

export const LeftColumn = styled.div`
    flex: 1;
`;

export const Name = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
`;

export const Price = styled.div`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
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