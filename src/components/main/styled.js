import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-bottom: 25px;
  justify-content: center;
`;

export const RegisterButton = styled.button`
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
  padding: 10px;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const StyledCarrinho =styled.div`
display: flex;
width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
`