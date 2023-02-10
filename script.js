var questionNumber = 0;
const answer = document.getElementById("answerForm")

console.log(answerForm);

function calculateNextBirthday(month, day) {
    // using JS to create a date object (Get year)
const birthdayYear = new Date().getFullYear();
console.log(birthdayYear)
// get value of selected month using index
const selectedBirthdayMonthElement = document.getElementById("months")
const birthdayMonth = selectedBirthdayMonthElement.selectedIndex +1;

console.log(birthdayMonth)

// get value of birthday day
const birthdayDay = document.getElementById("birthdayDayAnswer").value;
console.log(birthdayDay)

// new instance of Date based on user input
const birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-"  + birthdayDay)
console.log(birthdayDate)
}

function runChatbot() {
    event.preventDefault();
const response = document.getElementById("response");
const answer = document.getElementById("answer").value
const question = document.getElementById("question")

if (questionNumber === 0) {
    response.innerText= "Your name is " + answer + ".";
    question.innerText = "When is your birthday?";

    questionNumber++;

    document.getElementById("birthdayForm").style.visibility = "visible";
    document.getElementById("answerForm").style.visibility = "hidden";
} 
else {

    calculateNextBirthday()
console.log(questionNumber)
response.innerText= "You entered a birthday!! ";
question.innerText = "What is your favorite Holiday?";

// questionNumber++;
}

}
answerForm.addEventListener("submit", function(event) {
    
    // prevent default action, meaning stop submission default behavior

runChatbot();


})

const birthdayForm = document.getElementById("birthdayForm")

birthdayForm.addEventListener("submit", function(event) {
    runChatbot();
})
