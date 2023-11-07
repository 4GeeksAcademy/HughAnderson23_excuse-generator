/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let subject = ["My dog", "The cow", "A random student", "That bird"];
  let verb = ["ate", "threw up", "flew away with", "took"];
  let object = ["my homework", "my dinner", "my money", "my keys"];
  let when = [
    "before the class",
    "after I left",
    "before I finished",
    "during my lunch time",
    "while I was sleeping"
  ];
  let question = [
    "what's up with that?",
    "isn't that wierd?",
    "don't you find that strange?",
    ""
  ];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  let questionIndex = Math.floor(Math.random() * question.length);

  return (
    subject[subjectIndex] +
    " " +
    verb[verbIndex] +
    " " +
    object[objectIndex] +
    " " +
    when[whenIndex] +
    ", " +
    question[questionIndex]
  );
};
