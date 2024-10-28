import styled from "styled-components";

export const SectionContainer = styled.div`
    background-color: #E8EAE9;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
   
`;

export const Left = styled.div`
    text-align: left;
    margin: 140px;
    @media (max-width: 1200px) {
        margin-left: -600px; 
    }
    @media (max-width: 768px) {
        margin-left: -300px;
    }
    @media (max-width: 480px) {
        margin-left: 0; 
    }
`;

export const Title = styled.h1`
    color: black;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #777777;
`;

export const TitleText = styled.h3`
    font-size: 33px;
    color: black;
    margin-bottom: 10px;
    max-width: 464.02px ;
`;

export const Text = styled.p`
    color: #777777;
    text-align: justify; 
    max-width: 300px;
`;

export const Button = styled.button`
    color: black;
    background-color: white;
`;