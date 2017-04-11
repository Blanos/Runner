var character : Transform;
var distance : float = 30;

function Update () 
{
	transform.position.z = character.position.z - distance;
	transform.position.x = character.position.x;
}

//function LateUpdate () 
//{
//	GetComponent.<Camera>().main.transform.position.y = CameraY;
//}