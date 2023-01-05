import { useDispatch, useSelector } from "react-redux";
import { deleteCountry } from "../features/cities/citiesSlice";
import RingButton from "./includes/RingButton";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";
import FlexForm from "./includes/FlexForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DeleteCountry = () => {
  const countries = useSelector((state) => state.citiesData.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {if (countries.length === 0) navigate('/')}, [countries.length])

  const countriesOptions = countries.map((country) => {
    return (
      <option value={country.id} key={country.id}>
        {country.name}
      </option>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCountry = e.target.countries.options[e.target.countries.selectedIndex].value;

    dispatch(deleteCountry(selectedCountry));
  };

  return (
    <section>
      <SectionHeader title="Delete an existing country" />

      <p className="text-rose-500">NOTE: a country and all its cities will be deleted</p>

      <FlexForm onSubmit={handleSubmit}>
        <select name="countries" className="bg-zinc-800 ring-1 ring-fuchsia-500 rounded-md mb-2">
          {countriesOptions}
        </select>

        <RingButton text="Delete" ringColor="fuchsia" />
        <RingLink url="/" text="Back" ringColor="rose" />
      </FlexForm>
    </section>
  );
};

export default DeleteCountry;
