import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import CityForm from "./components/CityForm";
import CountryForm from "./components/CountryForm";
import Welcome from "./components/Welcome";
import UpdateCountry from "./components/UpdateCountry";
import UpdateCity from "./components/UpdateCity";
import DeleteCountry from "./components/DeleteCountry";
import DeleteCity from "./components/DeleteCity";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-pattern text-white text-center">
      <div className="sm:w-2/3 w-11/12 bg-zinc-900 font-mono rounded-xl ring-2 ring-indigo-600 shadow-lg shadow-fuchsia-600 p-2">
        <h1 className="text-3xl font-bold font-rajdhani text-blue-700 text-shadow shadow-indigo-500">Guess the country</h1>
  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/country-form" element={<CountryForm />} />
            <Route path="/edit-country/:id" element={<CountryForm />} />
            <Route path="/city-form" element={<CityForm />} />
            <Route path="/update-country" element={<UpdateCountry />} />
            <Route path="/update-city" element={<UpdateCity />} />
            <Route path="/delete-country" element={<DeleteCountry />} />
            <Route path="/delete-city" element={<DeleteCity />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

/*
  Hacer que sea deslizable - h-screen
*/