function Update () 
{
	var controller : CharacterController = GetComponent.<CharacterController>();

	if(controller.isGrounded)
	{
		GetComponent.<Animation>().Play("MoveForward");
	}
	else
	{
		GetComponent.<Animation>().Stop("MoveForward");
	}
}
