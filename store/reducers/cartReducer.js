import * as actionTypes from "../actions/types";

const initialState = {
 list: [],
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
//    case actionTypes.FETCH_CHANNELS:
//      return {
//        ...state,
//        channels: action.payload
//      };
//    case actionTypes.CREATE_CHANNEL:
//      return {
//        ...state,
//        channels: [action.payload].concat(state.channels)
//      };
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
