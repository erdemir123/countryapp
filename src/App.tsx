import axios from "axios";
import {useState,useEffect} from "react"
import { CountryType } from "./types";


function App() {
  const [countries,setCountries]=useState<CountryType[]>([])
  const [load,setLoad]=useState<boolean>(false)
  const getCountries=async()=>{
    try {
      setLoad(true)
      const {data} = await axios.get<CountryType[]>("https://restcountries.com/v2/all")
      setCountries(data)
      console.log(countries)
      console.log("load", load)
    } catch (error) {
      console.log("error");
    }
    finally{
      setLoad(false)
    }
    
  }
  useEffect(() => {
    getCountries()
  }, [])
  
  return (
    <div className="App">
      Countries
    </div>
  );
}

export default App;