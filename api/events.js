import { db } from "../firebase";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore";
const addEvent = async ({ userId, title, description, location, datetime }) => {
    try {
        await addDoc(collection(db, "events"), {
            user: userId,
            title: title,
            description: description,
            location: location,
            datetime: datetime,
            createdAt: new Date().getTime()
        });
    } catch (err) {
        console.log(err);
    }
};
const toggleEventStatus = async ({ docId, status }) => {
    try {
        const eventRef = doc(db, "events", docId);
        await updateDoc(eventRef, { status: status });
    } catch (err) {
        console.log(err);
    }
};
const deleteEvent = async (docId) => {
    try {
        const eventRef = doc(db, "events", docId);
        await deleteDoc(eventRef);
    } catch (err) {
        console.log(err);
    }
};
export { addEvent, toggleEventStatus, deleteEvent };