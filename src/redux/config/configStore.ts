//중앙 데이터 관리소(store)를 설정하는 부분
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
