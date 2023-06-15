import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const id = Math.random();
  //값을 변경하고 재렌더링하기위한 State 선언
  const [Todo, setTodo] = useState([]);
  const [DoneTodo, setDoneTodo] = useState([]);
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
      id: id,
      Title,
      Content,
    };
    setTodo([...Todo, newTodo]);
    setTitle("");
    setContent("");
  };
  //삭제버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickRemoveButtonHandler = (id) => {
    const updatedTodo = Todo.filter((Todo) => Todo.id !== id);
    const updatedDoneTodo = DoneTodo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
    setDoneTodo(updatedDoneTodo);
  };

  //완료버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickDoneButtonHandler = (id) => {
    const DoneItem = Todo.find((item) => item.id === id);
    setDoneTodo([...DoneTodo, DoneItem]);
    setTodo(Todo.filter((item) => item.id !== id));
  };

  //취소 버튼을 클릭했을 시 작동하는 핸들러
  const clickCancelButtonHandler = (id) => {
    const canceledItem = DoneTodo.find((item) => item.id === id);
    const updatedDoneTodo = DoneTodo.filter((item) => item.id !== id);
    setDoneTodo(updatedDoneTodo);
    setTodo([...Todo, canceledItem]);
  };

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
        {Todo.map((item) => (
          <TodoList
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickDoneButtonHandler={clickDoneButtonHandler}
            isDone={false}
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
            isDone={true}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
