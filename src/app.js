/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excusegenerator();
  console.log(excusegenerator);
};

const excusegenerator = () => {
  let who = ["My neighbor", "My sister", "My boyfriend", "My dog"];
  let action = ["trashed", "lost", "stole", "ate"];
  let what = ["my backyard", "my keys", "my food", "my shoes"];
  let when = ["last night", "just now", "this morning", "yesterday"];

  let whorandom = Math.floor(Math.random() * who.length);
  let actionrandom = Math.floor(Math.random() * action.length);
  let whatrandom = Math.floor(Math.random() * what.length);
  let whenrandom = Math.floor(Math.random() * when.length);

  return (
    who[whorandom] +
    " " +
    action[actionrandom] +
    " " +
    what[whatrandom] +
    " " +
    when[whenrandom] +
    " "
  );
};
