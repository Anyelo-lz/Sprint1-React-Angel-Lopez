import React, { useState, useEffect } from 'react';
import axios from "axios";
import Bottom from '../components/Bottom';

function GetAccount() {
    const [accounts, setGetAccounts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/accounts/")
            .then(response => {
                setGetAccounts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error fetching Client", error);
            });
    }, []);

    return (
        <> 
        <div className='bg-my-image  w-screen h-screen bg-cover'>
        <div className='m-10'>
            
            {accounts.map(account => (
                <div className='text-lg rounded-xl  inline-block  m-2  bg-slate-400/90 p-1' key={account.id}>
                    <p className='text-center text-2xl m-5'><span className='font-bold'>Account Number: {account.number}</span></p>
                    <p className='font-bold text-3xl text-center text-green-700 m-5 font-mono'>Balance: ${account.balance}</p>
                    <p><span className='font-mono text-lg m-10'>Creation Date: {account.creationDate}</span></p>
                </div>
            ))}
            <div/>
        </div>
        <Bottom/>
        </div>
    </>
    );
}

export default GetAccount;