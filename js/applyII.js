var $name;
var $email  =   $('<div class="email fields"><label for="email">Email:</label><div class="single"><input type="email" name="email" placeholder="Email" class="emailInput"></div></div>');
var $phone  =   $('<div class="phone fields"><label for="number">Phone N°:</label><div class="single"><input type="tel" name="number" placeholder="(512)555-0123" class="numberInput"></div></div>');
var $address=   $('<div class="address twoFields"><label for="address">Home Address:</label><div class="doubleDouble"><input type="text" name="address" placeholder="Street Address" class="addressInput"><input type="text" name="address" placeholder="Apt or Bld N°" class="aptInput"><div class="doubleDoubleII"><input type="text" name="address" placeholder="City" class="cityInput"><input type="text" name="address" placeholder="State" class="stateInput"><input type="number" name="address" placeholder="Zip Code" class="zipInput"></div></div></div>');
var $ageDrug=   $('<div class="twoButts twoFields"><div class="age field"><label for="21min">Are you at least 21 years of age?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="21min" class="yes"><input type="radio" name="21min" class="no"></div></div></div><div class="drugs field"><label for="drugz">Do you submit to a drug screening?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="drugz" class="yes"><input type="radio" name="drugz" class="no"></div></div></div></div>');
var $usEng  =   $('<div class="twoButts twoFields"><div class="workStatus field"><label for="usStat">Are you permitted to work in the U.S?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="usaWork" class="yes"><input type="radio" name="usaWork" class="no"></div></div></div><div class="english field"><label for="eng">Can you speak and read English?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="eng" class="yes"><input type="radio" name="eng" class="no"></div></div></div></div>');
var $felony =   $('<div class="felony fields"><label for="felony">Have you ever been convicted of a felony?</label><div class="oneQuestion"><div class="container"><div>Yes:</div><div>No:</div></div><div class="container"><input type="radio" name="felony" class="yes"><input type="radio" name="felony" class="no"></div></div></div>');
var $avail  =   $('<div class="availability daysField"><div class="toNoAvail"><label for="fullOrPart">Availability</label><select name="fullOrPart" class="fullpart"><option value="default" class="def option">Select an option</option><option value="Full-time" class="full option">Full-time</option><option value="Part-time" class="part option">Part-time</option></select></div><div class="daysOfWeek"><div class="days"><label for="mon">Monday</label><div class="daysCheck"><input type="checkbox" name="mon" value="Monday"></div></div><div class="days"><label for="tues">Tuesday</label><div class="daysCheck"><input type="checkbox" name="tues" value="Tuesday"></div></div><div class="days"><label for="wed">Wednesday</label><div class="daysCheck"><input type="checkbox" name="wed" value="Wednesday"></div></div><div class="days"><label for="thurs">Thursday</label><div class="daysCheck"><input type="checkbox" name="thurs" value="Thursday"></div></div><div class="days"><label for="fri">Friday</label><div class="daysCheck"><input type="checkbox" name="fri" value="Friday"></div></div><div class="days"><label for="sat">Saturday</label><div class="daysCheck"><input type="checkbox" name="sat" value="Saturday"></div></div><div class="days"><label for="sun">Sunday</label><div class="daysCheck"><input type="checkbox" name="sun" value="Sunday"></div></div></div><div class="start"><div class="wrapper"><label for="startDate">Desired Start Date</label><input type="date" name="startDate" class="startDate"></div></div></div>');
var $exp    =   $('<div class="experience twoFields"><label for="deliveryExp">Do you have delivery experience?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="deliveryExp" class="yes"><input type="radio" name="deliveryExp" class="no"></div></div><label for="amazon">Have you ever worked for an Amazon DSP before?</label><div class="doubleDouble"><div class="doubleDoubleII"><div>Yes:</div><div>No:</div></div><div class="doubleDoubleII"><input type="radio" name="amazon" class="yes"><input type="radio" name="amazon" class="no"></div></div></div>');
var $expI   =   $('<div class="expI twoFields"><div class="sideBySide"><div class="side"><label for="deliveryExpMonths">How many months experience do you have?</label><input type="number" name="deliveryExpMonths" class="deliveryExp"></div><div class="bySide"><label for="explainYoSelf">Please elaborate on your experience</label><input type="text" name="explainYoSelf" class="explainYoSelf"></div></div><div class="sideBySide"><div class="side"><label for="company">Name of the DSP:</label><input type="text" name="company" class="company"></div><div class="bySide"><label for="city">Where was your DSP was located:</label><input type="text" name="city" placeholder="City" class="city"><input type="text" name="state" placeholder="State" class="state"></div></div></div>');
var $expII  =   $('<div class="expI twoFields"><div class="sideBySide"><div class="side"><label for="deliveryExpMonths">How many months experience do you have?</label><input type="number" name="deliveryExpMonths" class="deliveryExp"></div><div class="bySide"><label for="explainYoSelf">Please elaborate on your experience</label><input type="text" name="explainYoSelf" class="explainYoSelf"></div></div></div>');
var $expIII =   $('<div class="expI twoFields"><div class="sideBySide"><div class="side"><label for="company">Name of the DSP:</label><input type="text" name="company" class="company"></div><div class="bySide"><label for="city">Where was your DSP was located:</label><input type="text" name="city" placeholder="City" class="city"><input type="text" name="state" placeholder="State" class="state"></div></div></div>');
var $refs   =   $('<div class="reference lilBigger"><div class="exposure"><label for="hearBoutUs">How did you hear about us?</label><input type="text" name="hearBoutUs" class="hearBoutUs"></div><div class="refrences"><label for="firstRef">Professional References:</label><div class="names"><input type="text" name="firstRef0" placeholder="Frist" class="firstRef0"><input type="text" name="lastRef0" placeholder="Last" class="lastRef0"></div><div class="number"><input type="tel" name="telRef0" placeholder="(512)555-0123" class="telRef0"></div><div class="names"><input type="text" name="firstRef0" placeholder="Frist" class="firstRef0"><input type="text" name="lastRef0" placeholder="Last" class="lastRef0"></div><div class="number"><input type="tel" name="telRef0" placeholder="(512)555-0123" class="telRef0"></div><div class="names"><input type="text" name="firstRef0" placeholder="Frist" class="firstRef0"><input type="text" name="lastRef0" placeholder="Last" class="lastRef0"></div><div class="number"><input type="tel" name="telRef0" placeholder="(512)555-0123" class="telRef0"></div></div></div>');
var $ressie =   $('<div class="resume twoFields"><span class="upload">Press the button to select your resume. This step is optional, but recommended</span><div class="buttons"><button onclick="upload()" data-step="0" class="continue">Submit Resume</button><input type="file" name="ressie" id="myRessie" class="ressie" hidden/></div></div>');

var info = {
    firstName:      null,
    lastName:       null,
    email:          null,
    phone:          null,
    addressI:       null,
    addressII:      null,
    city:           null,
    state:          null,
    zip:            null,
    age:            null,
    drugs:          null,
    workStatus:     null,
    english:        null,
    felony:         null,
    availTime:      null,
    mon:            null,
    tues:           null,
    wed:            null,
    thurs:          null,
    fri:            null,
    sat:            null,
    sun:            null,
    start:          null,
    delivExp:       null,
    amazExp:        null,
    monthExp:       null,
    elaFun:         null,
    amazDSP:        null,
    cityDSP:        null,
    stateDSP:       null,
    referal:        null,
    refFirstI:      null,
    refLastI:       null,
    refPhoneI:      null,
    refFirstII:      null,
    refLastII:       null,
    refPhoneII:      null,
    refFirstIII:      null,
    refLastIII:       null,
    refPhoneIII:      null
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
$(".answerBox").children(".daysField").css("height", ($(".answerBox").children(".daysField").width() / 16) *8);
$(".answerBox").children(".lilBigger").css("height", ($(".answerBox").children(".lilBigger").width() / 16) *9);


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
            if (element.find(".single").find("input")[0].value === "") {
                alert("We need your email before continuing");
            } else {
                $email = $(".email");
                info.email = element.find("input")[0].value;
                createElementPhone(element, step, stepCount);
            }
        break;
        case 2:
            if (element.find(".single").find("input")[0].value === "") {
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
                if (element.find("input")[1].value != "") {
                    info.addressII = element.find("input")[1].value;
                }
                info.city = element.find("input")[2].value;
                info.state = element.find("input")[3].value;
                info.zip = element.find("input")[4].value;
                createElementAgeDrugs(element, step, stepCount);
            }
        break;
        case 4:
            if ((!element.find("input")[0].checked && !element.find("input")[1].checked) || (!element.find("input")[2].checked && !element.find("input")[3].checked)) {
                alert("Please answer both questions");
            } else {
                $ageDrug = $(".twoButts.twoFields");
                info.age = element.find("input")[0].checked;
                info.drugs = element.find("input")[2].checked;
                createElementUSEng(element, step, stepCount)
            }
        break;
        case 5:
            if ((!element.find("input")[0].checked && !element.find("input")[1].checked) || (!element.find("input")[2].checked && !element.find("input")[3].checked)) {
                alert("Please answer both questions");
            } else {
                $usEng = $(".twoButts.twoFields");
                info.workStatus = element.find("input")[0].checked;
                info.english = element.find("input")[2].checked;
                createElementFelony(element, step, stepCount)
            }
        break;
        case 6:
            console.log(element);
            if (!element.find("input")[0].checked && !element.find("input")[1].checked) {
                alert("We really need to know if you've commited a felony or not.")
            } else {
                $felony = $(".felony");
                info.felony = element.find("input")[0].checked;
                createElementAvailability(element, step, stepCount);
            }
        break;
        case 7:
            if (($(".fullpart")[0].value === "default") || (!$(".daysCheck").find("input")[0].checked && !$(".daysCheck").find("input")[1].checked && !$(".daysCheck").find("input")[2].checked && !$(".daysCheck").find("input")[3].checked && !$(".daysCheck").find("input")[4].checked && !$(".daysCheck").find("input")[5].checked && !$(".daysCheck").find("input")[6].checked) || ($(".startDate")[0].value === "")) {
                if ($(".fullpart")[0].value === "default") {
                    alert("Please select either full, or part time");
                } if (!$(".daysCheck").find("input")[0].checked && !$(".daysCheck").find("input")[1].checked && !$(".daysCheck").find("input")[2].checked && !$(".daysCheck").find("input")[3].checked && !$(".daysCheck").find("input")[4].checked && !$(".daysCheck").find("input")[5].checked && !$(".daysCheck").find("input")[6].checked) {
                    alert("Please select the days of the week that you are available");
                } if ($(".startDate")[0].value === "") {
                    alert("Please tell us when you would be able to start with us");
                }
            } else {
                $avail = $(".availability");
                info.availTime = $(".fullpart")[0].value;
                info.mon = $(".daysCheck").find("input")[0].checked;
                info.tues = $(".daysCheck").find("input")[1].checked;
                info.wed = $(".daysCheck").find("input")[2].checked;
                info.thurs = $(".daysCheck").find("input")[3].checked;
                info.fri = $(".daysCheck").find("input")[4].checked;
                info.sat = $(".daysCheck").find("input")[5].checked;
                info.sun = $(".daysCheck").find("input")[6].checked;
                info.start = $(".startDate")[0].value;
                createElementExp(element, step, stepCount);
            }
        break;
        case 8:
            if ((!element.find("input")[0].checked && !element.find("input")[1].checked) || (!element.find("input")[2].checked && !element.find("input")[3].checked)) {
                alert("Please answer both questions")
            } else {
                if ((element.find("input")[0].checked) && (element.find("input")[2].checked)) {
                    info.delivExp = element.find("input")[0].checked;
                    info.amazExp = element.find("input")[2].checked;
                    createElementExpI(element, step, stepCount);
                } else if ((element.find("input")[0].checked) && (!element.find("input")[2].checked)) {
                    info.delivExp = element.find("input")[0].checked;
                    info.amazExp = element.find("input")[2].checked;
                    createElementExpII(element, step, stepCount);
                } else if ((!element.find("input")[0].checked) && (element.find("input")[2].checked)) {
                    info.delivExp = element.find("input")[0].checked;
                    info.amazExp = element.find("input")[2].checked;
                    createElementExpIII(element, step, stepCount);
                }
            }
        break;
        case 9:
            var elePhun = element.find("input");
            if (elePhun.length === 2) {
                if (elePhun[0] === "" && elePhun[1] === "") {
                    alert("Please fill in all fields");
                }
            } else if (elePhun.length === 3) {
                if (elePhun[0] === "" && elePhun[1] === "" && elePhun[2] === "") {
                    alert("Please fill in all fields");
                }
            } else if (elePhun.length === 5) {
                if (elePhun[0] === "" && elePhun[1] === "" && elePhun[2] === "" && elePhun[3] === "" && elePhun[4] === "") {
                    alert("Please fill in all fields");
                }
            } else {
                $exp = $(".expI");
                if (elePhun.length === 2) {
                    info.monthExp = elePhun[0].value;
                    info.elaFun = elePhun[1].value;
                } else if (elePhun.length === 3) {
                    info.amazDSP = elePhun[0].value;
                    info.cityDSP = elePhun[1].value;
                    info.stateDSP = elePhun[2].value;
                } else if (elePhun.length === 5) {
                    info.monthExp = elePhun[0].value;
                    info.elaFun = elePhun[1].value;
                    info.amazDSP = elePhun[2].value;
                    info.cityDSP = elePhun[3].value;
                    info.stateDSP = elePhun[4].value;
                }
            }
        break;
        case 10:
            var elePhun = element.find("input");
            if (elePhun[0].value === "" && elePhun[1].value === "" && elePhun[2].value === "" && elePhun[3].value === "" && elePhun[4].value === "" && elePhun[5].value === "" && elePhun[6].value === "" && elePhun[7].value === "" && elePhun[8].value === "" && elePhun[9].value === "") {
                alert("Please fill out all fields");
            } else {
                $refs = $(".reference");
                info.referal = elePhun[0].value;
                info.refFirstI = elePhun[1].value;
                info.refLastI = elePhun[2].value;
                info.refPhoneI = elePhun[3].value;
                info.refFirstII = elePhun[4].value;
                info.refLastII = elePhun[5].value;
                info.refPhoneII = elePhun[6].value;
                info.refFirstIII = elePhun[7].value;
                info.refLastIII = elePhun[8].value;
                info.refPhoneIII = elePhun[9].value;
                createElementResume(element, step, stepCount);
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
function createElementAvailability(element, step, stepCount) {
    lipFiller(element, step, stepCount, $avail);
}
function createElementExp(element, step, stepCount) {
    lipFiller(element, step, stepCount, $exp);
}
function createElementExpI(element, step, stepCount) {
    lipFiller(element, step, stepCount, $expI);
}
function createElementExpII(element, step, stepCount) {
    lipFiller(element, step, stepCount, $expII);
}
function createElementExpIII(element, step, stepCount) {
    lipFiller(element, step, stepCount, $expIII);
}
function createElementResume(element, step, stepCount) {
    lipFiller(element, step, stepCount, $ressie);
}


function upload() {
    document.getElementById("myRessie").click();
}