import {
  FETCH_USER_API,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userType';

const fetchUserAPI = () => {
  return {
    type: FETCH_USER_API,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (errorMsg) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: errorMsg,
  };
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserAPI());

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        const users = response;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

//Version 2
// const fetchUser = (dispatch) => {
//   return () => {
//     dispatch(fetchUserAPI());

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((response) => {
//         const users = response;
//         dispatch(fetchUserSuccess(users));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUserFailure(errorMsg));
//       });
//   };
// };

export { fetchUserAPI, fetchUserSuccess, fetchUserFailure, fetchUser };
