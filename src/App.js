import React from 'react';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//Components
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
