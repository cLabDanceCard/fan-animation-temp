var leftBar = document.getElementById("bar1");
var rightBar = document.getElementById("bar2");

var allSlices = document.querySelectorAll("*");

leftBar.addEventListener("click", function () {
	allSlices.forEach(function (slice) {
        if (slice.classList.contains("left-border")){
            slice.style.border = slice.style.border === "none" ? "" : "none";
        }
        else if (slice.classList.contains("left")) {
            slice.style.display = slice.style.display === "none" ? "" : "none";
        }
	});
});

rightBar.addEventListener("click", function () {
	allSlices.forEach(function (slice) {
        if (slice.classList.contains("right-border")){
            console.log("right border")
            slice.style.border = slice.style.border === "none" ? "" : "none";
        }
        else if (slice.classList.contains("right")) {
            console.log("right")
            slice.style.display = slice.style.display === "none" ? "" : "none";
        }
	});
});