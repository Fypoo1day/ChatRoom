import "./pages/index";
import "./pages/chat";
import "./router";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
const API_BASE_URL = "http://localhost:3000";

const firebaseConfig = {
  apiKey: "V9ElgxUcUsDVWuCp6dFcwBYiJoc0kLfDr1vxUgIQ",
  databaseURL: "https://apx-dwf-m6-ef304-default-rtdb.firebaseio.com",
  authDomain: "apx-dwf-m6-ef304.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

// const chatroomsRef = ref(db, "/chatrooms/1234");
// onValue(chatroomsRef, (snapshot) => {
//   const data = snapshot.val();
//   document.querySelector(".root").innerHTML = JSON.stringify(data);
//   console.log(data);
// });

function conectarAlChatroom() {
  fetch(API_BASE_URL + "/chatroom", {
    method: "post",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const chatroomsRef = ref(db, "/chatrooms/" + data.id);
      onValue(chatroomsRef, (snapshot) => {
        const valor = snapshot.val();
        // document.querySelector(".id").innerHTML = data.id;
        document.querySelector(".root").innerHTML = JSON.stringify(valor);
        console.log(valor);
      });
    });
}

// (function () {
//   const button = document.querySelector(".conectar");
//   button.addEventListener("click", conectarAlChatroom);
// })();
