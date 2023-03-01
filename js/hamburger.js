let hamburger = document.querySelector(".hamburger");
let lineOne = document.getElementById("line-1");
let lineTwo = document.getElementById("line-2");
let lineThree = document.getElementById("line-3");

const lines = new TimelineMax({ paused: true, reversed: true });
const small = new TimelineMax({ paused: true, reversed: true });

let allLines = [lineThree, lineTwo, lineOne];

lines
	.to(lineTwo, 0.5, {
		x: -100,
		transformOrigin: "center",
		transformStyle: "preserve-3d",
		opacity: 0,
	})
	.to(
		lineThree,
		0.5,
		{
			y: "200%",
			delay: 0.125,
		},
		0
	)
	.to(
		lineOne,
		0.5,
		{
			y: "-200%",
			delay: 0.125,
		},
		0
	)
	.to(
		lineThree,
		0.5,
		{
			rotate: 45,
			transformOrigin: "center",
		},
		"rotate"
	)
	.to(
		lineOne,
		0.5,
		{
			rotate: -45,
			transformOrigin: "center",
		},
		"rotate"
	);

small.staggerTo(allLines, 0.2, {
	scaleX: 0.8,
	transformOrigin: "50% 50%",
	stagger: 0.1,
});

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("cross");
	lines.reversed() ? lines.play() : lines.reverse();
});

// hamburger.addEventListener("mouseenter", () => {
// 	console.log("mouse");
// 	if (hamburger.classList.contains("cross")) {
// 		return;
// 	} else {
// 		small.play();

// 		setTimeout(() => {
// 			small.reverse();
// 		}, 900);
// 	}
// });
