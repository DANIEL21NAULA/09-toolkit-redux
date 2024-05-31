/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemon: (state/* , action */) => {
      state.isLoading = true;
    },
    setPokemon: (state, action) => {
      console.log(state);
    },
  },
});

export const { startLoadingPokemon, setPokemon } = pokemonSlice.actions;
