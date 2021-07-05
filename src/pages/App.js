import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState();
  const [pokemon, setPokemon] = useState("");
  const [abilities, setAbilities] = useState();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      const { results } = data;
      setPokemonList(results);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const getAbilities = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const data = await response.json();
      const { abilities } = data;
      console.log(abilities);
      setAbilities(abilities);
    };
    getAbilities();
  }, [pokemon]);

  const handleClick = (name) => {
    setPokemon(name);
    console.log(name);
    setActive(!isActive);
  };

  return (
    <div>
      <h1>Details {pokemon}</h1>
      <h3>Abilities</h3>
      <ul>
        {abilities?.map((poke) => (
          <li key={poke.ability.name}>{poke.ability.name}</li>
        ))}
      </ul>
      <h3>List Pokemon</h3>
      <ul className="list-group">
        {pokemonList?.map((poke) => (
          <li
            className={`list-group-item list-group-item-action ${
              pokemon === poke.name ? "active" : false
            }`}
            onClick={() => handleClick(poke.name)}
            key={poke.name}
          >
            {poke.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="container pt-3">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
      </ul>
      <Pokemon />
    </div>
  );
}

export default App;
