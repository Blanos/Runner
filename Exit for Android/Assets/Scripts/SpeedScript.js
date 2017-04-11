var speedDisplay : GameObject;

function Start () 
{
	InvokeRepeating("IncreasingSpeed", 0.5, 0.5);
}

function IncreasingSpeed () 
{
	Controls.speed = Controls.speed + 0.1;
	Controls.speed = float.Parse(Controls.speed.ToString("f2"));
	speedDisplay.GetComponent.<Text>().text = "Actual speed: " + Controls.speed + "m/s";
	if(AllValues.maxSpeed < Controls.speed)
	{
		AllValues.maxSpeed = Controls.speed;
	}
}
