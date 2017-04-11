var EndText : GameObject;
/*var NewHighscore : GameObject;
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
var PlayAgain : GameObject;
var Exit : GameObject;
var saveHighscore : GameObject;
var saveNick : GameObject;
var newHighscoreElements : GameObject;
var showLeaderboard : GameObject;

var letter1 : GameObject;
var letter2 : GameObject;
var letter3 : GameObject;

var letter : char;
var ascii : int;
var str : String;

function ContinueButton()
{
	EndText.SetActive(false);
	/*if(AllValues.newScore)
	{
		NewHighscore.SetActive(false);
		Letter1.SetActive(false);
		Letter2.SetActive(false);
		Letter3.SetActive(false);
		Button1Up.SetActive(false);
		Button2Up.SetActive(false);
		Button3Up.SetActive(false);
		Button1Down.SetActive(false);
		Button2Down.SetActive(false);
		Button3Down.SetActive(false);
		RawImage.SetActive(false);

	}*/
	if(AllValues.newScore)
	{
		saveNick.SetActive(true);
	}
	newHighscoreElements.SetActive(false);
	Continue.SetActive(false);
	showLeaderboard.SetActive(true);
	PlayAgain.SetActive(true);
	Exit.SetActive(true);
}

function PlayAgainButton()
{
	Application.LoadLevel(3);
}

function ExitButton()
{
	AllValues.maxSpeed = 0.0;
	Controls.speed = 3.0;
	AllValues.lastXAxis = 80.0;
	AllValues.lastHeight = -20.0;
	AllValues.newScore = false;
	Application.LoadLevel(0);
}

function firstButtonDown()
{	
	letter = letter1.GetComponent.<Text>().text[0];
	//letter = str[0];
	ascii = letter;
	if(letter == 65)
	{
		letter = 90;
	}
	else
	{
		ascii = ascii - 1;
		letter = ascii;// = letter - 1;
	}
	letter1.GetComponent.<Text>().text = letter.ToString();
}

function secondButtonDown()
{
	letter = letter2.GetComponent.<Text>().text[0];
	//letter = str[0];
	ascii = letter;
	if(letter == 65)
	{
		letter = 90;
	}
	else
	{
		ascii = ascii - 1;
		letter = ascii;// = letter - 1;
	}
	letter2.GetComponent.<Text>().text = letter.ToString();
}

function thirdButtonDown()
{
	letter = letter3.GetComponent.<Text>().text[0];
	//letter = str[0];
	ascii = letter;
	if(letter == 65)
	{
		letter = 90;
	}
	else
	{
		ascii = ascii - 1;
		letter = ascii;// = letter - 1;
	}
	letter3.GetComponent.<Text>().text = letter.ToString();
}

function firstButtonUp()
{
	letter = letter1.GetComponent.<Text>().text[0];
	//letter = str[0];
	ascii = letter;
	if(letter == 90)
	{
		letter = 65;
	}
	else
	{
		ascii = ascii + 1;
		letter = ascii;// = letter - 1;
	}
	letter1.GetComponent.<Text>().text = letter.ToString();
}

function secondButtonUp()
{
	letter = letter2.GetComponent.<Text>().text[0];
	//letter = str[0];
	ascii = letter;
	if(letter == 90)
	{
		letter = 65;
	}
	else
	{
		ascii = ascii + 1;
		letter = ascii;// = letter - 1;
	}
	letter2.GetComponent.<Text>().text = letter.ToString();
}

function thirdButtonUp()
{
	letter = letter3.GetComponent.<Text>().text[0];
	//letter = str[0];
	ascii = letter;
	if(letter == 90)
	{
		letter = 65;
	}
	else
	{
		ascii = ascii + 1;
		letter = ascii;// = letter - 1;
	}
	letter3.GetComponent.<Text>().text = letter.ToString();
}

var StartingBlack : GameObject;
var SpeedCounter : GameObject;
var character : GameObject;

function ReadyButton()
{
	StartingBlack.SetActive(false);
	SpeedCounter.SetActive(true);
	character.SetActive(true);
}