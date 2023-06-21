import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const CANCEL_TODO = "CANCEL_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const doneTodo = (payload) => ({
  type: DONE_TODO,
  payload,
});

export const cancelTodo = (payload) => ({
  type: CANCEL_TODO,
  payload,
});

//초기 상태값(state)
const initialState = [
  {
    id: uuid(),
    title: "리액트 공부하기",
    content: "열심히 공부하기",
    isDone: false,
  },
];

//리듀서 : 함수
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case DONE_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: true } : item
      );

    case CANCEL_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: false } : item
      );

    default:
      return state;
  }
};

export default todos;
