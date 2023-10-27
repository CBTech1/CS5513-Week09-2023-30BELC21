import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
const addContact = async ({ userId, name, email, phone, Relationship}) => {
  try {
    await addDoc(collection(db, "contacts"), {
      user: userId,
      name: name,
      email: email,
      phone: phone,
      Relationship: Relationship,
      description: description,
        status: status,
      createdAt: new Date().getTime()
    });
  } catch (err) {
    console.log(err);
  }
};
const toggleContactStatus = async ({ docId, status }) => {
  try {
    const contactRef = doc(db, "contacts", docId);
    await updateDoc(contactRef, { status: status });
  } catch (err) {
    console.log(err);
  }
};
const deleteContact = async (docId) => {
  try {
    const contactRef = doc(db, "contacts", docId);
    await deleteDoc(contactRef);
  } catch (err) {
    console.log(err);
  }
};
export { addContact, toggleContactStatus, deleteContact };