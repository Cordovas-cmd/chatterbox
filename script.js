var questionNumber = 0;
const answer = document.getElementById("answerForm")
const response = document.getElementById("response");

console.log(answerForm);

function calculateDaysAway(date) {
    const differenceInMilliseconds = date - new Date();

    // 1000 milliseconds in a second, 86400 seconds in a day
    const millisecondsInASecond = 1000;

    const differenceFromMillisecondsToSeconds = differenceInMilliseconds / millisecondsInASecond;

    const differenceInSeconds = differenceFromMillisecondsToSeconds

    const secondsInAMinute = 60

    const differenceInMinutes = differenceInSeconds / secondsInAMinute

    const minutesInAnHour = 60;

    const differenceInHours = differenceInMinutes / minutesInAnHour

    const hoursInADay = 24;

    const differenceInDays = differenceInHours / hoursInADay

    const howManyDaysAwayIsTheDate = differenceInDays

    return Math.ceil(howManyDaysAwayIsTheDate);
}

function calculateNextBirthday() {
    // using JS to create a date object (Get year)
    let birthdayYear = new Date().getFullYear();

    // get value of selected month using index
    const selectedBirthdayMonthElement = document.getElementById("months")

    const birthdayMonth = selectedBirthdayMonthElement.selectedIndex + 1;


    // get value of birthday day
    const birthdayDay = document.getElementById("birthdayDayAnswer").value;

    // new instance of Date based on user input
    let birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay)


    // handle a birthday that already happened
    if (new Date() > birthdayDate) {
        birthdayYear = birthdayYear + 1;
        birthdayDate = new Date(birthdayYear + "-" + birthdayMonth + "-" + birthdayDay)
    }

    response.innerText = "Your birthday is  " + calculateDaysAway(birthdayDate) + " days away!";
}


function runChatbot() {
    event.preventDefault();
    const answer = document.getElementById("answer").value
    const question = document.getElementById("question")

    if (questionNumber === 0) {
        response.innerText = "Your name is " + answer + ".";
        question.innerText = "When is your birthday?";
        questionNumber++;
        document.getElementById("birthdayForm").style.visibility = "visible";
        document.getElementById("answerForm").style.visibility = "hidden";
    }
    else if (questionNumber === 1) {
        calculateNextBirthday();
        console.log(questionNumber)
        question.innerText = "What is your favorite Holiday?";
        
    }
    else if (questionNumber === 2) {
        response.innerText = "Your Holiday is X days away."
    } 
questionNumber++;
}

answerForm.addEventListener("submit", function (event) {
    runChatbot();
})

const birthdayForm = document.getElementById("birthdayForm")
birthdayForm.addEventListener("submit", function (event) {
    runChatbot();
})

const holidayForm = document.getElementById("holidayForm")
holidayForm.addEventListener("submit", function(event) {
    runChatbot();
})