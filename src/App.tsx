import axios from "axios";
import { useState, useEffect } from "react";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  const getCountries = async () => {
    try {
      setLoad(true);
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch (error) {
      console.log("error");
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  console.log("load", load);
  console.log(countries);
  return (
    <div className="App">
      {load && "sadık"}
      {countries.map((country) => {
        return(
          <p>
            {country.name} / {country.capital}
          </p>
        )
      })}
    </div>
  );
}

export default App;
