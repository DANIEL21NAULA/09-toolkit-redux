import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemon, startLoadingPokemon } from './pokemonSlice';

export const getPokemons = (page = 0) => (
  async (dispatch) => {
    dispatch(startLoadingPokemon());
    // TODO REALIZAR PETICION HTTP
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemon({
      pokemons: data.results,
      page: page + 1,
    }));
  }
);
