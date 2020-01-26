import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUpPage from './Pages/SignInAndSignUp/SignInAndSignUp';

function App() {
  return (
    <div>
      <Header /> 
      
      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />
        
        <Route
          path='/shop'
          component={ShopPage}
        />

        <Route
          path='/signin'
          component={SignInAndSignUpPage}
        />
      </Switch>
    </div>
  );
}

export default App;
