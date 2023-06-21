import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #e91e63;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  const todo = todos.find((item) => item.id === id);

  return (
    <CardContainer>
      <p>ID: {todo.id}</p>
      <Content>제목: {todo.title}</Content>
      <Content>내용: {todo.content}</Content>
      <Button onClick={() => navigate("/")}>Home으로!</Button>
    </CardContainer>
  );
}

export default Detail;
