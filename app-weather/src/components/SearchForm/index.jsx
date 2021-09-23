import React, { Fragment, useContext, useState } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import api from '../../services/api';
import { Btn, Close, FormArea, InputDiv } from './styles';

function SearchForm({ setMenuSearch }) {
    
    const [searchCity, setSearchCity] = useState('');
    const {  setDayInfo, setNextDays,setMeasureDegrees } = useContext(WeatherContext);

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
        <Fragment>
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
        </Fragment>
    );
}

export default SearchForm;