// this js file in our /api directory has code to interact with firestore db
import { db } from "../firebase";
// now we can import a variety of functions from the firebase sdk
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore";

// create a function as an arrow function
// const FUNCTIONAME = async (ARGUMENTS) => { CODE };
const addTodo = async ( { userId, title, description, status } ) => {
    try {
        await addDoc(
            collection(db, "todo"),
            {
                user: userId,
                title: title,
                description: description,
                status: status,
                createdAt: new Date().getTime()
            }
        );
    } catch (err) {
        console.log(err);
    }
};

const toggleTodoStatus = async ( { docId, status } ) => {
    try {
        // grab a reference to an existing firestore document by id
        const todoRef = doc( db, "todo", docId );
        // update that doc!
        await updateDoc( 
            todoRef, 
            {
                status: status
            }
        )
    } catch (err) {
        console.log(err);
    }
};

const deleteTodo = async ( docId ) => {
    try {
        // grab a reference to an existing firestore document by id
        const todoRef = doc( db, "todo", docId );
        await deleteDoc( todoRef );
    } catch (err) {
        console.log(err);
    }
};

export { addTodo, toggleTodoStatus, deleteTodo };