// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQTrhP-cj-rDZemW3kRdmhW5epFQxK-qw',
  authDomain: 'realtor-app-0.firebaseapp.com',
  projectId: 'realtor-app-0',
  storageBucket: 'realtor-app-0.appspot.com',
  messagingSenderId: '574182904749',
  appId: '1:574182904749:web:da812dd12bbc5a36888724'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()