
 function clocktime () {
	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	var showhour = document.getElementById("hours");
	if (hour >= 10) {
		showhour.innerHTML = hour + ":"
	} else {
		showhour.innerHTML = "0" + hour + ":"
	}


var showmins = document.getElementById("minutes");
	if (minutes >= 10) {
	showmins.innerHTML = minutes + ":"
	} else {
		showmins.innerHTML = "0" + minutes + ":"
	}



var showsec = document.getElementById("seconds");
if (seconds >= 10) {
	showsec.innerHTML = seconds 
	} else {
		showsec.innerHTML = "0" + seconds 
	}
};



// Hex code portion //

function hextime () {
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var hexBlock = document.getElementById("hexCode");


	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (hours < 10) {
		hours = "0" + hours;
	}

	var hexCodeString = "#" + hours + minutes + seconds;

	// console.log('seconds: ' + seconds, "minutes: "+ minutes, "hours: " + hours);

	hexBlock.style.backgroundColor = hexCodeString;
	hexBlock.innerHTML= "<div>" + hexCodeString + '</div>';

};






setInterval (clocktime,1000);
setInterval (hextime,1000);
