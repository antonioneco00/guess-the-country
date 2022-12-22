import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities/citiesSlice';
import scoreReducer from '../features/score/scoreSlice';

export const store = configureStore({
    reducer: {
        citiesData: citiesReducer,
        score: scoreReducer
    }
})