import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCountry } from "../features/cities/citiesSlice";
import RingButton from "./includes/RingButton";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";

const CountryForm = () => {
  const countries = useSelector((state) => state.citiesData.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const countryId = parseInt(params.id);

  const editCountry = countryId ? countries.find(country => country.id === countryId) : false;

  console.log(editCountry);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCountry = {
      id: countries.length + 1,
      name: e.target.name.value,
      fromColor: e.target.fromColor.value,
      viaColor: e.target.viaColor.value,
      toColor: e.target.toColor.value,
      direction: e.target.direction.value,
      cities: [],
    };

    dispatch(addCountry(newCountry));

    navigate("/");
  };

  return (
    <section>
      <SectionHeader title='Add new country' />

      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="w-1/2 bg-zinc-800 ring-1 rounded-md mb-3"
          required
        />
  
        <label>Color 1</label>
        <select name="fromColor" className="w-1/2 bg-zinc-800 ring-1 rounded-md mb-3" required>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red-500">Red</option>
          <option value="orange-500">Orange</option>
          <option value="yellow-500">Yellow</option>
          <option value="green-500">Green</option>
          <option value="sky-500">Sky</option>
          <option value="blue-500">Blue</option>
        </select>
  
        <label>Color 2</label>
        <select name="viaColor" className="w-1/2 bg-zinc-800 ring-1 rounded-md mb-3" required>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red-500">Red</option>
          <option value="orange-500">Orange</option>
          <option value="yellow-500">Yellow</option>
          <option value="green-500">Green</option>
          <option value="sky-500">Sky</option>
          <option value="blue-500">Blue</option>
        </select>
  
        <label>Color 3</label>
        <select name="toColor" className="w-1/2 bg-zinc-800 ring-1 rounded-md mb-3" required>
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
        <div className="flex w-1/2 justify-evenly">
          <div className="flex flex-col">
            <label htmlFor="horizontal">Horizontal</label>
            <input type="radio" name="direction" value="b" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="vertical">Vertical</label>
            <input type="radio" name="direction" value="r" />
          </div>
        </div>
  
        <RingButton text='Save' ringColor='blue' />
        <RingLink url='/' text='Back' ringColor='rose' />
      </form>
    </section>
  );
};

export default CountryForm;
