import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  token: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initialState,
        isLoading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserAuthenticated: true,
        token: action.payload.id,
      };
    case actionTypes.LOGIN_FAILED:
      return { ...initialState, error: action.error };
    case actionTypes.SIGN_OUT: {
      return { ...initialState };
    }
    default:
      break;
  }
  return state;
};
export default loginReducer;
