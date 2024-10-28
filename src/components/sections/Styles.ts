import styled from "styled-components";
import grade from "../../assets/grade.png"
export const MainContainer = styled.div `
        
        background-color: #00DE2F;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
        
       
       & ::before {
        content: "";
        position: absolute;
        top: 103px;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(${grade});
        background-size: cover;
        opacity: 0.05;
        z-index: 1;
        height: 100vh;


       }
`;

export const Paragraph = styled.p `
    font-size: 40px;
    color: white;
    text-align: center;
    max-width: 800px;
    margin-top: 10px;
`;

export const Logo= styled.img `
    height: 108px;
    

    @media (max-width: 768px) {
       width: 500px;
       height: auto;
    }
    
    @media (max-width: 425px) {
       width: 400px;
       height: auto;
    }

    @media (max-width: 425px) {
       width: 300px;
       height: auto;
    }
`;


export const Button = styled.button `
    background-color: white;
    border: none;
    padding: 20px 40px;
    color: black;
    margin-top: 64px;
    font-size: 18px;
    ;

    @media (max-width: 320px) {
       margin-top: 30px;
    }
`;