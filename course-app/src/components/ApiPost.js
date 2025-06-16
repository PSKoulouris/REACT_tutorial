import { useState } from "react"

function ApiPost(){
    const [comValue, setComValue] = useState('')

    async function envoyer(event){
        event.preventDefault();
        console.log('envoyer le formulaire')
        const bodyData = {
            user:'friend1',
            message: comValue
        }
        console.log(bodyData, JSON.stringify(bodyData))
        //Request HTTP
        const res = await fetch('https://simple-comments-api.onrender.com/comments',{
            method:'POST',
            body: JSON.stringify(bodyData)
        })
        const data = await res.json()
        console.log(data)
        
        // Remise à zéro de l'input
        setComValue('')
    }

    return(
        <section>
            <h2>API Post</h2>
            <form onSubmit={envoyer}>
                <input 
                    onChange={ (e)=>setComValue(e.target.value) } 
                    placeholder="Votre commentaire"
                    value={comValue}/>

                <button type="submit">Envoyer mon com</button>
            </form>
            <p> L'utilisateur a écris : {comValue} </p>
        </section>
    )
}
export default ApiPost