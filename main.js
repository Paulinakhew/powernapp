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
	
	$("#imgoingtosleep").click(function()
	{
		var s = "Get up at one of these times:";
		var time = Date.now();
		time +=
			14 * 60 * 1000 +	//14 minutes to fall asleep
			90 * 60 * 1000;		//a 90-minute rem cycles
		for (var i = 1; i < 5; i++)
		{
			s += "\n" + new Date(time) + ", ";
			time += 90 * 60 * 1000; //add another 90-minute cycle
		}
		alert(s);
	});
	
	refresh();
});