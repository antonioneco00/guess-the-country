import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";
import $ from "jquery";
import RingButton from "./includes/RingButton";
import { updateCity } from "../features/cities/citiesSlice";
import { useNavigate } from "react-router-dom";
import FlexForm from "./includes/FlexForm";
import { useEffect } from "react";

const UpdateCity = () => {
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

  const handleChange = (e) => {
    $("#editCity").val(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCity = {
      oldName: e.target.cities.options[e.target.cities.selectedIndex].value,
      newName: e.target.editCity.value,
    };

    dispatch(updateCity(updatedCity));

    navigate("/");
  };

  return (
    <section>
      <SectionHeader title="Update an existing city" />

      <p>Do you see any typo in a city name? You can update city names, too!</p>

      <FlexForm onSubmit={handleSubmit}>
        <label htmlFor="cities">City</label>
        <select
          name="cities"
          className="bg-zinc-800 ring-1 rounded-md mb-3"
          id="citySelect"
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          {citiesOptions}
        </select>
        <input
          type="text"
          name="editCity"
          className="bg-zinc-800 ring-1 rounded-md mb-3"
          id="editCity"
          onChange={handleChange}
          required
        />
        <RingButton text="Update" ringColor="blue" />
        <RingLink url="/" text="Back" ringColor="rose" />
      </FlexForm>
    </section>
  );
};

export default UpdateCity;
