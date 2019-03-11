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
		//consants to represent durations in ticks (milliseconds)
		const TICKS_PER_SEC = 1000;
		const TICKS_PER_MIN = 60 * TICKS_PER_SEC;
		const TICKS_TO_FALL_ASLEEP = 14 * TICKS_PER_MIN;
		const TICKS_PER_CYCLE = 90 * TICKS_PER_MIN;
		
		//the number of cycles to calculate
		const N_CYCLES = 6;
		
		//begin writing user-readable message
		var s = "Get up at one of these times:\n";
		
		//calculate time to set alarm
		var alarmTime = Date.now() + TICKS_TO_FALL_ASLEEP;
		
		//add each cycle and record new time
		for (var i = 0; i < N_CYCLES; i++)
		{
			//calculate time
			alarmTime += TICKS_PER_CYCLE;
			var timeStr = (new Date(alarmTime)).toLocaleTimeString();
			
			//format separator
			if (i != 0) s += ",   ";
			
			//record time
			s += timeStr;
		}
		
		//notify user
		//TODO: ui instead of alert?
		alert(s);
	});
	
	refresh();
});