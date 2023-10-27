import React from "react";
import { Box, Input, Button, Textarea, Stack, Select, useToast } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addContact } from "../api/contacts";
const AddContact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
   const [Relationship, setRelationship] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const { isLoggedIn, user } = useAuth() || {};
  const handleContactCreate = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a contact",
        status: "error",
        duration: 9000,
        isClosable: true
      });
      return;
    }
    setIsLoading(true);
    const contact = {
      name,
      email,
      phone,
      Relationship,
      userId: user.uid
    };
    await addContact(contact);
    setIsLoading(false);
    setName("");
    setEmail("");
    setPhone("");
    setRelationship("");
    toast({
      title: "Contact created",
      status: "success"
    });
  };
  return (
    <Box w="40%" margin={"0 auto"} display="block" mt={5}>
      <Stack direction="column">
        <Textarea
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Textarea
          placeholder="Relationship"
          value={Relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
        <Button
          onClick={() => handleContactCreate()}
          disabled={name.length < 1 || email.length < 1 || phone.length < 1 || Relationship.length < 1 || isLoading}
          colorScheme="teal"
          variant="solid"
        >
          Add Contact
        </Button>
      </Stack>
    </Box>
  );
};
export default AddContact;