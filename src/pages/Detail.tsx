import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Styled from "../components/styledcomponents/Styled";
import { Todo } from "../redux/modules/todos";
import { RootState } from "../redux/config/configStore";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state: RootState) => state.todos);

  const todo = todos.find((item: Todo) => item.id === id);

  return (
    <Styled.CardContainer>
      <>
        <p>ID: {todo?.id}</p>
        <Styled.Title>제목: {todo?.title}</Styled.Title>
        <Styled.Content>내용: {todo?.content}</Styled.Content>
      </>
      <Styled.Button onClick={() => navigate("/")}>Home으로!</Styled.Button>
    </Styled.CardContainer>
  );
}

export default Detail;
