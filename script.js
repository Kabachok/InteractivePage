$( document ).ready(function() {
	// greeting to the user
    var user = prompt("We want get to know you. Enter your name in this form, please.");
    if (user != null && user != ""){
        $("#userName").html("Welcome to our site, " + user + "! Nice to see you here!");
    }else{
        $("#userName").html("Welcome to our site, Stranger! Nice to see you here!");
    };

    // check browser
    var hasChrome = !!window.chrome;
    if (!hasChrome){
    	$(".warningBrowser").css("display", "block");
    };

    // open help page for user
    $("#description").click(function (){
    	window.open("help.html");
    });

    // slider
    var countImg = 2;
    var pause = false;
    	// set an interval to slider and change images in it
    setInterval(function (){
	    if (!pause) {
	    	var idImg = "#image" + countImg;
	    	$(".sliderImage").attr("src", $(idImg).attr("src"));
	    	// growing up a counter for looping slider
	    	if (countImg > 6){
	    		countImg = 1;
	    	} else{
	    		countImg = countImg + 1;
	    	};
	    };
	}, 3000);
		// actions after clicking on sliderImage
	$(".sliderImage").click(function (){
			// hide all accordion elements
	    	hideAccordion();
	    	// pausing slider and showing content
			pause = !pause;
			if (pause){
				var idCount = ".accContent" + (countImg - 1);
				var idBtn = "#accH" + (countImg - 1);
				$(idCount).toggle();
			};
	});

    // toggling accordion elements
    $(".header").click(function (){
		// hide all accordion elements
    	hideAccordion();
    	// define current element
    	var idCont = $(this).attr("class");
    	var control = parseInt(idCont.slice(-1));
    	var current = ".accContent" + control;
    	// toggling current element
    	$(current).toggle();
    });

    // hide content of open element
    $(".btn").click(function (){
    	// define current element
    	var idCont = $(this).attr("id");
    	var control = parseInt(idCont.slice(-1));
    	var current = ".accContent" + control;
    	$(current).hide();
    	// when we hide text, we want to unpause the slider 
    	if (pause){
    		pause = !pause;
    	};
    });

    // hiding function
    function hideAccordion(){
		// hide all accordion elements
    	for (var i = 1; i < 7; i++) {
    		var current = ".accContent" + i;
    		$(current).hide();
    	};
    };
});