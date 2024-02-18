const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High-level Text Markup Language",
      "Hyper Transfer Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    correctAnswer: "a",
  },
  {
    question: "Which HTML tag is used to define an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    correctAnswer: "b",
  },
  {
    question:
      "Which HTML element is used for creating links to other web pages?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "b",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Creative Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctAnswer: "c",
  },
  {
    question:
      "Which CSS selector is used to select elements with a specific class name?",
    options: ["#", ".", ":", "/"],
    correctAnswer: "b",
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["var myVar;", "v myVar;", "variable myVar;", "int myVar;"],
    correctAnswer: "a",
  },
  {
    question: "What does the 'if' statement do in JavaScript?",
    options: [
      "It defines a loop.",
      "It executes a block of code only if a condition is true.",
      "It declares a variable.",
      "It repeats a block of code a specific number of times.",
    ],
    correctAnswer: "b",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<url>", "<link>", "<a>", "<href>"],
    correctAnswer: "c",
  },
  {
    question: "What is the purpose of the HTML <meta> tag?",
    options: [
      "To define a paragraph of text.",
      "To create a clickable link.",
      "To provide metadata about the document.",
      "To define a list of items.",
    ],
    correctAnswer: "c",
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements on a web page?",
    options: ["padding", "margin", "border", "space"],
    correctAnswer: "a",
  },
  {
    question: "What is the CSS box model?",
    options: [
      "A model for creating boxes in web design.",
      "A model for determining the size and spacing of elements.",
      "A model for creating 3D effects in web design.",
      "A model for creating animations in web design.",
    ],
    correctAnswer: "b",
  },
  {
    question: "What is the purpose of the JavaScript 'querySelector' method?",
    options: [
      "To select and manipulate HTML elements.",
      "To define a new variable.",
      "To create a loop.",
      "To add comments to the code.",
    ],
    correctAnswer: "a",
  },
  {
    question: "What does the JavaScript 'parseInt()' function do?",
    options: [
      "It parses a string and returns an integer.",
      "It converts a number to a string.",
      "It generates a random integer.",
      "It checks if a variable is an integer.",
    ],
    correctAnswer: "a",
  },
  {
    question: "What does the JavaScript 'addEventListener' method do?",
    options: [
      "It defines a new function.",
      "It sets the background color of an element.",
      "It attaches an event handler to an element.",
      "It creates a new variable.",
    ],
    correctAnswer: "c",
  },
];
let index = 0;
let total = questions.length;
let correct = 0;
let nextIndex = 0;
const previousAns = new Array(total);
for (var i = 0; i < total; i++) {
  previousAns[i] = "z";
}
const loadQuestion = () => {
  if (previousAns[index] == "z") {
    reset();
  }
  document.getElementById("totalQues").innerText = total;
  if (index === total) {
    return endQuiz();
  }
  const data = questions[index];
  ques.innerText = `${index + 1}.  ${data.question}`;
  options[0].innerText = data.options[0];
  options[1].innerText = data.options[1];
  options[2].innerText = data.options[2];
  options[3].innerText = data.options[3];
};
const options = document.getElementsByTagName("label");
const ques = document.getElementById("ques");
const check = document.getElementsByTagName("input");

const submitQuiz = () => {
  const inputArray = Array.from(check); //we need to convert collection to an array
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].checked) {
      previousAns[index] = inputArray[i].value;
    }
  }
  for (var i = 0; i < total; i++) {
    const data = questions[i];
    if (previousAns[i] === data.correctAnswer) {
      correct++;
    }
  }
  document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank You for playing the quiz</h3>
    <h3>You got ${correct}/${total}</h3> 
    </div>`;
};
const reset = () => {
  const inputArray = Array.from(check); //we need to convert collection to an array
  inputArray.forEach((element) => {
    if (element.checked) {
      element.checked = false;
    }
  });
};
const next = () => {
  const inputArray = Array.from(check); //we need to convert collection to an array
  if (previousAns[index] == "z") {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].checked === true) {
        previousAns[index] = inputArray[i].value;
      }
    }
  }
  index++;
  loadQuestion();
  if (previousAns[index] != "z") {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].value === previousAns[index]) {
        inputArray[i].checked = true;
        break;
      }
    }
  }
};
const previous = () => {
  index--;
  loadQuestion();
  const inputArray = Array.from(check); //we need to convert collection to an array
  inputArray.forEach((element) => {
    if (element.value == previousAns[index]) {
      element.checked = true;
    }
  });
};
loadQuestion();

document.getElementById("Next").addEventListener("click", next);
document.getElementById("Previous").addEventListener("click", previous);