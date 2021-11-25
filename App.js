import React from 'react';

import './App.css';
import Navbar from './Navbar';
import {  BrowserRouter,Route,Switch} from 'react-router-dom'; 
import Home from './Home';
import Products from './Products';
import Reports from './Reports';
import Messages from './Messages';
import Supports from './Supports';
import Team from './Team';


const App=()=>{
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products}/>
          <Route path='/reports' exact component={Reports}/>
          <Route path='/messages' exact component={Messages}/>
          <Route path='/supports' exact component={Supports}/>
          <Route path='./team' exact component={Team}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;
