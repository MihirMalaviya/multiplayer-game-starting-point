const DEPLOY = 0;

let socket;

if (DEPLOY) {
  socket = io.connect("");
} else {
  socket = io.connect("http://localhost:3000");
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.focus();
