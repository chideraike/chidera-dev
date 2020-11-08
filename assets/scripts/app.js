const Portfolio = (function () {
	function makeWords() {
		var words = [
			{
				text: "C++",
				weight: 5,
			},
			{
				text: "Python",
				weight: 5,
			},
			{
				text: "CSS 3",
				weight: 10,
			},
			{
				text: "JavaScript",
				weight: 14,
			},
			{
				text: "HTML 5",
				weight: 10,
			},
			{
				text: "Java",
				weight: 7,
			},
			{
				text: "Premiere Pro",
				weight: 11,
			},
			{
				text: "Photoshop",
				weight: 9,
			},
			{
				text: "XD",
				weight: 7,
			},
			{
				text: "React",
				weight: 12,
			},
			{
				text: "React Native",
				weight: 10,
			},
			{
				text: "Firebase",
				weight: 9,
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$(".teaching-domains").jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on("scroll", function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.",
				"love everything about code.",
				"am eager to learn new things.",
				"solve problems.",
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: "text",
			callback: function () {
				$("#writing-text").css({
					color: "#fff",
					"background-color": "#C8412B",
				});
			},
			preStringTyped: function () {},
			onStringTyped: function () {},
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
	};
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
