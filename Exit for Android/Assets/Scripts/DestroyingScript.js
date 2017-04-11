function OnTriggerExit (col : Collider)
{
	if(col.GetComponent.<Collider>().name == "LeftSideCol")
	{
		Destroy(gameObject);
	}
}