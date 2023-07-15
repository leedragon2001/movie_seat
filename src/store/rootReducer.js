import { combineReducers } from "redux";
import seatReducer from "./seatReducer";

const rootReducer = combineReducers({
  //Child reducer
  seatReducer,
});
export default rootReducer;
