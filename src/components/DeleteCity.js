import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";
import FlexForm from "./includes/FlexForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { deleteCity } from "../features/cities/citiesSlice";
import RingButton from "./includes/RingButton";
import { useEffect } from "react";

const DeleteCity = () => {
  const countries = useSelector((state) => state.citiesData.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allCities = countries
  .map((country) => {
    return country.cities;
  })
  .flat();

  useEffect(() => {if (countries.length === 0 || allCities.length === 0) navigate('/')}, [allCities.length])

  const citiesOptions = allCities.map((city) => {
    return (
      <option value={city} key={uuid()}>
        {city}
      </option>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = e.target.city.value;

    dispatch(deleteCity(city));
  };

  return (
    <section>
      <SectionHeader title="Delete an existing city" />

      <p>Maybe you only want to guess country capitals</p>

      <FlexForm onSubmit={handleSubmit}>
        <select name="city" className="bg-zinc-800 ring-1 ring-fuchsia-500 rounded-md mb-2">
          {citiesOptions}
        </select>
        <RingButton text="Delete" ringColor="fuchsia" />
        <RingLink url="/" text="Back" ringColor="rose" />
      </FlexForm>
    </section>
  );
};

export default DeleteCity;
