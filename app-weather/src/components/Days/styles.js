import styled from "styled-components";

export const Container = styled.div`
    background: #1E213A;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    height: 177px;
    margin-bottom: 30px;
    img{
        height: 62px;
    }
    @media (max-width:375px){
        width: 120px ;
    }
`;

export const Title = styled.span`
    font-weight: 500;
    color: #E7E7EB;
    @media (max-width:375px){
        font-size: 14px;
    }
`;

export const Temperature = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 10px;
    p:nth-child(1){
        color: #E7E7EB;
    }
    p:nth-child(2){
        color: #A09FB1;
    }
`;