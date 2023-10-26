// import what we need for home
import { Container, Box, Link, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import AuthEvents from "../components/AuthEvents";
import EventsList from "../components/EventsList";
import AddEvents from "../components/AddEvents";
import AddTodo from "../components/AddTodo";
import AuthContacts from "../components/AuthContacts"
import AddContacts from "../components/AddContacts";
import ContactList from "../components/ContactList";

export default function Home() {
  return (
    <Container maxW="7xl">
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
              <p>Write what you need Todo </p>
              <p>lol, get it, "Todo"</p>
              <AddTodo />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>Create an Event</p>
            <AddEvents />
            <EventsList />
          </TabPanel>
          <TabPanel>
            <p>ContactList!</p>
            <AddContacts />
          </TabPanel>
          <TabPanel>
            <p>Here is TodoList, EventList, ContactList</p>
             <TodoList />
            <EventsList />
            <ContactList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
};
