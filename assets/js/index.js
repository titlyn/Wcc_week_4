function myFunction () {
    document.getElementById("list").classList.toggle("show");
    console.log("click")
}

window.onclick = function (event) {
    if (!event.target.matches('.menu')) {
    var dropdowns = document.getElementsByClassName("list");
    var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}