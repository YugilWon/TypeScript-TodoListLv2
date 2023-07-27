import uuid from "react-uuid";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const ADD_TODO = "ADD_TODO" as const;
const DELETE_TODO = "DELETE_TODO" as const;
const DONE_TODO = "DONE_TODO" as const;
const CANCEL_TODO = "CANCEL_TODO" as const;

export const addTodo = (payload: Todo) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload: string) => ({
  type: DELETE_TODO,
  payload,
});

export const doneTodo = (payload: string) => ({
  type: DONE_TODO,
  payload,
});

export const cancelTodo = (payload: string) => ({
  type: CANCEL_TODO,
  payload,
});

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof doneTodo>
  | ReturnType<typeof cancelTodo>;

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
const todos = (state = initialState, action: TodoAction) => {
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
