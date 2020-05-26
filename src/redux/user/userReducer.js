import {
  FETCH_USER_API,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userType';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_API:
      return { ...state, loading: true, data: [], error: '' };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: '' };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
