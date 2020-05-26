import React from 'react';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Components
import CakeContainer from './components/CakeContainer';
import UseHooksCakeContainer from './components/UseHooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <UseHooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
