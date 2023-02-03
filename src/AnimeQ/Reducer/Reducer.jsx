import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FetchRandom = createAsyncThunk('anime/fetch', async () => {
  const animeRes = await axios.get('https://animechan.vercel.app/api/quotes');

  return animeRes.data;
});

export const FetchByName = createAsyncThunk('name/fetch', async (name) => {
  const nameRes = await axios.get(
    `https://animechan.vercel.app/api/quotes/character?name=${name}`
  );
  console.log(
    '🚀 ~ file: Reducer.jsx:14 ~ FetchByName ~ nameRes',
    nameRes.data
  );
  return nameRes.data;
});

const initialState = {
  anime: [],
  error: false,
  loading: 'false',
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchRandom.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(FetchRandom.fulfilled, (state, action) => {
        state.anime = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(FetchRandom.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(FetchByName.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(FetchByName.fulfilled, (state, action) => {
        state.anime = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(FetchByName.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default animeSlice.reducer;
