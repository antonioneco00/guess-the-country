import { createSlice } from "@reduxjs/toolkit";

const data = require("../../data/cities.json");
const countries = data.countries;
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
        let countryId;

        do {
          countryId = Math.ceil(Math.random() * state.countries.length);
        } while (!state.countries[countryId - 1].cities.length);

        return countryId;
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

      const id = () => Math.ceil(Math.random() * state.countries.length);
      
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
        const randomIndex = Math.floor(Math.random() * (state.randomCountries.length + 1));
        country.cities.includes(state.randomCity) && state.randomCountries.splice(randomIndex, 0, country);
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
    /* updateCountry: (state, action) => {
      state.countries.push({
        ...state.countries,
        action.payload
      });
    },
    updateCity: (state, action) => {
      const countryId = parseInt(action.payload.countryId);
      const country = state.countries.find(
        (country) => country.id === countryId
      );
      const city = action.payload.city;

      country.cities.push(city);
    }, */
  },
});

export const { getRandomCity, getRandomCountries, addCountry, addCity } = citiesSlice.actions;

export default citiesSlice.reducer;
