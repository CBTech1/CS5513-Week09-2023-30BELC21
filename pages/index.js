// import what we need for home
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <Container maxW="7xl">
      <Auth />
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Todos</Tab>
          <Tab>Events</Tab>
          <Tab>Contacts</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
             <p>TodoList!</p>
             <TodoList />
          </TabPanel>
          <TabPanel>
            <p>EventList!</p>
          </TabPanel>
          <TabPanel>
            <p>ContactList!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
};
