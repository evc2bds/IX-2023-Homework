import React from 'react'

export default function PokemonTable(props) {
  return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {
                    props.pokemons.map((pokemon) => {
                        return (
                            <tr key={pokemon.id}>
                                <td>{pokemon.id}</td>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.height}</td>
                                <td>{pokemon.weight}</td>
                            </tr>
                        );
                    })}

            </tbody>
        </table>
    </div>
  )
}
