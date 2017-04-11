static var speed : float = 3.0;
var gravity : float = 20.0;
var jumpspeed : float = 20.0;
var direction : Vector3 = Vector3.zero;
var keyPressed : boolean = false;
var currentJump : float = 0;

/*function start ()
{
	keyPressed = false;
	currentJump = 0;
}*/

function Update () 
{
	var controller : CharacterController = GetComponent.<CharacterController>();

	if(controller.isGrounded)
	{
		GetComponent.<Animation>().Play("MoveForward");
		direction = Vector3(speed, 0, 0);
		direction = transform.TransformDirection(direction);

		currentJump = 0;
		if(Input.touchCount > 0)//&& Input.GetTouch(0).phase == TouchPhase.Began)
		{
			currentJump = currentJump + 0.5;
			direction.y = direction.y + currentJump;
			keyPressed = true;
		}
	}
	else
	{
		//PlayMode.StopAll();
		//Animation.Stop();
		GetComponent.<Animation>().Stop("MoveForward");
		if(Input.touchCount > 0 /*&& (Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(0).phase == TouchPhase.Stationary)*/ && jumpspeed > direction.y && keyPressed == true)
		{
			currentJump = currentJump + 0.5;
			direction.y = direction.y + currentJump;
		}
		else
		{
			if(Input.touchCount == 0 /*&& (Input.GetTouch(0).phase == TouchPhase.Ended || Input.GetTouch(0).phase == TouchPhase.Canceled)*/ && direction.y > 0)
			{
				direction.y = direction.y/2;
			}
			currentJump = 0;
			keyPressed = false;
		}
	}

	direction.y = direction.y - gravity * Time.deltaTime;
	controller.Move(direction * Time.deltaTime);
}
