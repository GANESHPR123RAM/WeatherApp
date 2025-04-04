import React,{ useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
import HomeIndex from "./Components/HomeIndex";
import Loader from "./Components/Loader/Loader";

function App() {
   // loader state
   const [isLoading, setIsLoading] = useState(true);

   // Let create async method to fetch fake data
   useEffect(() => {
     const fakeDataFetch = () => {
       setTimeout(() => {
         setIsLoading(false);
       }, 8000);
     };
 
     fakeDataFetch();
   }, []);
   return isLoading ? (
    <Loader/>
   ): (
    <>
      <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path='/Homepage' element={<HomeIndex />}>
          </Route>
          <Route path='/' element={< Navigate to='Homepage' />}>
          </Route>
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    </>
  );
}

export default App;

