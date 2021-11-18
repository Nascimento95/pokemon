import { useState, useEffect } from "react";

const Home = () => {
    const [ pokemon , setPokemon] = useState(null)
    // ce useeffect correspond au componentsDidmount grace au array vide a la fin executer a la fin du return (render)
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
               <div className="card col-6 bg-secondary" >
                    <img className="card-img-top img-fluid" src={`${pokemon.sprites.other.dream_world.front_default} `} />
                    <div className="card-body">
                        <p> <span className="fw-bold "> nom :</span> {pokemon.name} </p>
                        <p> <span className="fw-bold">hauteur : </span> {pokemon.height} cm </p>
                        <p> <span className="fw-bold">Poid: </span> {pokemon.weight} kg </p>
                   
                        {pokemon.types.map((type, index) =>
                            (<div key={type.type.name}>
                                <p> <span className="fw-bold">le type :  </span> {type.type.name} </p>
                            </div>)
                        )}
                        <button onClick={clickRandom} type="button" class="btn btn-success">Change pokemon</button>
                    </div>
               </div>    
                
            )}
             
              
        </>
    );
  }
  
  export default Home