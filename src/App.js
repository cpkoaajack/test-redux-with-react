import React from 'react';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Components
import CakeContainer from './components/CakeContainer';
import UseHooksCakeContainer from './components/UseHooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <UseHooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
