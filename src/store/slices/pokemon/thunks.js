import { startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page = 0) => (
  (dispatch, getState) => (dispatch(startLoadingPokemon())));
