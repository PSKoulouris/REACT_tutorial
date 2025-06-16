import { useEffect, useState } from "react";
function ApiGet() {
    const [joke, setJoke] = useState("Une blague ici")
    const generateJoke = async () =>{
        setJoke("Waiting...")

        //security
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random")
            const data = await response.json()
            setJoke(data.value)

        } catch(err){
            generateJoke("Connection Failed...")
            console.error(err)
        }
    }
    //lancement quand la page se charge:
    useEffect(() => {
        generateJoke()
    },[])

    return(
        <section>
            <h1>API Get Chuck Norris</h1>
            <button onClick = {generateJoke}>Get a joke</button>
            <p>{joke}</p>
        </section>
    )
}

export default ApiGet;