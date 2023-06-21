import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const InputForm = styled.form`
  background-color: gray;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputTitle = styled.input`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-top: 15px;
  margin-left: 5px;
`;

const InputContent = styled.input`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const AddBtn = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 13px;
  margin-left: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  //제목을 입력하고 추가했을 때 작동하는 핸들러
  const TitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //내용을 입력하고 추가했을 때 작동하는 핸들러
  const ContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  /*추가 버튼 클릭 form태그를 사용해서 버튼 클릭 시
  새로고침이 발생해 preventDefault를 사용해서 새로고침 동작을 막아줌 */
  const clickAddButtonHandler = (event) => {
    event.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <InputForm>
      <InputGroup>
        <Label>제목</Label>
        <InputTitle
          type="text"
          value={title}
          onChange={TitleChangeHandler}
        ></InputTitle>
      </InputGroup>
      <InputGroup>
        <Label>내용</Label>
        <InputContent
          type="text"
          value={content}
          onChange={ContentChangeHandler}
        ></InputContent>
      </InputGroup>
      <AddBtn onClick={clickAddButtonHandler}>추가하기</AddBtn>
    </InputForm>
  );
};

export default Input;
