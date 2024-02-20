import React, { useState, useEffect } from 'react';
 
 
import axios from "axios";

function GetCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/")
            .then(response => {
                setCards(response.data[0].cards); // Accede al primer elemento del array de respuesta que contiene los datos de la persona
            })
            .catch(error => {
                console.log("Error fetching Client", error);
            });
    }, []);

    return (
        <div className=' bg-my-image  w-screen h-screen  bg-cover '>
            <h1 className='m-5 font-bold text-white text-4xl'>Lista de Tarjetas</h1>
            <ul>
                {cards.map(card => (
                    <li className='m-5 p-5 inline-block rounded-xl bg-sky-700' key={card.id}>
                        <p className='  text-white'><span className='text-xl'> Número: </span> {card.number}</p>
                        <p className=' p-2 text-white'>Tipo: {card.type} -  Color: {card.color}</p>
                      
                        <p className=' p-2 text-white'>CVV: {card.cvv}</p>
                        <p className=' text-xs font-mono p-2 text-white'> {card.fromDate}  -  {card.thruDate}</p>
                         
                        
                    </li>
                ))}
            </ul>
        
        </div>
    );
}

export default GetCards