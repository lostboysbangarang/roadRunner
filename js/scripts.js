window.onload=startFunc()




function startFunc() {
    console.log("help")
    const wheelI=document.getElementsByClassName("rollOut_wheel_1");
    // wheelI[0].style.animation="roll 20000ms 1500ms ease-in forwards";
    $(".wheel").css("animation", "roll 20000ms 2000ms ease-in forwards");
    $(".rollOut").css("animation", "drive 4000ms 2000ms ease-in forwards");
    $(".rollOut").on("animationend webkitAnimationEnd oAnimationEnd", function () {
        $(".rollOut").remove();
    })
    // $(".buttons > input").each(function() {
    //     console.log(this);
    //     this.style.width = "fit-content";
    //     this.style.padding = "0vw 1vw"
    //     this.innerText = this.classList.vlaue
    // });
    console.log($(".buttons")[0].children);
}