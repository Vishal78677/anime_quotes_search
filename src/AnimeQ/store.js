import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './Reducer/Reducer';

const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});

export default store;
