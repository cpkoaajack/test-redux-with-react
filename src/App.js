import React from 'react';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Components
import CakeContainer from './components/CakeContainer';
import UseHooksCakeContainer from './components/UseHooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainerWithPayload from './components/CakeContainerWithPayload';
import GenericContainer from './components/GenericContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <UseHooksCakeContainer />
        <IceCreamContainer />
        <CakeContainerWithPayload />
        <GenericContainer item={'cake'} />
        <GenericContainer item={'ice cream'} />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
