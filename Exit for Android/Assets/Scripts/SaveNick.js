var letter1 : GameObject;
var letter2 : GameObject;
var letter3 : GameObject;
static var nick : String;
var saveHighscore : GameObject;

function Start () 
{
	//Debug.Log("SaveNick script");
	nick = letter1.GetComponent.<Text>().text;
	nick = nick + letter2.GetComponent.<Text>().text; 
	nick = nick + letter3.GetComponent.<Text>().text; 
	saveHighscore.SetActive(true);

	Debug.Log(nick);
}

