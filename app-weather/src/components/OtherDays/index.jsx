import React, { Fragment, useContext } from 'react';
import Days from '../Days';
import { WeatherContext } from '../../contexts/WeatherContext';
import { Container, Content, Header, Scale, Main, Footer,Credit } from './styles';
import Highlights from '../Highlights';

function OtherDays() {
  const { nextDays, changeCelsiusFahrenheit } = useContext(WeatherContext);
  
  return (
    <Fragment>
      <Container>
        <Content>
          <Header>
            <Scale onClick={() => changeCelsiusFahrenheit(true)}>ºC</Scale>
            <Scale
              onClick={() => changeCelsiusFahrenheit(false)}
              style={{ background: '#585676', color: 'white' }}>ºF</Scale>
          </Header>
          <Main>
            {nextDays?.map((day, index) => {
              return (
                <Days key={day.id} nextDay={day} index={index} />
              );
            })}
          </Main>
          <Footer>
            <Highlights />
          </Footer>
        <Credit>created by <strong>Enzo Panebianco</strong> - devChallenges.io</Credit>
        </Content>
      </Container>
    </Fragment>
  );
}

export default OtherDays;