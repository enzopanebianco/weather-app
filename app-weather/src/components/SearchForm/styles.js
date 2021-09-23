import styled from 'styled-components';

export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    width: 80%;
    margin-top: 10px;
    form{
        margin-top: 20px;
        display:flex ;
        width: 100%;
        justify-content: space-between;
    }
    @media(max-width:375px){
        position: relative;
        height: 150vh;
    form{
        width: 90%;
    }
   
  }
    
`;
export const InputDiv = styled.div`
    padding: 8px;
    background: transparent;
    border: 1px solid #616475;
    outline: none;
    color: #616475 ;
    width: 268px;
    display: flex;
    gap: 10px;
    align-items: center;
    input{
        background: transparent;
        outline: none;
        color: #616475 ;
        border:0;
        width: 100%;
    }
    @media(max-width:375px){
        width: 252px;
    }
`;
export const Btn = styled.button`
    background: #3C47E9;
    padding: 8px 10px;
    color: #E7E7EB;
    cursor: pointer;
    font-weight: 500;
    border:0;
`;
export const Close = styled.div`
    color: #E7E7EB;
    align-self: flex-end;
    cursor: pointer;
    @media(max-width:375px){
        span{
            margin-right: 10px;
        }
  }
`;