import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCountry, updateCountry } from "../features/cities/citiesSlice";
import RingButton from "./includes/RingButton";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";
import $ from "jquery";
import FlexForm from "./includes/FlexForm";

const CountryForm = () => {
  const countries = useSelector((state) => state.citiesData.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const countryId = parseInt(params.id);

  const editCountry = countryId
    ? countries.find((country) => country.id === countryId)
    : false;

  useEffect(() => {if (countryId && !editCountry) navigate('/')}, [])

  const maxId = () => {
    let arrayIds = [];

    countries.forEach((country) => {
      arrayIds.push(parseInt(country.id));
    });

    return arrayIds.length ? Math.max(...arrayIds) : 0;
  };

  const [country, setCountry] = useState(
    editCountry
      ? editCountry
      : {
          id: maxId() + 1,
          name: "",
          fromColor: "",
          viaColor: "",
          toColor: "",
          direction: "",
          cities: [],
        }
  );

  useEffect(() => {
    $(`#fromColor option[value='${country.fromColor}']`).attr(
      "selected",
      "selected"
    );
    $(`#viaColor option[value='${country.viaColor}']`).attr(
      "selected",
      "selected"
    );
    $(`#toColor option[value='${country.toColor}']`).attr(
      "selected",
      "selected"
    );
    $(`#direction div input[value='${country.direction}']`).attr(
      "checked",
      "checked"
    );
  });

  const handleChange = (e) => {
    setCountry({
      ...country,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editCountry
      ? dispatch(updateCountry(country))
      : dispatch(addCountry(country));

    navigate("/");
  };

  return (
    <section className="text-xs sm:text-sm md:text-base">
      <SectionHeader title={editCountry ? "Edit country" : "Add new country"} />

      <p>Add the new country name and don't forget to include its flag colors!</p>

      <FlexForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="w-1/2 bg-zinc-800 ring-1 rounded-md sm:mb-3 mb-1"
          onChange={handleChange}
          value={country.name}
          required
        />

        <label htmlFor="fromColor">Color 1</label>
        <select
          name="fromColor"
          className="w-1/2 bg-zinc-800 ring-1 rounded-md sm:mb-3 mb-1"
          id="fromColor"
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red-500">Red</option>
          <option value="orange-500">Orange</option>
          <option value="yellow-500">Yellow</option>
          <option value="green-500">Green</option>
          <option value="sky-500">Sky</option>
          <option value="blue-500">Blue</option>
        </select>

        <label htmlFor="viaColor">Color 2</label>
        <select
          name="viaColor"
          className="w-1/2 bg-zinc-800 ring-1 rounded-md sm:mb-3 mb-1"
          id="viaColor"
          onChange={handleChange}
        >
          <option value="">None</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red-500">Red</option>
          <option value="orange-500">Orange</option>
          <option value="yellow-500">Yellow</option>
          <option value="green-500">Green</option>
          <option value="sky-500">Sky</option>
          <option value="blue-500">Blue</option>
        </select>

        <label htmlFor="toColor">Color 3</label>
        <select
          name="toColor"
          className="w-1/2 bg-zinc-800 ring-1 rounded-md sm:mb-3 mb-1"
          id="toColor"
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red-500">Red</option>
          <option value="orange-500">Orange</option>
          <option value="yellow-500">Yellow</option>
          <option value="green-500">Green</option>
          <option value="sky-500">Sky</option>
          <option value="blue-500">Blue</option>
        </select>

        <label htmlFor="direction">Stripes direction</label>
        <div className="flex sm:w-1/2 w-3/5 sm:justify-evenly justify-between" id="direction">
          <div className="flex flex-col">
            <label htmlFor="horizontal">Horizontal</label>
            <input
              type="radio"
              name="direction"
              value="b"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="vertical">Vertical</label>
            <input
              type="radio"
              name="direction"
              value="r"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <RingButton text="Save" ringColor="blue" />
        <RingLink url="/" text="Back" ringColor="rose" />
      </FlexForm>
    </section>
  );
};

export default CountryForm;
