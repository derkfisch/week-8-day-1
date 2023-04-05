import React from 'react'

export default function PokeTable({ pokemon }) {
    const tableHeaders = ["#", 'Pokemon', 'Height', 'Weight'];

    return (
        <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {pokemon.map( poke => (
                        <tr key={poke.name}>
                            <th>{poke.name}</th>
                            <th>{poke.height}</th>
                            <th>{poke.weight}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}