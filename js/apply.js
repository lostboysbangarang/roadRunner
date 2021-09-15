function backHome(element) {
    if (element.hostname === "127.0.0.1") {
        console.log(element);
        window.location.pathname = "index.html"
    } else if (element.hostname === "lostboysbangarang.github.io") {
        window.location.pathname = "/roadRunner/"
    }
}