import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AddEvents from "../components/AddEvents";
export default function EventsPage() {
    return (
        <Box>
            <Heading>Add Events</Heading>
            <AddEvents />
        </Box>
    );
};