import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <div>{isLoading ? 'TRUE' : 'FALSE'}</div>
      {
        (pokemons.length > 0) && (
          <ul>
            {
              pokemons.map((pokemon) => (
                <li key={pokemon.name}>
                  {pokemon.name}
                </li>
              ))
            }
          </ul>
        )
      }
      <button
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Siguiente
      </button>
    </>
  );
};
