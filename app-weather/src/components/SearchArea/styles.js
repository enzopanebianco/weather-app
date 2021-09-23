import styled from 'styled-components';

export const Container = styled.div`
  width:459px;
  background: #1E213A;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 100vh;
  @media(max-width:375px){
    position: relative;
    height: 150vh;
  }
`;
export const Header = styled.header`
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    button{
        background:#6E707A;
        padding: 10px;
        border: 0;
        color: white;
        font-size: 13px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    button:nth-child(2){
        border-radius: 100px;
    }
    @media(max-width:375px){
    width: 75%;
    margin-top: 10px;
    button{
        padding: 8px;
    }
  }
`;
export const CloudArea = styled.div`
    position: absolute;
    display: flex;
    margin-bottom: 20vh;
    gap: 250px;
    div
    img{
        filter: opacity(0.12);
        width: 150px;
        z-index: -5;
    }
    @media(max-width:375px){
        gap: 200px;
    }
`;
export const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
        height: 150px;
        margin-bottom: 50px;
    }
    @media(max-width:375px){
        img{
            height: 120px;
            margin-top: 30px;
            margin-bottom: 60px;
        }
    }
`;
export const Temperature = styled.div` 
    display: flex;
    margin-bottom: 25px;
    p{
        color: #E7E7EB;
        font-size: 100px;
        align-self: flex-start;
    }
    span{
        color: #6E707A;
        font-size: 50px;
        align-self: flex-end;
    }
`;
export const Description = styled.strong`
    color: #A09FB1;
    font-weight: 500;
    font-size: 30px;
    @media(max-width:375px){
        margin-bottom: 30px;
    }
`;
export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Today = styled.div`
    color: #88869D;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    line-height: 21px;
`;

export const City = styled.p`
    color: #88869D;
    font-weight: 600;
    display: flex;
    align-items: center;
    
    @media(max-width:375px){
        margin-bottom: 100px;
        margin-top: 20px;
    }
`;