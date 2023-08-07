// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBeNhUCxe-ffngKjn3-aoOFg7_JcTsQpA',
  authDomain: 'image-uploader-84191.firebaseapp.com',
  projectId: 'image-uploader-84191',
  storageBucket: 'image-uploader-84191.appspot.com',
  messagingSenderId: '659073118161',
  appId: '1:659073118161:web:ec684f727c604a540e3af0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database and storage
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
