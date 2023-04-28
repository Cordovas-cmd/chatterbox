var questionNumber = 0
// const answer = document.getElementById("answerForm")
const response = document.getElementById("response");
console.log(questionNumber)
// console.log(answerForm);

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


function calculateNextHoliday() {

    const holidays = document.getElementById("holidays");

    const favoriteHoliday = holidays.options[holidays.selectedIndex].value;

    let month = 1;
    let day = 1;
    switch (favoriteHoliday) {
        case "Chinese New Year":
            month = 1;
            day = 22;
            break;
        case "Christmas":
            month = 12;
            day = 25;
            break;
        case "Thanksgiving":
            month = 11;
            day = 26;
            break;
        case "Halloween":
            month = 10;
            day = 31;
            break;
        case "Hannukah":
            month = 12;
            day = 7;
            break;
        case "Easter":
            month = 4;
            day = 9;
            break;
        case "Kwanza":
            month = 12;
            day = 26;
            break;
        case "New year":
            month = 1;
            day = 1;
            break;
        case "Ramadan":
            month = 3;
            day = 26;
            break;
        case "Valentines Day":
            month = 2;
            day = 14;
            break;
        default:
            month = 1;
            day = 1;

    }

    let year = new Date().getFullYear();

    // const year = new Date().getFullYear();
    let holidayDate = new Date(year + "-" + month + "-" + day)

    // If holiday has already happened this year
    if (new Date() > holidayDate) {
        year++

        holidayDate = new Date(year + "-" + month + "-" + day);
    }

    const howManyDaysAwayIsHoliday = calculateDaysAway(holidayDate)

    response.innerText = favoriteHoliday + " is " + howManyDaysAwayIsHoliday + " days away.";
}

function runChatbot() {

    event.preventDefault();

    const answer = document.getElementById("answer").value;
    const question = document.getElementById("question");
    const answerForm = document.getElementById("answerForm");

    if (questionNumber === -1) {

        question.innerText = "What is your name?"
        response.innerText = "";

        // answerForm.style.visibility = "visible";
        answerForm.style.display = "block";
        // restartButton.style.visibility = "hidden";
        birthdayForm.style.display = "none"
        holidayForm.style.display = "none"
        restartButton.style.display = "none";
    }

    else if (questionNumber === 0) {
        console.log(questionNumber)

        response.innerText = "Your name is " + answer + ".";
        // response.innerText = "Your name is " + answer + "?\n Nice to meet you " + answer + " !";
        question.innerText = "When is your birthday?";
        // questionNumber++;
        // birthdayForm.style.visibility = "visible";
        birthdayForm.style.display= "block";
        // answerForm.style.visibility = "hidden";
        answerForm.style.display = "none";

    }
    else if (questionNumber === 1) {

        calculateNextBirthday();

        console.log(questionNumber)

        question.innerText = "What is your favorite Holiday?";
        // birthdayForm.style.visibility = "hidden";
        birthdayForm.style.display = "none";
        // holidayForm.style.visibility = "visible"
        holidayForm.style.display = "block"

    }
    else if (questionNumber === 2) {

        calculateNextHoliday();

        question.innerText = "How old are you??"
        // holidayForm.style.visibility = "hidden";
        holidayForm.style.display = "none";
        // answerForm.style.visibility = "visible";
        answerForm.style.display = "block";
    }

    else if (questionNumber === 3) {

        const yearOfBirth = new Date().getFullYear() - answer;
        response.innerText = "You were born in " + yearOfBirth + ".";

        question.innerText = "Thanks for chatting with me!!";
        // answerForm.style.visibility = "hidden";
        answerForm.style.display = "none";

        // restartButton.style.visibility = "visible";
        restartButton.style.display = "block";
    }

    questionNumber+=1;
    console.log(questionNumber)

}
const answerForm = document.getElementById("answerForm")
answerForm.addEventListener("submit", function (event) {
    runChatbot();
    document.getElementById("answer").value = "";
})

const birthdayForm = document.getElementById("birthdayForm")
birthdayForm.addEventListener("submit", function (event) {
    runChatbot();
})

const holidayForm = document.getElementById("holidayForm")
holidayForm.addEventListener("submit", function (event) {
    runChatbot();
})

const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function (event) {
    console.log("you clicked me!");

    questionNumber = -1;
    runChatbot();
})
// need to figure out why function is triggering twice on question answer
// Skipping birthday display and going straight to holiday...
// want to add a random array of question to ask with choices linked in the future
// maybe add some small features

// have an idea for a new api kinda like a word guessing game but poke based.

// weant to see if I can add voice recognition or speech to text.