import React, { Fragment } from 'react';
import SearchArea from './components/SearchArea';
import OtherDays from './components/OtherDays';
import { WeatherContextProvider } from './contexts/WeatherContext';
import { Container } from './styles';

function App() {

  return (
    <Fragment>
      <WeatherContextProvider>
        <Container>
        <SearchArea />
        <OtherDays />
      </Container>
      </WeatherContextProvider>
    </Fragment>
  );
}

export default App;