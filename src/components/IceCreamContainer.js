import React from 'react';
import { connect } from 'react-redux';

import { buyIceCream } from '../redux';

const IceCreamContainer = ({ numOfIceCream, buyIceCream }) => {
  return (
    <div>
      <h1>Number of ice cream(s) {numOfIceCream}</h1>
      <button onClick={buyIceCream}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
