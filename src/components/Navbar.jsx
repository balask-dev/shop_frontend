import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  backgroundColor:"gray";
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
   display: flex;
  border-radius:2px;
   align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
 
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper style={{backgroundColor:"black",height:"70px"}}>
       <Link to="/">
        <img height="40px" width="80px" src="https://1000logos.net/wp-content/uploads/2020/07/Tata-Cliq-Logo-500x281.jpg"></img>
        </Link>
        <Left>
          <Language>EN</Language>
          <MenuItem style={{color:"white",fontSize:"15px",fontWeight:"500"}}>Categories</MenuItem>
          <MenuItem style={{color:"white",fontSize:"15px",fontWeight:"500"}}> Gift Cards</MenuItem>

          <SearchContainer >
            <Input placeholder="Search For Brands" />
            <Search style={{ color: "gray", fontSize: "20",marginLeft:"5px"}}  />
          </SearchContainer>
        </Left>
        <Center>
         </Center>
        <Right>
          <Link to="/register">
          <MenuItem style={{color:"white",fontSize:"20px"}}>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem style={{color:"white",fontSize:"20px"}}> SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge style={{color:"white"}} badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
