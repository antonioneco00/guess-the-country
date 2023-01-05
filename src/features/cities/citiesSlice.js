import { createSlice } from "@reduxjs/toolkit";

const data = require("../../data/cities.json");
const savedData = localStorage.getItem('savedData');
const countries = savedData ? JSON.parse(savedData) : data.countries;
const initialState = {
  randomCity: "",
  randomCountries: [],
  countries,
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    getRandomCity: (state, action) => {
      const id = () => {
        let index;
        let countryIds = [];

        state.countries.forEach((country) => {
          countryIds.push(country.id);
        });

        do {
          index = Math.floor(Math.random() * countryIds.length);
        } while (!state.countries[index].cities.length);

        return state.countries[index].id;
      };

      const country = () => {
        let randomCountry;

        do {
          randomCountry = state.countries.find(
            (country) => country.id === id()
          );
        } while (randomCountry === undefined);

        return randomCountry;
      };

      const cityId = Math.ceil(Math.random() * country().cities.length - 1);
      const city = () => {
        let randomCity;

        do {
          randomCity = country().cities[cityId];
        } while (randomCity === undefined);

        return randomCity;
      };

      state.randomCity = city();
    },
    getRandomCountries: (state, action) => {
      state.randomCountries = [];

      let countryIds = [];

      state.countries.forEach((country) => {
        countryIds.push(country.id);
      });

      const id = () => {
        const index = Math.floor(Math.random() * countryIds.length);

        return state.countries[index].id;
      };

      /* const id = () => {
        let countryId;

        do {
          countryId = Math.ceil(Math.random() * state.countries.length);
        } while (!state.countries[countryId - 1].cities.length);

        return countryId;
      }; */

      const randomCountry = () => {
        let country;

        do {
          country = state.countries.find((country) => country.id === id());
        } while (country === undefined);

        return country;
      };

      while (state.randomCountries.length < 3) {
        const currentCountries = state.randomCountries.map((currentCountry) => {
          return currentCountry.name;
        });

        const uniqueCountry = randomCountry();
        let hasCity = false;

        if (uniqueCountry.cities.includes(state.randomCity)) {
          hasCity = true;
        }

        if (!currentCountries.includes(uniqueCountry.name) && !hasCity)
          state.randomCountries.push(uniqueCountry);
      }

      state.countries.forEach((country) => {
        const randomIndex = Math.floor(
          Math.random() * (state.randomCountries.length + 1)
        );
        country.cities.includes(state.randomCity) &&
          state.randomCountries.splice(randomIndex, 0, country);
      });
    },
    addCountry: (state, action) => {
      state.countries.push(action.payload);
    },
    addCity: (state, action) => {
      const countryId = parseInt(action.payload.countryId);
      const country = state.countries.find(
        (country) => country.id === countryId
      );
      const city = action.payload.city;

      country.cities.push(city);
    },
    updateCountry: (state, action) => {
      const { id, name, fromColor, viaColor, toColor, direction } =
        action.payload;

      const editCountry = state.countries.find((country) => country.id === id);

      editCountry.name = name;
      editCountry.fromColor = fromColor;
      editCountry.viaColor = viaColor;
      editCountry.toColor = toColor;
      editCountry.direction = direction;
    },
    updateCity: (state, action) => {
      const cityOldName = action.payload.oldName;
      const cityNewName = action.payload.newName;
      const countryHasCity = state.countries.find((country) =>
        country.cities.includes(cityOldName)
      );
      const cityIndex = countryHasCity.cities.indexOf(cityOldName);
      countryHasCity.cities[cityIndex] = cityNewName;
    },
    deleteCountry: (state, action) => {
      const deleteCountry = state.countries.find(
        (country) => country.id === parseInt(action.payload)
      );

      state.countries = state.countries.filter(
        (country) => country !== deleteCountry
      );
    },
    deleteCity: (state, action) => {
      const countryHasCity = state.countries.find(country => country.cities.includes(action.payload));

      countryHasCity.cities = countryHasCity.cities.filter(
        city => city !== action.payload
      )
    },
  },
});

export const {
  getRandomCity,
  getRandomCountries,
  addCountry,
  addCity,
  updateCountry,
  updateCity,
  deleteCountry,
  deleteCity,
} = citiesSlice.actions;

export default citiesSlice.reducer;
