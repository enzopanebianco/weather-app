import React, { Fragment, useContext, useState } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import api from '../../services/api';
import cloud from '../../assets/img/cloud.png'
import {
  Container, Footer, Header, Main, FormArea, Close,
  Today, City, Temperature, Description, InputDiv, Btn, CloudArea
} from './styles';
import { dateFormat } from '../../utils/convertDateToString';

function SearchArea() {
  const savedSearch = JSON.parse(localStorage.getItem('local'));
  const [searchCity, setSearchCity] = useState('');
  const { dayInfo, setDayInfo, setNextDays,
    getWeatherByPosition, measureDegrees, setMeasureDegrees } = useContext(WeatherContext);
  const [menuSearch, setMenuSearch] = useState(false);
  const todayInfo = dayInfo?.consolidated_weather[0];

  async function getCityInformation() {
    const { data } = await api.get(`search?query=${searchCity}`);//procura o id da cidade

    if (data.length > 0) {
      const response = await api.get(`${data[0].woeid}`);//procura os dados da cidade
      setDayInfo(response.data);
      setNextDays(response.data.consolidated_weather.slice(1, 7))
      setMeasureDegrees(true);
    }
    else {
      alert('Não encontramos a cidade informada')

    }
  }
  async function sendCityName(e) {
    e.preventDefault();
    await getCityInformation();
    setMenuSearch(false);
  }
  return (

    <Container>
      {
        menuSearch ?
          //area para pesquisar outras regiões
          <FormArea>
            <Close>
              <span onClick={() => setMenuSearch(false)} className="material-icons">
                close
              </span>
            </Close>
            <form onSubmit={sendCityName}>
              <InputDiv>
                <span className="material-icons">
                  search
                </span>
                <input placeholder='search location' type="text" onChange={e => setSearchCity(e.target.value)} />
              </InputDiv>
              <Btn type="submit">Search</Btn>
            </form>
          </FormArea>
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