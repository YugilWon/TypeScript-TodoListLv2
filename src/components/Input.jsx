const Input = ({
  Title,
  Content,
  TitleChangeHandler,
  ContentChangeHandler,
  clickAddButtonHandler,
}) => {
  return (
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
  );
};

export default Input;
