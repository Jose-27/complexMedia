(function() {

	var myDiv = document.getElementById('filter');


	var show = function() {
		myDiv.style.background = "rgba(0,0,0,0.7)";
		setTimeout(hide, 6000);
	}

	var hide = function() {
		myDiv.style.background = "none";
	}

	show();

})();


(function() {
	var movingSky = null; 


	function doMove() {
		movingSky.style.left = parseInt(movingSky.style.left) + 1 + 'px';
		setTimeout(doMove, 100); 
	}

	function init() {
		movingSky = document.getElementById('sky'); 
		movingSky.style.left = '-200px'; 
		setTimeout(doMove, 5500); 
		setTimeout(hide, 35000); // stop runing do move after 35 seconds
	}

	//set doMove to false 
	var hide = function() {
		doMove = false;
	}

 	init();
	
})();


(function() {
	var cover = null; 


	function doMove() {
		cover.style.top = parseInt(cover.style.top) - 1 + 'px';
		setTimeout(doMove, 1); 
	}

	function initd() {
		cover = document.getElementById('cover'); 
		cover.style.top = '70px'; 
		setTimeout(doMove, 1000); // start animating
	}

	initd();
})();

	//slide up the id='wood' right after the filter  disappear
	setTimeout(function() {
		var slideUp = document.getElementById("wood");
		slideUp.style.marginTop = "-50px";

	},6050);


function shake(e, oncomplete, distance, time) {
	var time = 500;
	var distance = 5;

	var start = (new Date()).getTime();
	animate();

	function animate() {
		var now = (new Date()).getTime();
		// Get current time
		var elapsed = now - start;
		// How long since we started
		var fraction = elapsed / time;
		// What fraction of total time?
		if (fraction < 1) {
			var x = distance * Math.sin(fraction * 4 * Math.PI);
			e.style.left = x + "px";
			// We're aiming for a smooth 40 frames/second animation.
			setTimeout(animate, Math.min(25, time - elapsed));
		} else {
			// Otherwise, the animation is complete
			if (oncomplete) oncomplete(e);
			// Invoke completion callback
		}
	}
}

function shakeme(event1) {
	shake(event1.target);
}

document.getElementById("wood").addEventListener("mouseover", shakeme, false);














