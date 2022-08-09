import React from 'react';
const PokemonCards = ({ pokemon, pokemonChoosen }) => {
    return (
        <section className='lg:w-2/4 mx-auto my-12'>
            {
                !pokemonChoosen ? (<h1 className='text-center text-xl font-semibold italic'>Please Choose a Pokemon</h1>) : (
                    <div className="flex flex-col items-center">
                        <div>
                            <h2 className="text-2xl font-semibold font-mono uppercase">{pokemon.name}</h2>
                            <img src={pokemon.sprites.front_default} alt="pokemonImage" />
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row md:justify-around  lg:justify-around w-3/4 md:w-full lg:w-full mx-auto mt-5 text-2xl font-semibold tracking-wider text-center">
                            <div>
                                <p>HP: <span className='text-cyan-900 font-bold'>{pokemon.stats[0].base_stat}</span></p>
                                <p>Attack: <span className='text-cyan-900 font-bold'>{pokemon.stats[1].base_stat}</span></p>
                            </div>
                            <div>
                                <p>Defense: <span className='text-cyan-900 font-bold'>{pokemon.stats[2].base_stat}</span></p>
                                <p>Types: <span className='text-cyan-900 font-bold'>{pokemon.types[0].type.name}</span></p>
                            </div>
                        </div>
                    </div>)
            }
        </section>
    );
};

export default PokemonCards;