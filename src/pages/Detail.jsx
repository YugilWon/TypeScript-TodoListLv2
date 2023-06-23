import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Styled from "../components/styledcomponents/Styled";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  const todo = todos.find((item) => item.id === id);

  return (
    <Styled.CardContainer>
      <p>ID: {todo.id}</p>
      <Styled.Title>제목: {todo.title}</Styled.Title>
      <Styled.Content>내용: {todo.content}</Styled.Content>
      <Styled.Button onClick={() => navigate("/")}>Home으로!</Styled.Button>
    </Styled.CardContainer>
  );
}

export default Detail;
