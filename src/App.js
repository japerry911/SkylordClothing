import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUpPage from './Pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './Firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/UserAction';

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
