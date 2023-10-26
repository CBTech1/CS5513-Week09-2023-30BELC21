import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
const AuthEvents = () => {
    const { isLoggedIn, user } = useAuth() || {};
    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("authentication error " + errorCode + errorMessage);
        }
    };
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box textAlign="right">
                {isLoggedIn ? (
                    <>
                        <Text color="green.500">{user.email}</Text>
                        <Button
                            colorScheme="red"
                            onClick={() => auth.signOut()}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button
                        colorScheme="blue"
                        onClick={() => handleAuth()}
                    >
                        Login with Google
                    </Button>
                )}
            </Box>
        </Box>
    );
};
export default AuthEvents;