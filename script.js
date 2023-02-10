var questionNumber = 0;
const answer = document.getElementById("answerForm")

console.log(answerForm);

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
