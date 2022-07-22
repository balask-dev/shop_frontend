import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  height: 250px;
  width:45vh;
  position: absolute;
  top: 0;
  left: 0;
   z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height:  550px;
  width:45vh;
  border-radius:4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 200px;
  border-radius: 2%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 450px;
  width:45vh;
  border-radius:4px;

  // z-index: 2;
`;

const Icon = styled.div`
  width: 70px;
  height: 30px;
  color:white;
  border-radius: 5%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px ;
  margin-top:590px;
  transition: all 0.s ease;
  &:hover {
    background-color:maroon;
    transform: scale(1.2);
  }
`;

function Product({ item }) {
  return (
    <Container>
       <Circle />
      <Image style={{display:"flex",position:"relative"}}src={item.img} />
      <div  style={{color:"maroon",fontSize:"20px",fontFamily: "Montserrat Alternates, sans-serif",marginLeft:"35px",marginTop:"480px",position:"absolute"}} >{item.title}</div>  
       <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link style={{color:"white"}} to={`product/${item._id}`}>
            <ViewInArRoundedIcon/>
           </Link>
        </Icon>
         <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>

    </Container>
  );
};

export default Product;
