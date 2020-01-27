import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUpPage from './Pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './Firebase/firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} /> 
        
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
}

export default App;
