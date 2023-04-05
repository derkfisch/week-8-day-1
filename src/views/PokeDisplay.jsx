import React, { useEffect, useState } from 'react';
import PokeTable from '../components/PokeTable';
import PokeForm from '../components/PokeForm';

export default function PokeDisplay() {

    const [name, setName] = useState("Pikachu");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const pokemonStats = data.MRData.Pokemon.Pokemon[0].Name;
                setPokemon(pokemonStats);
            })
    }, [name]); // I wasnt sure what to do here

    const updatePokemon = (newName) =>{
        setName(newName);
    }

    return (
        <div>
            <h1 className="text-center">{name}, I choose you!</h1>
            <PokeForm updatePokemon={updatePokemon}/>
            <PokeTable pokemon={pokemon} />
        </div>
    )
}