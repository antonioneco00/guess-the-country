import { useSelector } from "react-redux";
import RingButton from "./includes/RingButton";
import RingLink from "./includes/RingLink";
import SectionHeader from "./includes/SectionHeader";

const Welcome = () => {
  const countries = useSelector((state) => state.citiesData.countries);
  const highScore = useSelector((state) => state.score.highScore);

  const saveData = (e) => {
    localStorage.setItem("savedData", JSON.stringify(countries));

    e.target.className += 'text-green-500 ring-green-500'
    e.target.innerHTML = 'Saved!'
    e.target.disabled = 'disabled'
  };

  const alertLessThan4 = () =>
    alert("You need 4 countries or more to start the quiz!");
  const alertNoCountries = () => alert("No countries left!");

  const noCities = !countries
    .map((country) => {
      return country.cities;
    })
    .flat().length;

  const alertNoCities = () => alert("No cities left!");

  return (
    <section className="flex flex-col">
      <SectionHeader title="Welcome to the quickest city quiz" />

      <p className="sm:text-base text-xs mb-2">
        Are you studying geography and you don't find an easy way to remember
        city names? Add your own cities and try this quiz!
      </p>

      {highScore > 0 && (
        <p className="md:text-base text-xs text-sky-400 mb-2">Current highscore: {highScore}</p>
      )}

      <div className="grid grid-cols-2 gap-0.5 md:flex md:flex-col md:gap-0 sm:text-base text-xs md:mb-0 mb-2">
        {countries.length >= 4 && !noCities ? (
          <RingLink url="quiz" text="Start" ringColor="emerald" />
        ) : noCities ? (
          <RingButton text="Start" ringColor="rose" onClick={alertNoCities} className='text-rose-500' />
        ) : (
          <RingButton text="Start" ringColor="rose" onClick={alertLessThan4} className='text-rose-500' />
        )}
        <RingButton text="Save data" ringColor="cyan" onClick={saveData} className='' />
        <RingLink url="country-form" text="Add new country" ringColor="sky" />
        {countries.length === 0 ? (
          <>
            <RingButton
              text="Add new city"
              ringColor="rose"
              onClick={alertNoCountries}
              className='text-rose-500'
            />
            <RingButton
              text="Update country"
              ringColor="rose"
              onClick={alertNoCountries}
              className='text-rose-500'
            />
            <RingButton
              text="Update city"
              ringColor="rose"
              onClick={alertNoCountries}
              className='text-rose-500'
            />
            <RingButton
              text="Delete country"
              ringColor="rose"
              onClick={alertNoCountries}
              className='text-rose-500'
            />
            <RingButton
              text="Delete city"
              ringColor="rose"
              onClick={alertNoCountries}
              className='text-rose-500'
            />
          </>
        ) : (
          <>
            <RingLink url="city-form" text="Add new city" ringColor="blue" />
            <RingLink
              url="update-country"
              text="Update country"
              ringColor="indigo"
            />
            {noCities ? (
              <RingButton
                text="Update city"
                ringColor="rose"
                onClick={alertNoCities}
                className='text-rose-500'
              />
            ) : (
              <RingLink url="update-city" text="Update city" ringColor="violet" />
            )}
            <RingLink
              url="delete-country"
              text="Delete country"
              ringColor="fuchsia"
            />
            {noCities ? (
              <RingButton
                text="Delete city"
                ringColor="rose"
                onClick={alertNoCities}
                className='text-rose-500'
              />
            ) : (
              <RingLink url="delete-city" text="Delete city" ringColor="rose" />
            )}
          </>
        )}
      </div>
      <a
        href="https://github.com/antonioneco00"
        className="w-fit flex self-center md:self-end"
        id="gitHubLink"
      >
        <img
          src="github-mark-white.png"
          alt="GitHub link"
          width="30"
          height="30"
        />
        <p className="mt-1 ml-1">antonioneco00</p>
      </a>
    </section>
  );
};

export default Welcome;
