import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AddContacts from "../components/AddContacts";
export default function EventsPage() {
    return (
        <Box>
            <Heading>Add Contact</Heading>
            <AddContacts />
        </Box>
    );
};