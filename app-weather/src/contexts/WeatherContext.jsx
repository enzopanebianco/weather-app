import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } from '../utils/convertTemperature';

export const WeatherContext = createContext({});

export function WeatherContextProvider(props) {
  const [dayInfo, setDayInfo] = useState();
  const [measureDegrees, setMeasureDegrees] = useState(true);
  const [nextDays, setNextDays] = useState();

  async function getWeatherByPosition() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      if (position) {
        const { data } = await api.get(`search/?lattlong=${position.coords.latitude},${position.coords.longitude}`);

        if (data) {
          const response = await api.get(`${data[0].woeid}`);

          setDayInfo(response.data);
          setNextDays(response.data.consolidated_weather.slice(1, 7))
        }
      }
      else {
        alert('Você precisa informar a sua localidade')
      }
      setMeasureDegrees(true)
    });
  }
  useEffect(() => {

    getWeatherByPosition();

  }, []);


  //função que verifica primeiramente qual medida que está sendo usada
  //Celsius ou Fahrenheit e com isso muda os valores com base nas funções
  //de converter
  function changeCelsiusFahrenheit(bool) {

    if (measureDegrees !== bool) {
      setMeasureDegrees(bool);

      if (measureDegrees) {
        for (let i = 0; i < nextDays.length; i++) {
          const element = nextDays[i];
          element.max_temp = convertCelsiusToFahrenheit(element.max_temp);
          element.min_temp = convertCelsiusToFahrenheit(element.min_temp);
        }
        dayInfo.consolidated_weather[0].the_temp =
          convertCelsiusToFahrenheit(dayInfo.consolidated_weather[0].the_temp);
      }
      else {
        for (let i = 0; i < nextDays.length; i++) {
          const element = nextDays[i];
          element.max_temp = convertFahrenheitToCelsius(element.max_temp);
          element.min_temp = convertFahrenheitToCelsius(element.min_temp);
        }
        dayInfo.consolidated_weather[0].the_temp =
          convertFahrenheitToCelsius(dayInfo.consolidated_weather[0].the_temp);
      }
    }
    else return;
  }
  return (
    <WeatherContext.Provider value={{
      dayInfo, setDayInfo, nextDays,
      setNextDays,
      changeCelsiusFahrenheit,
      getWeatherByPosition,
      setMeasureDegrees,
      measureDegrees
    }}>
      {props.children}
    </WeatherContext.Provider>
  )
}