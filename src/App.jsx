import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const isDone = false;
  //값을 변경하고 재렌더링하기위한 State 선언
  const [Todo, setTodo] = useState([
    { id: 0, Title: "리액트 공부하기", Content: "열심히 공부하기", isDone },
  ]);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

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

    if (Title.trim() === "" || Content.trim() === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newTodo = {
      id: Todo.length + 1,
      Title,
      Content,
      isDone,
    };
    setTodo([...Todo, newTodo]);
    setTitle("");
    setContent("");
  };

  //삭제버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickRemoveButtonHandler = (id) => {
    const updatedTodo = Todo.filter((Todo) => Todo.id !== id);
    setTodo(updatedTodo);
  };

  //완료버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickDoneButtonHandler = (id) => {
    setTodo((beforeTodo) => {
      return beforeTodo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: true };
        }
        return item;
      });
    });
  };

  //취소 버튼을 클릭했을 시 작동하는 핸들러
  const clickCancelButtonHandler = (id) => {
    setTodo((beforeTodo) => {
      return beforeTodo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: false };
        }
        return item;
      });
    });
  };

  //Working-Container와 Done-Container에 들어갈 todo리스트 isDone 상태로 필터링
  const WorkingTodo = Todo.filter((item) => !item.isDone);
  const DoneTodo = Todo.filter((item) => item.isDone);

  return (
    <div className="Layout">
      <TopBar />
      <Input
        Title={Title}
        Content={Content}
        TitleChangeHandler={TitleChangeHandler}
        ContentChangeHandler={ContentChangeHandler}
        clickAddButtonHandler={clickAddButtonHandler}
      />

      <h2>Working..🔥</h2>
      <div className="Working-Container">
        {WorkingTodo.map((item) => (
          <TodoList
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickDoneButtonHandler={clickDoneButtonHandler}
            isDone={item.isDone}
          />
        ))}
      </div>
      <h2>Done..!🎉</h2>
      <div className="Done-Container">
        {DoneTodo.map((item) => (
          <TodoList
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickCancelButtonHandler={clickCancelButtonHandler}
            isDone={item.isDone}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
