import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3eWDYKNe2Tj_5usjnvMVuvNjempiAweo",
  authDomain: "signin-5ad93.firebaseapp.com",
  projectId: "signin-5ad93",
  storageBucket: "signin-5ad93.appspot.com",
  messagingSenderId: "216179477321",
  appId: "1:216179477321:web:64a86824b449deba5c2898"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export default app;