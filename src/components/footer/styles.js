import styled from "styled-components";



export const StyledFooter =styled.footer`
margin-bottom: 0;
`

export const FooterContainer = styled.footer`
  background-color: #333;
  margin-bottom: 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  img{
    height: 15px;
    width: 15px;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
    display: flex;
  }

`;

export const Copyright = styled.div`
  font-size: 0.75rem;
`;

export const DeveloperInfo = styled.div`
  font-size: 0.75rem;
`;

export const A = styled.a`
  color: #fff;
`;