import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCity } from "../features/cities/citiesSlice";
import FlexForm from "./includes/FlexForm";
import RingButton from "./includes/RingButton";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";

const CityForm = () => {
  const countries = useSelector((state) => state.citiesData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {if (countries.length === 0) navigate('/')}, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const country = e.target.country.value;
    const newCity = e.target.name.value;
    const cityData = {
      countryId: country,
      city: newCity
    };
    
    dispatch(addCity(cityData));

    navigate("/");
  };

  const countriesOptions = countries.countries.map((country) => {
    return (
      <option value={country.id} key={country.id}>
        {country.name}
      </option>
    );
  });

  return (
    <section>
      <SectionHeader title='Add new city' />

      <p>Add the cities for a recently created country or an old one</p>

      <FlexForm onSubmit={handleSubmit}>
        <label htmlFor="country">Country</label>
        <select name="country" className="w-1/2 self-center bg-zinc-800 ring-1 rounded-md mb-2">{countriesOptions}</select>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="w-1/2 self-center bg-zinc-800 ring-1 rounded-md mb-2" required />
        <RingButton text='Save' ringColor='blue' />
        <RingLink url='/' text='Back' ringColor='rose' />
      </FlexForm>
    </section>
  );
};

export default CityForm;
