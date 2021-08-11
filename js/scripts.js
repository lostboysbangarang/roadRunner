window.onload=startFunc()




function startFunc() {
    console.log("help")
    const wheelI=document.getElementsByClassName("rollOut_wheel_1");
    wheelI[0].style.animation="roll 20000ms ease-in forwards";
}