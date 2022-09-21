import React from 'react';
export default function PokemonList({pokemon})//destructure
{
    return(
        <div style={{border:'2px solid white'}}>
            <h1 style={{border:'2px dotted black',
            padding:10, background:"white",marginLeft:320,marginRight:320}}>List of Pokemons</h1>
            {pokemon.map(p=>(
                <div style={{border:'2px solid black',
            padding:10, background:"cyan",marginTop:20,marginLeft:320,marginRight:320}} key={p}>{p}</div>
                //put key if we want to loop incase
            ))}
         
            
        </div>
    )
       
}