const REFRESH_RATE = 1;
const REFRESH_INTERVAL = 1 / REFRESH_RATE;

function refresh()
{
	var elem = $("#clock")[0];
	var time = new Date();
	var hh = time.getHours().toString().padStart(2, "0");
	var mm = time.getMinutes().toString().padStart(2, "0");
	var ss = time.getSeconds().toString().padStart(2, "0");
	elem.innerText = hh + ":" + mm + ":" + ss;
	
	setTimeout(refresh, REFRESH_INTERVAL);
}

$(document).ready(function()
{
	console.log("page ready");
	
	//...
	
	refresh();
});