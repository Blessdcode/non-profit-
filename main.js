let Navigation = document.getElementById("Navigation");
console.log(menuIcon)

Navigation.style.maxHeight = "0px";

function menutoggle() {
    if (Navigation.style.maxHeight == "0px") {
        Navigation.style.maxHeight = "400px";
    }
    else {
        Navigation.style.maxHeight = "0px";
    }
}

window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100);
})




    // let countNl = document.querySelector(".count")
    // let count = 0
    // let int = setInterval(counting, 10)


    // function counting() {
    //     count++
    //     if (count > 3566) {
    //         clearInterval(int)
    //     }
    //     countNl.innerText = `${count}+`

    //     console.log(count)
    // }