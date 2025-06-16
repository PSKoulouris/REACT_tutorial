import { useEffect, useState } from "react"
function ComentAPI() {

    // Liste de commentaire (vide)
    const [commentsList, setCommentsList]= useState([])
    
    // Rafraichir la liste
    async function refreshCommentsList(){
        // Faire un appel vers l'API
        const response = await fetch('https://simple-comments-api.onrender.com/comments')
        const data = await response.json()
        setCommentsList(data)
    }

    // Remplir quand je charge la page
    useEffect( ()=>{
        // setTimeout(refreshCommentsList, 1000)
        refreshCommentsList();
    },[])

    return (
        <section>
            <h2> Comments API </h2>
            <p> Nombre de commentaires : {commentsList.length} </p>
            <ul>
                {commentsList.map(
                   (commentaire) => 
                    <li>
                        <img src={'images/' + commentaire.user+ '.png'}/>
                        <div>{commentaire.message}</div>
                    </li>
                )}
            </ul>
        </section>
)}
export default ComentAPI