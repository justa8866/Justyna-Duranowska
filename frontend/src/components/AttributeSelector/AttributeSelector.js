import styled from "styled-components";

export const StandardText = styled.div`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin: 15px 0;
    text-transform: uppercase;
`;

export const ButtonBox = styled.div`
    width: 40%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;

    @media (max-width: 1250px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Button = styled.div`
    display: flex;
    padding: 15px 30px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
    &:hover {
        background: var(--black);
        color: var(--basicWhite);
        cursor: pointer;
    }
`;

export const ActiveButton = styled(Button)`
    background: var(--black);
    color: var(--basicWhite);
`;

// Color

export const Color = styled.div`
    padding-bottom: 30px;
`;

export const ColorBox = styled.div`
    display: flex;
`;

export const Box = styled.div`
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-right: 10px;
  justify-content: space-between;
  background: ${(props) => props.background};
  border: ${(props) => props.background == 'White' ? '1px solid black' : 'none'};
  &:hover {
    border: 1px solid white;
    outline: 1px solid var(--green);
    cursor: pointer;
  }

}
`;

export const ActiveBox = styled(Box)`
    border: 1px solid white;
    outline: 1px solid var(--green);
    cursor: pointer;
`;
