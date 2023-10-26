// import what we need for home
import { Container,Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Auth from "../components/Auth";
import AddTodo from "../components/AddTodo";

export default function AddToDo() {
  return (
    <Container maxW="7xl">
      <Auth />
      <Link style={{ border: '2px solid white' }} href="https://cs5513-week09-2023-30belc21.srjcethanwilde.repl.co/">Home</Link>
      <AddTodo />
    </Container>
  )
};
