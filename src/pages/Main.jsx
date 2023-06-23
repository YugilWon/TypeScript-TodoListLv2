import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

function Main() {
  return (
    <>
      <Layout>
        <TopBar />
        <Input />
        <TodoList />
      </Layout>
    </>
  );
}
export default Main;
