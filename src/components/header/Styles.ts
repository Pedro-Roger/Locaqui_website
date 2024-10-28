import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: center;
    gap: 120px;
    align-items: center;
    height: 103px;
    background-color: #E8EAE9;
   
   
`
export const Link = styled.button`
  border: none;
  font-size: 15px;
  background: transparent;
  font-weight: bold;

  &:hover {
    color: chartreuse;
  }

  @media (max-width: 1024px) {
       display: none ;
    }
`;
