console.log("Hello World!");
//document.querySelector se tra ve button vi .btn-open la button
const btn = document.querySelector(".btn-open"); // trong ngoac la selector
const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  //Neu List cac class cua form chua hidden
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close"; //sua noi dung cua btn
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
/*
let votesMindblowing = 5;
let votesInteresting = 23;

votesInteresting++;
console.log(votesInteresting);
let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);


console.log(parseInt("24.533cc"));
*/
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `Impossible year. Year is need to be less or equal
  ${currentYear}`;
}
console.log(calcFactAge(2037));
//Arrow function
//const calcFactAge2 = new Date().getFullYear - year;

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear
    ? new Date().getFullYear - year
    : `Impossible year. Year needs to be less or
        equal ${new Date().getFullYear}`;
*/
/*
let votesMindblowing = 20;
let votesInteresting = 0;

if (votesInteresting === votesMindblowing) {
  //tao mot dialog
  alert("This fact is qually interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact");
} else {
  console.log("Mindblowing fact");
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;
const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources";
const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText); //Tao template literal(template string)
// DấU `` cho phép cho giá trị vào trong chuỗi
const str = `The current fact is ${text}. It is ${calcFactAge(2015)} years old`;
console.log(str);
*/

// Array

const fact = ["Lisbon is the capital of Portuagal", 2015, true];
console.log(fact);
console.log(fact[0]);
console.log(fact.length);
//Khai bao 1 bien tu mang
const [text, createdIn] = fact;
console.log(text);

const newFact = [...fact, "society"]; /*Lay tat ca phan tu 
ra khoi mang fact va dat chung vao mang moi->ky thuat lan truyen(spread) */

//Object

const factObj = {
  text: "Lisbon is the capital of Portuagal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
