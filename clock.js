



// m= checkTime(m)
// s= checkTime(s)
// h= checkTime(h)

 function clocktime () {
	var today = new Date()
	var hour = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var showhour = document.getElementById("hours");
	if (hour >= 10) {
		showhour.innerHTML = hour + ":"
	} else {
		showhour = "0" + hour + ":"
	}


var showmins = document.getElementById("minutes");
	if (minutes >= 10) {
	showmins. innerHTML = minutes + ":"
	} else {
		showmins = "0" + minutes + ":"
	}



var showsec = document.getElementById("seconds");
if (seconds >= 10) {
	showsec. innerHTML = seconds 
	} else {
		showsec = "0" + seconds 
	}
};

setInterval (clocktime,1000);

















// 	// console.log(new Date());
// var timeclock = document.getElementById("timeclock")
// new Date(hour[, minutes[, seconds[, milliseconds]]]);
// }

// function 

