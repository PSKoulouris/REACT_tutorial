import { useEffect, useState } from "react";
function MonTchat(){

    const [roomsList, setRoomsList]= useState([])

    async function refreshRooms(){
        // appel vers l'API
        const resRaw = await fetch('https://chat-api-course.onrender.com/rooms')
        const resJson = await resRaw.json()
        console.log(resJson.data)
        setRoomsList(resJson.data)
    }
    useEffect(()=>{
        refreshRooms()
        // setInterval(()=>refreshRooms(), 1000)
    },[])
    return(
        <section>
            <h2>Tchat</h2>
            <ul>
                {
                    roomsList.map( (room)=>
                        <li key={room.id}>
                            {room.roomName} 
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default MonTchat

