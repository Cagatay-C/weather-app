import { kelvinToCelcius } from "../utilities/util"

type WeatherDisplayProps = {
  weatherData: {
    cod: number
    name: string
    weather: { icon: string; description: string }[]
    main: {
      feels_like: string
      humidity: string
      pressure: string
      temp: string
      temp_max: string
      temp_min: string
    }
  }
  baseURL: string
}

export const WeatherDisplay = ({
  weatherData,
  baseURL,
}: WeatherDisplayProps) => {
  const iconURL =
    baseURL +
    "/img/wn/" +
    `${weatherData.cod !== 404 ? weatherData.weather[0].icon : null}` +
    ".png"
  return (
    <div style={{ fontSize: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <p>{weatherData.name}</p>
        <p>
          <span>Description:</span>
          {weatherData.weather[0].description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0rem 20rem",
        }}
      >
        <div>
          <p>
            <span>Feels Like:</span>
            {kelvinToCelcius(+weatherData.main.feels_like)}
          </p>
          <p>
            <span>Pressure:</span>
            {weatherData.main.pressure}
          </p>
          <p>
            <span>Humidity:</span>
            {weatherData.main.humidity}
          </p>
        </div>
        <div>
          <p>
            <span>Temp:</span>
            {kelvinToCelcius(+weatherData.main.temp)}
          </p>
          <p>
            <span>Max Temp:</span>
            {kelvinToCelcius(+weatherData.main.temp_max)}
          </p>
          <p>
            <span>Min Temp:</span>
            {kelvinToCelcius(+weatherData.main.temp_min)}
          </p>
        </div>
      </div>
    </div>
  )
}
