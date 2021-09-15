var $name;
var $email  =   $('<div class="email fields"><label for="email">Email:</label><div class="single"><input type="email" name="email" placeholder="Email" class="emailInput"></div></div>');
var $phone  =   $('<div class="phone fields"><label for="number">Phone N°:</label><div class="single"><input type="tel" name="number" placeholder="(512)555-0123" class="numberInput"></div></div>');
var $address=   $('<div class="address twoFields"><label for="address">Home Address:</label><div class="doubleDouble"><input type="text" name="address" placeholder="Street Address" class="addressInput"><input type="text" name="address" placeholder="Apt or Bld N°" class="aptInput"><div class="doubleDoubleII"><input type="text" name="address" placeholder="City" class="cityInput"><input type="text" name="address" placeholder="State" class="stateInput"><input type="number" name="address" placeholder="Zip Code" class="zipInput"></div></div></div>');
var $ageDrug=   $('<div class="twoButts twoFields"><div class="age field"><label for="21min">Are you at least 21 years of age?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="21min" class="yes"><input type="radio" name="21min" class="no"></div></div></div><div class="drugs field"><label for="drugz">Do you submit to a drug screening?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="drugz" class="yes"><input type="radio" name="drugz" class="no"></div></div></div></div>');
var $usEng  =   $('<div class="twoButts twoFields"><div class="workStatus field"><label for="usStat">Are you permitted to work in the U.S?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="usaWork" class="yes"><input type="radio" name="usaWork" class="no"></div></div></div><div class="english field"><label for="eng">Can you speak and read English?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="eng" class="yes"><input type="radio" name="eng" class="no"></div></div></div></div>');
var $felony =   $('<div class="felony fields"><label for="felony">Have you ever been convicted of a felony?</label><div class="oneQuestion"><div class="container"><div>Yes:</div><div>No:</div></div><div class="container"><input type="radio" name="felony" class="yes"><input type="radio" name="felony" class="no"></div></div></div>');

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
$(".answerBox").children(".twoFields").css("height", ($(".answerBox").children(".twoFields").width() / 16) *6);

function continueApp(element, step) {
    stepCount=step.dataset.step
    stepCount = parseInt(stepCount);
    console.log(step.dataset.step);
    // step.dataset.step = stepCount + 1;
    switch(stepCount) {
        case 0:
            console.log(element.find(".double").find("input"));
            if (element.find(".double").find("input")[0].value === "" || element.find(".double").find("input")[1].value === "") {
                alert("We need your full name before continuing");
            } else {
                $name = $(".name");
                info.firstName = element.find(".double").find("input")[0].value;
                info.lastName = element.find(".double").find("input")[1].value;
                createElementEmail(element, step, stepCount);
            }
        break;
        case 1:
            if(element.find(".single").find("input")[0].value === "") {
                alert("We need your email before continuing");
            } else {
                $email = $(".email");
                info.email = element.find("input")[0].value;
                createElementPhone(element, step, stepCount);
            }
        break;
        case 2:
            if(element.find(".single").find("input")[0].value === "") {
                alert("We need your digits before continuing");
            } else {
                $phone = $(".phone");
                info.phone = element.find("input")[0].value;
                createElementAdress(element, step, stepCount);
            }
        break;
        case 3:
            if (element.find("input")[0].value === "" && element.find("input")[2].value === "" && element.find("input")[3].value === "" && element.find("input")[4].value === "") {
                alert("Please correctly fill out your address");
            } else {
                $address = $(".address");
                info.addressI = element.find("input")[0].value;
                info.addressII = element.find("input")[1].value;
                info.city = element.find("input")[2].value;
                info.state = element.find("input")[3].value;
                info.zip = element.find("input")[4].value;
                createElementAgeDrugs(element, step, stepCount);
            }
        break;
        case 4:
            if((!element.find("input")[0].checked && !element.find("input")[1].checked) || (!element.find("input")[2].checked && !element.find("input")[3].checked)) {
                alert("Please answer both questions");
            } else {
                $ageDrug = $(".twoButts.twoFields");
                info.age = element.find("input")[0].checked;
                info.drugs = element.find("input")[2].checked;
                createElementUSEng(element, step, stepCount)
            }
        break;
        case 5:
            if((!element.find("input")[0].checked && !element.find("input")[1].checked) || (!element.find("input")[2].checked && !element.find("input")[3].checked)) {
                alert("Please answer both questions");
            } else {
                $usEng = $(".twoButts.twoFields");
                info.workStatus = element.find("input")[0].checked;
                info.english = element.find("input")[2].checked;
                createElementFelony(element, step, stepCount)
            }
        break;
    }

}

function lipFiller(element, step, stepCount, botox) {
    element.empty()
    element.append(botox);
    stepCount++;
    step.dataset.step = stepCount;
}

function createElementEmail(element, step, stepCount) {
    lipFiller(element, step, stepCount, $email);
}
function createElementPhone(element, step, stepCount) {
    lipFiller(element, step, stepCount, $phone);
}
function createElementAdress(element, step, stepCount) {
    lipFiller(element, step, stepCount, $address);
}
function createElementAgeDrugs(element, step, stepCount) {
    lipFiller(element, step, stepCount, $ageDrug);
}
function createElementUSEng(element, step, stepCount) {
    lipFiller(element, step, stepCount, $usEng);
}
function createElementFelony(element, step, stepCount) {
    lipFiller(element, step, stepCount, $felony);
}