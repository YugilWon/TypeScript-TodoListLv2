import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneTodo, deleteTodo, cancelTodo } from "../redux/modules/todos";
import Styled from "./styledcomponents/Styled";

const TodoList = () => {
  const dispatch = useDispatch();

  //삭제버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickRemoveButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  //완료버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickDoneButtonHandler = (id) => {
    dispatch(doneTodo(id));
  };

  //취소 버튼을 클릭했을 시 작동하는 핸들러
  const clickCancelButtonHandler = (id) => {
    dispatch(cancelTodo(id));
  };

  const todos = useSelector((state) => state.todos);

  const WorkingTodo = todos.filter((item) => !item.isDone);
  const DoneTodo = todos.filter((item) => item.isDone);

  return (
    <>
      <h2>Working..🔥</h2>
      <Styled.WorkingContainer>
        {WorkingTodo.map((item) => (
          <Styled.TodoBox key={item.id}>
            <h2>{item.title}</h2>
            {item.content}
            <Styled.DetailButton to={`/Detail/${item.id}`}>
              자세히
            </Styled.DetailButton>
            <div className="Button">
              <Styled.DeleteButton
                onClick={() => clickRemoveButtonHandler(item.id)}
              >
                삭제하기
              </Styled.DeleteButton>
              {item.isDone ? (
                <Styled.DoneButton
                  onClick={() => clickCancelButtonHandler(item.id)}
                >
                  취소
                </Styled.DoneButton>
              ) : (
                <Styled.DoneButton
                  onClick={() => clickDoneButtonHandler(item.id)}
                >
                  완료
                </Styled.DoneButton>
              )}
            </div>
          </Styled.TodoBox>
        ))}
      </Styled.WorkingContainer>

      <h2>Done..!🎉</h2>
      <Styled.DoneContainer>
        {DoneTodo.map((item) => (
          <Styled.TodoBox key={item.id}>
            <h2>{item.title}</h2>
            {item.content}
            <Styled.DetailButton to={`/Detail/${item.id}`}>
              자세히
            </Styled.DetailButton>
            <div className="Button">
              <Styled.DeleteButton
                onClick={() => clickRemoveButtonHandler(item.id)}
              >
                삭제하기
              </Styled.DeleteButton>
              {item.isDone ? (
                <Styled.DoneButton
                  onClick={() => clickCancelButtonHandler(item.id)}
                >
                  취소
                </Styled.DoneButton>
              ) : (
                <Styled.DoneButton
                  onClick={() => clickDoneButtonHandler(item.id)}
                >
                  완료
                </Styled.DoneButton>
              )}
            </div>
          </Styled.TodoBox>
        ))}
      </Styled.DoneContainer>
    </>
  );
};

export default TodoList;
