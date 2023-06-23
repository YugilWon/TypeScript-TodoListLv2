import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { doneTodo, deleteTodo, cancelTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const WorkingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TodoBox = styled.div`
  position: relative;
  width: 350px;
  margin-right: 10px;
  height: 200px;
  border: 1px solid green;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const DoneButton = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const DetailButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
`;

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
      <WorkingContainer>
        {WorkingTodo.map((item) => (
          <TodoBox key={item.id}>
            <h2>{item.title}</h2>
            {item.content}
            <DetailButton to={`/Detail/${item.id}`}>자세히</DetailButton>
            <div className="Button">
              <DeleteButton onClick={() => clickRemoveButtonHandler(item.id)}>
                삭제하기
              </DeleteButton>
              {item.isDone ? (
                <DoneButton onClick={() => clickCancelButtonHandler(item.id)}>
                  취소
                </DoneButton>
              ) : (
                <DoneButton onClick={() => clickDoneButtonHandler(item.id)}>
                  완료
                </DoneButton>
              )}
            </div>
          </TodoBox>
        ))}
      </WorkingContainer>

      <h2>Done..!🎉</h2>
      <DoneContainer>
        {DoneTodo.map((item) => (
          <TodoBox key={item.id}>
            <h2>{item.title}</h2>
            {item.content}
            <DetailButton to={`/Detail/${item.id}`}>자세히</DetailButton>
            <div className="Button">
              <DeleteButton onClick={() => clickRemoveButtonHandler(item.id)}>
                삭제하기
              </DeleteButton>
              {item.isDone ? (
                <DoneButton onClick={() => clickCancelButtonHandler(item.id)}>
                  취소
                </DoneButton>
              ) : (
                <DoneButton onClick={() => clickDoneButtonHandler(item.id)}>
                  완료
                </DoneButton>
              )}
            </div>
          </TodoBox>
        ))}
      </DoneContainer>
    </>
  );
};

export default TodoList;
