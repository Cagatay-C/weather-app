import axios from "axios"
import { useState } from "react"
import { WeatherDisplay } from "./WeatherDisplay"

const apiKey = import.meta.env.VITE_APP_WEATHER_APIKEY
const baseURL = import.meta.env.VITE_APP_WEATHER_BASEURL

export const LocationForm = () => {
  const [countryName, setCountryName] = useState("")
  const [cityName, setCityName] = useState("")
  const [data, setData] = useState(null)

  async function weatherData(countryName: string, cityName: string) {
    await axios
      .get(
        `${baseURL}/data/2.5/weather?q=${countryName},${cityName}&APPID=${apiKey}`
      )
      .then((result) => {
        setData(result.data)
        console.log(result.data)
      })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setCountryName("")
    setCityName("")
    weatherData(cityName, countryName)
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          fontSize: "1.2rem",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <div style={{ marginRight: "2rem" }}>
          <label htmlFor="ctry">Country </label>
          <input
            type="text"
            name="ctry"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            required
            style={{ padding: "0.3rem" }}
          />
        </div>
        <div>
          <label htmlFor="cty">City </label>
          <input
            type="text"
            name="cty"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
            style={{ padding: "0.3rem" }}
          />
        </div>
        <button type="submit" style={{ marginLeft: "0.3rem" }}>
          Submit
        </button>
      </form>
      {data !== undefined && data !== null ? (
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <WeatherDisplay weatherData={data} baseURL={baseURL} />
        </div>
      ) : null}
    </div>
  )
}
