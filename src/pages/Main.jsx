import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

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

function Home() {
  const todos = useSelector((state) => state.todos);

  //Working-Container와 Done-Container에 들어갈 todo리스트 isDone 상태로 필터링
  const WorkingTodo = todos.filter((item) => !item.isDone);
  const DoneTodo = todos.filter((item) => item.isDone);

  return (
    <>
      <Layout>
        <TopBar />
        <Input />
        <h2>Working..🔥</h2>
        <WorkingContainer>
          {WorkingTodo.map((item) => (
            <TodoList item={item} isDone={item.isDone} />
          ))}
        </WorkingContainer>
        <h2>Done..!🎉</h2>
        <DoneContainer>
          {DoneTodo.map((item) => (
            <TodoList item={item} isDone={item.isDone} />
          ))}
        </DoneContainer>
      </Layout>
    </>
  );
}
export default Home;
