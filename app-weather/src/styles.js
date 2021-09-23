import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;

  @media(max-width:375px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
