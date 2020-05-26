import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { buyCake } from '../redux';

const UseHooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cake(s) using Hooks {numOfCake}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake using Hooks</button>
    </div>
  );
};

export default UseHooksCakeContainer;
