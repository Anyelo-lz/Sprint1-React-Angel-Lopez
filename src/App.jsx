 
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import AccountView from "./pages/AccountView";
import CardsView from "./pages/CardsView";
import NewCards from "./pages/NewCards";
import NewLoan from "./pages/NewLoan";
import HomeV from "./pages/HomeV";
import NewTransaction from "./pages/NewTransaction";
import NewAccount from "./pages/NewAccount";

function App() {
  return (
    <> 
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomeV/>}/>
            <Route path="/accounts" element={<AccountView/>}/>
            <Route path="/cards" element={<CardsView/>}/>
            <Route path="/loan" element={<NewLoan/>}/>
            <Route path="/cards" element={<NewCards/>}/>
            <Route path="/transaction" element={<NewTransaction/>}/>
            <Route path="/cards" element={<NewAccount/>}/>
            </Routes>
        </MainLayout>
        </Router>
        </>
        );
}

*/






import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import "./App.css";
import GetCards from "./components/GetCards.jsx";
import GetAccounts from "./pages/GetAccounts.jsx";
import Error404 from "./components/Error404";
import NavBar from "./layout/NavBar.jsx";
import GetTransaction from "./components/GetTransaction";
import Footer from "./layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Form from "./components/Form.jsx";
import GetLoan from "./components/GetLoan.jsx";
import Account from "./components/Account.jsx";
 
function App() {
  return (
    <Router>
      <div className="flex">  
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cards" element={<GetCards/>} /> 
          <Route path="/account" element={<GetAccounts />} />
          <Route path="/details" element={<Account/>}/>
          <Route path="/loans" element={<GetLoan/>} />
          <Route path="/transaction" element={<GetTransaction/>}/>
          <Route path="/Form" element={<Form/>}/>
           

          <Route path="/*" element={<Error404/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
} 
 
export default App;
    