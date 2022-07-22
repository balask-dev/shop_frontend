import {MailOutline,Phone,Room,} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  color:white;
  background-color:black;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

 const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;



function Footer() {
  return (
    <Container>
      <Left>
<img height="100px" width="190px" src="https://www.indiashoppers.in/storeImg/tatacliq-coupons-deals.png"></img>       
      
      </Left>
      <Center>
        <Title>Categories</Title>
        <List>
            <ListItem>Men'sFashion</ListItem>
          <ListItem>Woman's Fashion</ListItem>
          <ListItem>Luxury</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Services</ListItem>
           <ListItem>Wishlist</ListItem>
         </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> CLIQ,INDIA
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 1234 56 78910
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@CLIQ
        </ContactItem>
       </Right>
    </Container>
  );
};

export default Footer;
