import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexForm from "./includes/FlexForm";
import RingButton from "./includes/RingButton";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";

const UpdateCountry = () => {
  const countries = useSelector((state) => state.citiesData.countries);
  const countriesOptions = countries.map((country) => {
    return (
      <option value={country.id} key={country.id}>
        {country.name}
      </option>
    );
  });
  const navigate = useNavigate();

  useEffect(() => {if (countries.length === 0) navigate('/')}, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = e.target.country.value;

    navigate(`/edit-country/${id}`);
  };

  return (
    <section>
      <SectionHeader title="Update an existing country" />

      <p>Did you add the wrong flag colors in a country's details? Update a country!</p>

      <FlexForm onSubmit={handleSubmit}>
        <label>Country</label>
        <select name="country" className="bg-zinc-800 ring-1 rounded-md mb-3">
          {countriesOptions}
        </select>
        <RingButton text="Update" ringColor="blue" />
        <RingLink url="/" text="Back" ringColor="rose" />
      </FlexForm>
    </section>
  );
};

export default UpdateCountry;
