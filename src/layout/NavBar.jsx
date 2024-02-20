import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='bg-indigo-300 w-2/12 text-center'>
      <img className="m-auto   w-screen  h-auto" src="/Logo.png" alt="Logo" /> 
      <div>  
        <NavLink className= " hover:bg-slate-400 text-blue-700 font-semibold text-base hover:text-white hover:border-transparent w-screen" to="/">
          <img className="mx-auto my-2 w-11" src="/Home.png" alt="Accounts icon"/>
          Home
        </NavLink>
        <NavLink className=" hover:bg-slate-400 text-blue-700 font-semibold text-base hover:text-white hover:border-transparent w-screen" to="/account">
          <img className="mx-auto my-3 w-6" src="/Account.png" alt="Accounts icon"/>
          Account
        </NavLink>
        <NavLink className=" hover:bg-slate-400 text-blue-700 font-semibold text-base hover:text-white hover:border-transparent w-screen" to="/cards">
          <img className="mx-auto my-3 w-6" src="/Shopicon.png" alt="Accounts icon"/>
          Cards
        </NavLink>
        <NavLink className=" hover:bg-slate-400 text-blue-700 font-semibold text-base hover:text-white hover:border-transparent w-screen" to="/loans">
          <img className="mx-auto my-3 w-6" src="/Loan.png" alt="Accounts icon"/>
          Loans
        </NavLink>
        <NavLink className=" hover:bg-slate-400 text-blue-700 font-semibold text-base hover:text-white hover:border-transparent w-screen" to="/transaction">
          <img className="mx-auto my-3 w-6" src="/Vector.png" alt="Accounts icon"/>
          Transaction
        </NavLink>
      </div>
    </div>
    
  );
}

export default NavBar;