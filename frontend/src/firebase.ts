import firebaseApp from "firebase";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "foobarfoobar",
  authDomain: "exercise-foobar.firebaseapp.com",
  projectId: "exercise-foobar",
  storageBucket: "exercise-foobar.appspot.com",
  messagingSenderId: "1337421337",
  appId: "1:1337421337:web:b659f789ea27c8",
};

firebaseApp.initializeApp(firebaseConfig);

export const database = firebaseApp.database();

database.useEmulator("localhost", 9000);
