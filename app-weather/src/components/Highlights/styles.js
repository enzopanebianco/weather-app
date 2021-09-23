import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:375px){
        width: 100%;
    }
`;
export const Title = styled.h2`
    color: #E7E7EB;
    font-weight: 600;
    font-size: 24px;
    align-self: flex-start;
    @media (max-width:375px){
        align-self:stretch;
    }
  
`;
export const HighlightArea = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    article{
        display: flex;
        justify-content: space-between;
    }
    @media (max-width:375px){
        align-items: center;
        justify-content: center;
        width: 100%;
        article{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`;
export const CardTop = styled.div`
    background:#1E213A;
    height: 204px;
    width:328px;
    margin-bottom: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:375px){
        margin-left: 0px;
    }
`;
export const CardBottom = styled.div`
    background:#1E213A;
    height: 159px;
    width:328px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:375px){
        margin-left: 0px;
        margin-bottom: 50px;
    }
    
`;
export const CardTitle = styled.strong`
    color:#E7E7EB;
    font-size: 16px;
    margin-top: 22px;
    font-weight: 500;
`;
export const HighlightInfo = styled.div`
    display: flex;
    gap:5px;
    color:#E7E7EB;
    margin-top: 20px;
`;

export const Number = styled.h3`
    font-weight: 700;
    font-size: 64px;
    align-self: flex-start;
`;
export const Measure = styled.p`
    font-weight: 500;
    font-size: 36px;
    align-self: center;
`;
export const Direction = styled.div`
    font-size: 14px;
    color: #E7E7EB;
    font-weight: 500;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    span{
        background: #6E707A;
        border-radius: 50px;
        padding: 6px;
        transform: ${p=>`rotate(${p.children[0].props?.rotate}deg)`};
    }
`;
export const Progress = styled.div`
    width: 200px;
    background: #e7e7eb;
    height: 8px;
    border-radius: 80px;
`;
export const NumberProgress = styled.div`
    background: #FFEC65;
    width: ${p=>p.humidity+'px'};
    height: 8px;
    border-radius: 80px;
`;
export const Percent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    color: #A09FB1;
    margin-top: 10px;
    margin-bottom: 5px;
`;
export const IconPercent = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 200px;
    color: #A09FB1;
    margin-top: 5px;
`;