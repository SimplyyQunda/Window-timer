
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

setInterval (clocktime,1000);



 function colorpop() {
 	var today = new Date();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	// var bgcolor =today.getBackgroundcolor(#f5b405);
 	
 	var showhex = document.getElementById("hexcode");
 	showhex.innerHTML = "<p>#"
 	+ hour + minutes + seconds  + "</p>"



 };
setInterval(colorpop,1000);




var hexCodeNumber = 123456

function hexCodeChange () {
	hexCodeNumber = hexCodeNumber + 20;
};

function hexColorBackground () {
	var hexBlock = document.getElementById("hexCode");
	hexBlock.innerHTML= "<div style=\"background-color: " + hexCodeNumber + ";\"> #" + hexCodeNumber;
	// hexBlock.style.backgroundColor = ("#" + hexCodeNumber);
};

setInterval (clocktime,1000);
setInterval (hexColorBackground,500)
setInterval (hexCodeChange,500)



