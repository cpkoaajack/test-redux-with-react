import React from 'react';
import { connect } from 'react-redux';

import { buyCake } from '../redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cake(s) {props.numOfCake}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
