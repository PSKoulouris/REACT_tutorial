import { useEffect, useState } from "react";
function ApiGet() {
    const [joke, setJoke] = useState("Une blague ici")
    const [categories, setCategories] = useState([])

  async function loadCat(){
        const res = await fetch('https://api.chucknorris.io/jokes/categories')
        const data = await res.json()
        setCategories(data)
    }
    // charger les catégories au demarrage de mon composant
    useEffect(()=>{
        loadCat();
    },[])  
    
    async function getCatJoke(catParam){
        const res = await fetch('https://api.chucknorris.io/jokes/random?category='+catParam)
        const data = await res.json()
        setJoke(data.value)
    }
    return(
        <section>
            <h2>Joke per category</h2>
            { categories.map((category)=>
                <button onClick={()=>getCatJoke(category)} key={category}>
                    {category}
                </button>
            )}
            <p>{joke}</p>
        </section>
    )
}

export default ApiGet;



 