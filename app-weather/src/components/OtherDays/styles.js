import styled from "styled-components";

export const Container = styled.div`
    width: 981px;
    background: #100E1D;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 459px;
    z-index: 2;
    height: 150vh;
    @media(max-width:375px){
        margin-left: 0;
        width: 100%;
    }
`;
export const Content = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
   
`;
export const Header = styled.header`
    align-self: flex-end;
    margin-top: 40px;
    display: flex;
    gap: 10px;
`;
export const Scale = styled.div`
    border-radius: 50px;
    font-size: 18px;
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    background: #E7E7EB;
    color: #110E3C;
    cursor: pointer;
`;
export const Main = styled.main`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    width: 100%;
    @media(max-width:375px){
        flex-wrap: wrap;
    }
`;

export const Footer = styled.footer`
    margin-top: 80px;
    width: 100%;
`;
export const Credit = styled.div`
   margin-top: 80px;
   color: #A09FB1;
   font-size: 14px;
   margin-bottom: 10px;
   strong{
       text-decoration: underline;
   }
   @media(max-width:375px){
       font-size: 12px;
       margin-top: 40px;
   }
`;