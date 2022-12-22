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

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = e.target.country.value;

    navigate(`/edit-country/${id}`);
  };

  return (
    <section>
      <SectionHeader title="Update an existing country" />

      <FlexForm onSubmit={handleSubmit}>
        <label>Country</label>
        <select name="country" className="bg-zinc-800 rounded-md">
          {countriesOptions}
        </select>
        <RingButton text="Update" ringColor="blue" />
        <RingLink url="/" text="Back" ringColor="rose" />
      </FlexForm>
    </section>
  );
};

export default UpdateCountry;
