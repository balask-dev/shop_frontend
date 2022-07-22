import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.50),
      rgba(255, 255, 255, 0.50)
    ),
    url("https://img.freepik.com/free-photo/beautiful-stylish-groom-s-cufflinks-shirt_8353-645.jpg?t=st=1657690727~exp=1657691327~hmac=d5bf400b9b4366c2ad7b036cbf70e531a24c81c895bf8a6783edd95f467b7b8a&w=1380")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: transparent;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 70%;
  margin: 5px 0;
  border: none;
  padding: 10px;
  border-radius:2px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: maroon;
  color: white;
  font-weight:800;
  cursor: pointer;
  border-radius:5px;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

function Login (){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  function handleClick  (val) {
    val.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Enter Your Username"
            onChange={(val) => setUsername(val.target.value)}
          />
          <Input
            placeholder="Enter Your Password"
            type="password"
            onChange={(val) => setPassword(val.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Invalid Credentials</Error>}
           <Link style={{color:"black"}}>Create Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
