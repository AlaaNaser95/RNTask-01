import * as actionTypes from "../actions/types";

const initialState = {
 coffeShops: null,
 loading:false
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case actionTypes.GET_COFFEESHOPS:
     return {
       ...state,
       coffeShops: [action.payload].concat(state.coffeShops),
       loading:false
     };
   case actionTypes.COFFEESHOPS_LOADING:
     return {
       ...state,
       loading: true
     };
//    case actionTypes.FETCH_MESSAGES:
//      return {
//        ...state,
//        messages: action.payload
//      };
//    case actionTypes.SEND_MESSAGE:
//      return {
//        ...state,
//        messages: state.messages.concat(action.payload)
//      };
   default:
     return state;
 }
};

export default reducer;
