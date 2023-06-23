import styled from "styled-components";
import { Link } from "react-router-dom";

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

const TodoBox = styled.div`
  position: relative;
  width: 350px;
  margin-right: 10px;
  height: 200px;
  border: 1px solid green;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const DoneButton = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const DetailButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const InputForm = styled.form`
  background-color: gray;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputTitle = styled.input`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-top: 15px;
  margin-left: 5px;
`;

const InputContent = styled.input`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const AddBtn = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 13px;
  margin-left: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

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

const Styled = {
  WorkingContainer,
  DoneContainer,
  TodoBox,
  DeleteButton,
  DoneButton,
  DetailButton,
  InputForm,
  InputTitle,
  InputGroup,
  Label,
  InputContent,
  AddBtn,
  CardContainer,
  Title,
  Content,
  Button,
};

export default Styled;
