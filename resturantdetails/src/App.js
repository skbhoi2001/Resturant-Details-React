import './App.css';
import Amazon from './Components/Amazon/Amazon';
import Styles from './Components/Amazon/Amazon.module.css';
import Resturant from './Components/ResturantDetails/Resturant';
import ResturantDetails from './Components/ResturantDetails/ResturantDetails';


// import { useState } from 'react';
// import Pagination from './Components/Pagination';

function App() {
    return(
      <div className="App">
      <Resturant/>
      {/* <Amazon date="28/10/2020" headOne="Amazon Gift" headTwo="Pay" useWhere="Desktop-Mobile" />
      <Amazon date="28/10/2020" headOne="Amazon Gift" headTwo="Pay"  useWhere="Desktop-Mobile" />
      <Amazon date="17 Sep 2020" headOne="Amazon Gift" headTwo="Payment"  useWhere="MacOS-Mobile" /> */}
    </div>
  );
}

export default App;