import * as functions from "firebase-functions";
import "./developPrices";

// Don't touch this
export const alive = functions.https.onRequest((request, response) => {
  response.send("I'm alive!");
});
