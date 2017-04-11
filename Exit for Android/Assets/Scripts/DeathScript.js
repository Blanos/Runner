var character : GameObject;
var Highscore : GameObject;
var SpeedScript : GameObject;

var EndBlack : GameObject;
var EndText : GameObject;
/*
var NewHighscore : GameObject;
var Letter1 : GameObject;
var Letter2 : GameObject;
var Letter3 : GameObject;
var Button1Up : GameObject;
var Button2Up : GameObject;
var Button3Up : GameObject;
var Button1Down : GameObject;
var Button2Down : GameObject;
var Button3Down : GameObject;
var RawImage : GameObject;*/
var Continue : GameObject;

function OnTriggerEnter (col : Collider)
{
	if(col.GetComponent.<Collider>().name == "Character")
	{
		SpeedScript.SetActive(false);
		Highscore.SetActive(true);
		EndBlack.SetActive(true);
		EndText.SetActive(true);

		//Debug.Log("Death script");
		/*if(AllValues.newScore)
		{
			NewHighscore.SetActive(true);
			Letter1.SetActive(true);
			Letter2.SetActive(true);
			Letter3.SetActive(true);
			Button1Up.SetActive(true);
			Button2Up.SetActive(true);
			Button3Up.SetActive(true);
			Button1Down.SetActive(true);
			Button2Down.SetActive(true);
			Button3Down.SetActive(true);
			RawImage.SetActive(true);
		}*/
		Continue.SetActive(true);
		//Exit.SetActive(true);
		//PlayAgain.SetActive(true);
		character.SetActive(false);
	}
}
