import { ADD_TO_CART } from "../Constants";
const INITIAL_STATE = {
  cardData: [],
};
export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log('Reducer',action)
      return [
        ...state,
        {cardData: action.data},
      ];
      break;
    default:
      return state;
  }
}
