// import what we need for home
import { Container,Link } from "@chakra-ui/react";
//import { ExternalLinkIcon } from '@chakra-ui/icons'
import Auth from "../components/Auth";
import AddTodo from "../components/AddTodo";

export default function AddToDo() {
  return (
    <Container maxW="7xl">
      <Auth />
      
      <AddTodo />
    </Container>
  )
};
