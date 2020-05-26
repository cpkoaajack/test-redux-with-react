import React, { useState } from 'react';
import { connect } from 'react-redux';

import { buyCake } from '../redux';

const CakeContainerWithPayload = (props) => {
  const [numToBuy, setNumToBuy] = useState(1);

  return (
    <div>
      <h1>Number of cake(s) {props.numOfCake}</h1>
      <label>
        Buy {numToBuy} cake(s) using payload
        <input
          type='number'
          min='1'
          value={numToBuy}
          onChange={(e) => setNumToBuy(e.target.value)}
        />
        <button onClick={() => props.buyCake(numToBuy)}>
          Buy {numToBuy} cake(s) using payload
        </button>
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (numToBuy) => dispatch(buyCake(numToBuy)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainerWithPayload);
