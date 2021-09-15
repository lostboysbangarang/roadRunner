var $name;
var $email = $('<div class="email fields"><label for="email">Email:</label><div class="single"><input type="email" name="email" placeholder="Email" class="emailInput"></div></div>');
var $phone = $('<div class="phone fields"><label for="number">Phone N°:</label><div class="single"><input type="tel" name="number" placeholder="(512)555-0123" class="numberInput"></div></div>');

var info = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    addressI: null,
    addressII: null,
    city: null,
    state: null,
    zip: null,
    age: null,
    drugs: null,
    workStatus: null,
    english: null,
    felony: null,
    availTime: null,
    mon: null,
    tues: null,
    wed: null,
    thurs: null,
    fri: null,
    sat: null,
    sun: null,
    start: null
}


function backHome(element) {
    if (element.hostname === "127.0.0.1") {
        console.log(element);
        window.location.pathname = "index.html";
    } else if (element.hostname === "lostboysbangarang.github.io") {
        window.location.pathname = "/roadRunner/";
    }
}
$(".answerBox").css("height", ($(".answerBox").width() / 16) *9);
$(".spacer").css("height", ($(".answerBox").width() / 16) *3);
$(".answerBox").children(".fields").css("height", ($(".answerBox").children(".fields").width() / 16) *3);

function continueApp(element, step) {
    stepCount=step.dataset.step
    stepCount = parseInt(stepCount);
    console.log(step.dataset.step);
    // step.dataset.step = stepCount + 1;
    switch(stepCount) {
        case 0:
            console.log(element.find(".double").find("input"));
            if (element.find(".double").find("input")[0].value === "" || element.find(".double").find("input")[1].value === "") {
                alert("We need your full name before continuing")
            } else {
                $name = $(".name");
                info.firstName = element.find(".double").find("input")[0].value;
                info.lastName = element.find(".double").find("input")[1].value;
                createElementEmail(element, step, stepCount);
            }
        break;
        case 1:
            if(element.find(".single").find("input")[0].value === "") {
                alert("We need your email before continuing")
            } else {
                $email = $(".email");
                info.email=element.find("input")[0].value;
                createElementPhone(element, step, stepCount);
            }
        break;
    }

}

function createElementEmail(element, step, stepCount) {
    element.empty()
    element.append($email);
    $(".answerBox").children(".fields").css("height", ($(".answerBox").children(".fields").width() / 16) *3);
    stepCount++;
    step.dataset.step = stepCount;
    console.log(step.dataset.step);
}
function createElementPhone(element, step, stepCount) {
    element.empty()
    element.append($phone);
    $(".answerBox").children(".fields").css("height", ($(".answerBox").children(".fields").width() / 16) *3);
    stepCount++;
    step.dataset.step = stepCount;
    console.log(step.dataset.step);
}