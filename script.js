function showNavigation() {
    var arr = document.getElementsByClassName("nav-miniscreen");
    var nav = arr[0];
    nav.style["transform"] = "translate(0)";
}

function closeNavigation() {
    var arr = document.getElementsByClassName("nav-miniscreen");
    var nav = arr[0];
    nav.style["transform"] = "translate(-100%)";
}