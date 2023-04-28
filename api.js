import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc,query,where} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyB17m3V3RH8ZPMaI5HOd75BUwRlPJ-Vvto",
    authDomain: "vango-11fd9.firebaseapp.com",
    projectId: "vango-11fd9",
    storageBucket: "vango-11fd9.appspot.com",
    messagingSenderId: "567751938935",
    appId: "1:567751938935:web:8ef0560eecffa49c390772"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")



export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}