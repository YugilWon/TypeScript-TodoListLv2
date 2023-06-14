import React, { useState } from "react";
import "./App.css";
import DoneList from "./components/DoneList";
import NotDoneList from "./components/NotDoneList";

function App() {
  //setTodo 선언 초기값으로 완성본과 같이 넣어둠
  const id = Math.random();
  const [Todo, setTodo] = useState([
    {
      id: id,
      Title: "리액트 공부하기",
      Content: "리액트 기초를 공부해봅시다.",
    },
  ]);
  //값을 변경하고 재렌더링하기위한 State 선언
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
    const newTodo = {
      id: id,
      Title,
      Content,
    };
    //입력된 내용을 Todo 객체 배열을 불러와서 풀어준 후 newTodo를 추가해서 다시 디스플레이
    setTodo([...Todo, newTodo]);
    //아래 두개는 입력 폼 비워주는 코드
    setTitle("");
    setContent("");
  };
  console.log(Todo);
  //삭제버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickRemoveButtonHandler = (id) => {
    const updatedTodo = Todo.filter((Todo) => Todo.id !== id);
    const updatedDoneTodo = DoneTodo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
    setDoneTodo(updatedDoneTodo);
  };

  //완료버튼을 클릭했을 시 작동하는 이벤트 핸들러
  const clickDoneButtonHandler = (id) => {
    /*이곳에서 깊은복사 일어남 선택된 id값을 가진 객체배열을 DoneItem에 할당 후
    setDoneTodo를 통해서는 선택된 객체배열을 포함해 DoneTodo를 생성 
    그아래인 setTodo는 선택된 id값을 제외한 나머지 객체배열들로만 생성됨*/
    const DoneItem = Todo.find((item) => item.id === id);
    setDoneTodo([...DoneTodo, DoneItem]);
    setTodo(Todo.filter((item) => item.id !== id));
  };

  /*취소 버튼을 클릭했을 시 작동하는 핸들러
  선택된 id값을 가진 DoneTodo안에 존재하던 객체배열을 canceledItem에 할당
  그 후 updateedDoneTodo에서 해당 선택된 객체배열을 제외한 새로운 배열을 만듬
  그 새로운 배열들로 DoneTodo에 재렌더링
  setTodo에는 Todo 배열을 얕은참조로 복사하고 canceledItem 객체배열을 추가해서 새로운 Todo 배열을 만듬 */
  const clickCancelButtonHandler = (id) => {
    const canceledItem = DoneTodo.find((item) => item.id === id);
    const updatedDoneTodo = DoneTodo.filter((item) => item.id !== id);
    setDoneTodo(updatedDoneTodo);
    /*여기 그냥 setTodo([...Todo, ...canceledItem]); 이렇게하면 문법에 안맞는다고 오류나요
    {...canceledItem}이런식으로 객체를 얕은 복사하여야 오류가 안납니다*/
    setTodo([...Todo, { ...canceledItem }]);
  };

  return (
    <div className="Layout">
      <div className="TopBar">
        <div className="MyList">
          <h2>Personal Todo List</h2>
        </div>
        <div className="Logo">
          <h2>리에잇트!</h2>
        </div>
      </div>
      <form className="Input">
        <div className="group">
          <label className="title-label">제목</label>
          <input
            type="text"
            value={Title}
            className="input-title"
            onChange={TitleChangeHandler}
          ></input>
          <label className="content-label">내용</label>
          <input
            type="text"
            value={Content}
            className="input-content"
            onChange={ContentChangeHandler}
          ></input>
          <button className="AddBtn" onClick={clickAddButtonHandler}>
            추가하기
          </button>
        </div>
      </form>
      <h2>Working..</h2>
      <div className="Working-Container">
        {Todo.map((item) => (
          <NotDoneList
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickDoneButtonHandler={clickDoneButtonHandler}
          />
        ))}
      </div>
      <h2>Done..!</h2>
      <div className="Done-Container">
        {DoneTodo.map((item) => (
          <DoneList
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickCancelButtonHandler={clickCancelButtonHandler}
          />
        ))}
      </div>
    </div>
  );
}
// 아무거나 써봅니다
export default App;
