import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRandomCity,
  getRandomCountries,
} from "../features/cities/citiesSlice";
import {
  incrementCounter,
  incrementScore,
  resetScore,
} from "../features/score/scoreSlice";
import $ from "jquery";
import RingLink from "./includes/RingLink";

const Quiz = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.citiesData.randomCity);
  const countries = useSelector((state) => state.citiesData.randomCountries);
  const counter = useSelector((state) => state.score.counter);
  const score = useSelector((state) => state.score.score);

  useEffect(() => {
    dispatch(getRandomCity());
    dispatch(getRandomCountries());
  }, []);

  const handleCheckAnswer = (e) => {
    const selectedCountry = parseInt(e.target.id);

    const countryData = countries.find(
      (country) => country.id === selectedCountry
    );

    if (countryData.cities.includes(city)) {
      e.target.className += " shadow-button shadow-green-600";

      dispatch(incrementScore());
    } else {
      e.target.className += " shadow-button shadow-red-600";

      const correctCountry = countries.find((country) =>
        country.cities.includes(city)
      );

      $(`#${correctCountry.id}`).addClass("shadow-button shadow-green-600");
    }

    setTimeout(() => {
      $(".btn").removeClass("shadow-button shadow-green-600 shadow-red-600");

      dispatch(getRandomCity());
      dispatch(getRandomCountries());
      dispatch(incrementCounter());
    }, 2000);
  };

  const handleReset = () => {
    dispatch(resetScore());
  };

  const countryButtons = countries.map((country) => {
    return (
      <button
        key={country.id}
        className={`btn bg-gradient-to-${country.direction} from-${country.fromColor} via-${country.viaColor} to-${country.toColor} w-1/2 self-center text-black text-shadow-bordered border-2 border-${country.fromColor} rounded-full px-4 py-1 my-2`}
        id={country.id}
        onClick={handleCheckAnswer}
      >
        {country.name}
      </button>
    );
  });

  return (
    <section className="flex flex-col" id="quiz">
      <h2 className="text-xl text-fuchsia-500">{city}</h2>
      {countryButtons}
      <p>{counter}</p>
      <p>Score: {score}</p>
      <RingLink url='/' text='Back' ringColor='rose' onClick={handleReset} />
    </section>
  );
};

export default Quiz;
