import { useState,useEffect } from "react";
import axios from "axios";
const urlApi ="http:/localhost:8080/api/clients/"
function getData(id) {

    const [client,setClient]=useState([]);
useEffect( ()=>{
    axios.get(`${urlApi} ${id}`)
    .then((response)=>{setClient(response.data)})
    .catch((err)=>{console.log(err)})
},[id])    

  return client
}

export default getData