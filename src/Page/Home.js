import { useState, useEffect } from "react";

const Home = () => {
    const [ pokemon , setPokemon] = useState(null)
    
    useEffect(() => {
        fetch( `https://pokeapi.co/api/v2/pokemon/${1}`)
            .then(reponse => reponse.json())
            .then(result => setPokemon(result))
    }, []);
    const clickRandom = () => {
        let min = 1;
        let max = 151;
        
        let result = Math.floor(Math.random() * (max - min + 1) + min)
        fetch( `https://pokeapi.co/api/v2/pokemon/${result}`)
            .then(reponse => reponse.json())
            .then(result => setPokemon(result))
    }

    // console.log("state pokemon",pokemon);
    return (
        <>
            <p>Home</p>
            {pokemon == null ? (
                <></>
            ) : (
               <div>
                   <img src={`${pokemon.sprites.other.dream_world.front_default} `} />
                   <p>{pokemon.name} </p>
                   <p> <span>hauteur : </span> {pokemon.height} </p>
                   <p> <span>Poid: </span> {pokemon.weight} kg </p>
                   {/* <p> <span>Le type : </span> {pokemon.types.type.name}  kg </p> */}
                   {pokemon.types.map((type, index) =>
                    (<div>
                        <p> <span>le type :  </span> {type.type.name} </p>
                    </div>)
                   )}
                   <button onClick={clickRandom} type="button" class="btn btn-success">Success</button>
               </div>    
                
            )}
             
              
        </>
    );
  }
  
  export default Home