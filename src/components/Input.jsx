import React, { useState } from "react";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import Styled from "./styledcomponents/Styled";

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
    <Styled.InputForm>
      <Styled.InputGroup>
        <Styled.Label>제목</Styled.Label>
        <Styled.InputTitle
          type="text"
          value={title}
          onChange={TitleChangeHandler}
        ></Styled.InputTitle>
      </Styled.InputGroup>
      <Styled.InputGroup>
        <Styled.Label>내용</Styled.Label>
        <Styled.InputContent
          type="text"
          value={content}
          onChange={ContentChangeHandler}
        ></Styled.InputContent>
      </Styled.InputGroup>
      <Styled.AddBtn onClick={clickAddButtonHandler}>추가하기</Styled.AddBtn>
    </Styled.InputForm>
  );
};

export default Input;
