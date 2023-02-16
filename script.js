var questionNumber = 0;
const answer = document.getElementById("answerForm")
const response = document.getElementById("response");

console.log(answerForm);

function calculateDaysAway(date) {
    const howManyDaysAwayIsTheDate = new Date() - date;
return howManyDaysAwayIsTheDate;
}

function calculateNextBirthday() {
    // using JS to create a date object (Get year)
    const birthdayYear = new Date().getFullYear();
    // get value of selected month using index
    const selectedBirthdayMonthElement = document.getElementById("months")
    const birthdayMonth = selectedBirthdayMonthElement.selectedIndex +1;


    // get value of birthday day
    const birthdayDay = document.getElementById("birthdayDayAnswer").value;

    // new instance of Date based on user input
    const birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-"  + birthdayDay)
    response.innerText = calculateDaysAway(birthdayDate);

    // calculateDaysAway(birthdayDate);
}


function runChatbot() {
    event.preventDefault();
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
