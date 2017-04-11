import UnityEngine.UI;

var metersDisplay : GameObject;
var character : Transform;
//var speed : float = 10;

function Start () 
{
	InvokeRepeating("AddMeters", 0.5, 0.5);
}

function AddMeters()
{
	AllValues.meters = float.Parse(character.position.x.ToString("f2"));
	metersDisplay.GetComponent.<Text>().text = "Distance: " + AllValues.meters + "m ";
}
