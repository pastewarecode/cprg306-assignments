import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];

    try
    {
        const itemsCollection = collection(db, `users/${userId}/items`);
        const snapshot = await getDocs(itemsCollection);

        snapshot.forEach((doc) => {
            items.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          
          return items;
    }
    catch (error)
    {
        console.log(error);
    }
}

export async function addItems(userId, item) {

    try
    {
        const itemsSubcollectionReference = collection(db, `items/${userId}/items`);

        const docReference = await addDoc(itemsSubcollectionReference, item)

        return docReference.id;
    }
    catch(error)
    {
        console.log(error);
    }
}