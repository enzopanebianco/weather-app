import React, { Fragment, useContext, useState } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import cloud from '../../assets/img/cloud.png'
import {
  Container, Footer, Header, Main, 
Today, City, Temperature, Description, CloudArea
} from './styles';
import { dateFormat } from '../../utils/convertDateToString';
import SearchForm from '../SearchForm';

function SearchArea() {

  const { dayInfo, getWeatherByPosition, measureDegrees} = useContext(WeatherContext);
  const [menuSearch, setMenuSearch] = useState(false);
  const todayInfo = dayInfo?.consolidated_weather[0];

  return (
    <Container>
      {
        menuSearch ?
          //area para pesquisar outras regiões
          <SearchForm setMenuSearch={setMenuSearch} />
          :
          //Info da região local
          <Fragment>
            <CloudArea>
              <div>
                <img src={cloud} alt='nuvem' />
                <img src={cloud} alt='nuvem' />
              </div>
              <div>
                <img src={cloud} alt='nuvem' />
                <img src={cloud} alt='nuvem' />
              </div>
            </CloudArea>
            <Header>
              <button type="button" onClick={() => setMenuSearch(true)}>Search for places</button>
              <button type="button" onClick={() => getWeatherByPosition()}><span className="material-icons">
                adjust
              </span></button>
            </Header>
            <Main>
              <img
                src={`https://www.metaweather.com/static/img/weather/${todayInfo?.weather_state_abbr}.svg`}
                alt="icon do dia" />
              <Temperature>
                <p>{Math.floor(todayInfo?.the_temp)}</p>
                <span>{measureDegrees ? 'ºC' : 'ºF'}</span>
              </Temperature>
              <Description>{todayInfo?.weather_state_name}</Description>
            </Main>
            <Footer>
              {/* {todayInfo?.applicable_date} */}
              <Today>Today . {dateFormat(Date.now())}</Today>
              <City>
                <span className="material-icons">
                  place
                </span>{dayInfo?.title}</City>
            </Footer>
          </Fragment>
      }
    </Container>

  );
}

export default SearchArea;