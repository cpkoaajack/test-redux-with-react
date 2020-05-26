import React from 'react';
import { connect } from 'react-redux';
//Import both action creators
import { buyCake } from '../redux';
import { buyIceCream } from '../redux';

/*
To demonstrate the second parameter of mapStateToProps & mapDispatchToProps
which is the props passed from parent component
*/
const GenericContainer = (props) => {
  return (
    <div>
      <h1>
        Generic container {props.item}: {props.numOfItem}
      </h1>
      <button onClick={props.buyItem}>Buy {props.item} using ownProps</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const numOfItem =
    ownProps.item === 'cake'
      ? state.cake.numOfCake
      : state.iceCream.numOfIceCream;

  //Equel to return { numOfItem: numOfItem };
  return { numOfItem };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.item) {
    case 'cake':
      return { buyItem: () => dispatch(buyCake()) };
    case 'ice cream':
      return { buyItem: () => dispatch(buyIceCream()) };
    default:
      return { buyItem: () => alert(`You should not get here`) };
  }
};
//If you don't want to subscribe to the change of the store in this component
//simply pass null to the first parameter of connect()
//e.g export default connect(null, mapDispatchToProps)(GenericContainer);

//MapDispatchToProps can be passed null as well if you don't want to fire any action in this component
//e.g export default connect(mapStateToProps, null)(GenericContainer);
export default connect(mapStateToProps, mapDispatchToProps)(GenericContainer);
