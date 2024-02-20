import React, { useState, useEffect } from "react";
import axios from "axios";

function GetLoan() {
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/loans")
      .then(response => {
        setLoans(response.data);
      })
      .catch(error => {
        console.log("Error fetching loans", error);
      });
  }, []);

  const handleLoanChange = (event) => {
    const loanId = parseInt(event.target.value);
    const selectedLoan = loans.find(loan => loan.id === loanId);
    setSelectedLoan(selectedLoan);
  };

  return (
    <div className='bg-my-image3   w-screen h-screen bg-cover'>
      <h1 className="text-white text-4xl font-bold m-5">List of Loans</h1>
      <select onChange={handleLoanChange} className="p-2 m-5 rounded bg-white">
        <option value="">Selecciona un préstamo</option>
        {loans.map(loan => (
          <option key={loan.id} value={loan.id}>{loan.name}</option>
        ))}
      </select>
      {selectedLoan && (
        <div className="m-10 text-white bg-indigo-400/80 inline-block rounded-2xl">
          <h2 className="m-5  text-4xl">{selectedLoan.name}</h2>
          <p className=" text-2xl">Max Amount: $ {selectedLoan.maxAmount.toLocaleString('us-US', { style: 'currency', currency: 'USA' })}</p>
          
          <label className="m-5">Select a payment term::</label>
          <select className="p-2 m-5 rounded text-black bg-white">
            {selectedLoan.payments.map(payment => (
              <option key={payment} value={payment}>{payment} months</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default GetLoan;