//constants to control the refresh rate
const REFRESH_RATE = 1;
const REFRESH_INTERVAL = 1 / REFRESH_RATE;

//consants to represent durations in ticks (milliseconds)
const TICKS_PER_SEC = 1000;
const TICKS_PER_MIN = 60 * TICKS_PER_SEC;
const TICKS_TO_FALL_ASLEEP = 14 * TICKS_PER_MIN;
const TICKS_PER_REM_CYCLE = 90 * TICKS_PER_MIN;
const TICKS_PER_POWER_NAP = 15 * TICKS_PER_MIN;
const TICKS_PER_NASA_NAP = 26 * TICKS_PER_MIN;
const TICKS_PER_BAD_NAP = 30 * TICKS_PER_MIN;
const TICKS_PER_SLOW_WAVES_NAP = 60 * TICKS_PER_MIN;

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
	
	$("#deep-sleep-submit").click(function()
	{
		//the number of cycles to calculate
		const N_CYCLES = 6;
		
		//begin writing user-readable message
		var msg = "Get up at one of these times:\n";
		
		//calculate time to set alarm
		var alarmTime = Date.now() + TICKS_TO_FALL_ASLEEP;
		
		//add each cycle and record new time
		for (var i = 0; i < N_CYCLES; i++)
		{
			//calculate time
			alarmTime += TICKS_PER_REM_CYCLE;
			var timeStr = (new Date(alarmTime)).toLocaleTimeString();
			
			//format separator
			if (i != 0) msg += ",   ";
			
			//record time
			msg += timeStr;
		}
		
		//notify user
		//TODO: ui instead of alert?
		alert(msg);
	});
	
	$("#quick-nap-submit").click(function()
	{
		console.log("click");
		
		//find selected nap
		var options = [
			"ThePowerNap",
			"TheNASANap",
			"TheBadNap",
			"TheSlow-WaveSleepNap",
			"TheFullSleepCycleNap"];
		var times = [
			TICKS_PER_POWER_NAP,
			TICKS_PER_NASA_NAP,
			TICKS_PER_BAD_NAP,
			TICKS_PER_SLOW_WAVES_NAP,
			TICKS_PER_REM_CYCLE];
		var selection = $("#nap-select").val();
		var index = options.indexOf(selection);
		var napTicks = times[index];
		
		//calculate time to set alarm
		var alarmTime = Date.now() + TICKS_TO_FALL_ASLEEP + napTicks;
		var timeStr = (new Date(alarmTime)).toLocaleTimeString();
		var msg = "Get up at " + timeStr;
		
		//notify user
		//TODO: ui instead of alert?
		alert(msg);
	});
	
	refresh();
});