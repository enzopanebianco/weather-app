import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import {
    CardBottom, CardTop, Container,
    HighlightArea, Title, CardTitle, HighlightInfo,
    Number, Measure, Progress, NumberProgress,
    Direction,Percent, IconPercent
} from './styles';

function Highlights() {
    const {dayInfo} = useContext(WeatherContext);
    const todayInfo = dayInfo?.consolidated_weather[0];


    return (
        <Container>
            <Title>Today's Highlights</Title>
            <HighlightArea>
                <article>
                    <CardTop>
                        <CardTitle>Wind status</CardTitle>
                        <HighlightInfo>
                            <Number>{Math.ceil(todayInfo?.wind_speed)}</Number>
                            <Measure>mph</Measure>
                        </HighlightInfo>

                        <Direction >
                            <span rotate={Math.ceil(todayInfo?.wind_direction)+270} className="material-icons">
                                send
                            </span>
                            <p>{todayInfo?.wind_direction_compass}</p>
                        </Direction>
                    </CardTop>
                    <CardTop>
                        <CardTitle>Humidity</CardTitle>
                        <HighlightInfo>
                            <Number>{todayInfo?.humidity}</Number>
                            <Measure>%</Measure>
                        </HighlightInfo>
                        <Percent>
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </Percent>
                        <Progress>
                            <NumberProgress humidity={todayInfo?.humidity * 2} />
                        </Progress>
                        <IconPercent>
                            <p>%</p>
                        </IconPercent>
                    </CardTop>
                </article>
                <article>
                    <CardBottom>
                        <CardTitle>Visibility</CardTitle>
                        <HighlightInfo>
                            <Number>{todayInfo?.visibility&&todayInfo.visibility.toFixed(1)}</Number>
                            <Measure>miles</Measure>
                        </HighlightInfo>
                    </CardBottom>
                    <CardBottom>
                        <CardTitle>Air Pressure</CardTitle>
                        <HighlightInfo>
                            <Number>{Math.round(todayInfo?.air_pressure)}</Number>
                            <Measure>mb</Measure>
                        </HighlightInfo>
                    </CardBottom>
                </article>
            </HighlightArea>
        </Container>
    );
}

export default Highlights;