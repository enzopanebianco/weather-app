export const convertFahrenheitToCelsius = (temp)=> {
    if (temp) {
        const celsius = (temp - 32) * (5 / 9);
        
        return celsius
    }
    else return 0;
}
export const convertCelsiusToFahrenheit = (temp) => {
    if (temp) {
        const fahrenheit = Math.round((temp*1.8)+32);
        
        return fahrenheit
    }
    else return 0;
}
