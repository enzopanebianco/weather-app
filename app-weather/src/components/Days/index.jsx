import React, { Fragment, useContext } from 'react';
import { Container, Temperature, Title } from './styles';
import {dateFormat} from '../../utils/convertDateToString';
import { WeatherContext } from '../../contexts/WeatherContext';

function Days({ nextDay, index }) {
  const { measureDegrees } = useContext(WeatherContext);
 
  return (
    <Fragment>
      <Container>
        <Title>{
         dateFormat(nextDay.applicable_date)
        }</Title>
        <img
          src={`https://www.metaweather.com/static/img/weather/${nextDay.weather_state_abbr}.svg`}
          alt="icon do dia" />
        <Temperature>
          <p>{Math.floor(nextDay.max_temp)}{measureDegrees ? 'ºC' : 'ºF'}</p>
          <p>{Math.floor(nextDay.min_temp)}{measureDegrees ? 'ºC' : 'ºF'}</p>
        </Temperature>
      </Container>
    </Fragment>
  );
}

export default Days;