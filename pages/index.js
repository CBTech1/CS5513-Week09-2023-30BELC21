import { Container, Box, Link, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Auth from '../components/Auth';
import TodoList from '../components/TodoList';
import EventsList from '../components/EventsList';
import AddEvents from '../components/AddEvents';
import AddTodo from '../components/AddTodo';
import AddContacts from '../components/AddContacts';
import ContactList from '../components/ContactList';

export default function Home() {
  return (
    <Container maxW='7xl'>
      <Auth />
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Create Todos</Tab>
          <Tab>Create Events</Tab>
          <Tab>Create Contacts</Tab>
          <Tab>Here are all your lists</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <p>Write what you need Todo</p>
              <p>lol get it Todo</p>
              <AddTodo />
            </Box>
          </TabPanel>
         
        </TabPanels>
      </Tabs>
    </Container>
  );
};
