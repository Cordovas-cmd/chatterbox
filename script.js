const answer = document.getElementById("answerForm")

console.log(answerForm);

function runChatbot() {
const response = document.getElementById("response");

const answer = document.getElementById("answer").value

response.innerText= "Your name is " + answer + ".";

const question = document.getElementById("question")

question.innerText = "When is your birthday?"
}
answerForm.addEventListener("submit", function(event) {
    
    // prevent default action, meaning stop submission default behavior
    event.preventDefault();

runChatbot();


})