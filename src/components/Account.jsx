import React, { useState, useEffect } from 'react';
import axios from "axios";
 

function Account() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/")
            .then(response => {
                setClients(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error fetching Clients", error);
            });
    }, []);

    return (
        <> 
            <div className='bg-my-image  w-screen h-screen bg-cover'>
                <div>
                     
                    {clients.map(client => (
                        <div className="flex flex-col" key={client.id}>
                            <div className='text-lg rounded-xl  inline-block  m-2  bg-slate-400/90 p-1'>
                                <p className='text-center text-xl m-5'><span className='font-bold'>Name : {client.lastNAme}, {client.firstName}</span></p>
                                
                                <p className='text-center text-xl m-5'><span className='font-bold'>Email: {client.email}</span></p>
                            </div>
                            {client.accounts.map(account => (
                                <div className='text-lg rounded-lg m-2  bg-slate-400/90 p-1' key={account.id}>
                                    <p className='font-bold text-lg text-center text-green-700  font-mono'>Balance: ${account.balance}</p>
                                    <p className='text-center text-lg'><span className='font-bold'>Account Number: {account.number}</span></p>
                                    <p><span className='font-mono text-lg  '>Creation Date: {account.creationDate}</span></p>
                                    {account.transactions.map(transaction => (
                                        <div className='text-lg rounded-xl  inline-block  m-2  bg-slate-300/90  ' key={transaction.id}>
                                            <p className='text-center text-xl '><span className=' '>type: {transaction.type}</span></p>
                                            <p className='text-center text-xl m-2'><span className=' '>Details: {transaction.detail}</span></p>
                                            <p><span className='font-mono text-lg  '>date: {transaction.date}</span></p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
               
            </div>
        </>
    );
}

export default Account;