import { initializeApp, credential } from "firebase-admin";

export const firebaseApp = initializeApp({
  credential: credential.applicationDefault(),
  databaseURL: "https://exercise-foobar-default-rtdb.firebaseio.com",
});

export const database = firebaseApp.database();

database.useEmulator("localhost", 9000);
