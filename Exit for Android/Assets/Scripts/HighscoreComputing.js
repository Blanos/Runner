import System.IO;

var dead : boolean;
public static var score : String[] = new String[5];
public static var mSpeed : String[] = new String[5];
public static var names : String[] = new String[5];
public static var nick : String[] = new String[3];
//static var fileName : String = "highscore.txt";
static var fileName : String; 
var newHighscoreElements : GameObject;
//var saveHighscore : GameObject;

function Start () 
{
	Debug.Log("HighscoreComputing script");
	fileName = Application.persistentDataPath + "/highscore.txt";
	ifExist(fileName);
	loadHighscore(fileName);
	checkHighscore();
	//newHighscoreElements.SetActive(true);

	//if(checkHighscore())
	//{
		//sortHighscore();
		//saveHighscore(fileName);
	//}
}

function ifExist(ourFile: String)
{
	if(!File.Exists(ourFile))
	{
		var sr = File.CreateText(ourFile);
		sr.Close();
		var sw : StreamWriter = File.AppendText(ourFile);
		for(var i : int  = 0; i < 5; i++)
		{
			sw.WriteLine("0,0,---");
		}
		sw.Close();
	}
}

function loadHighscore(ourFile: String)
{
	var sr : StreamReader = File.OpenText(ourFile);

	var line : String;
	line = sr.ReadToEnd();
	sr.Close();

	var everyPlayer : String[];
	everyPlayer = line.Split("\n"[0]);
	for(var i : int = 0; i < everyPlayer.length; i++)
	{
		if(i != everyPlayer.length - 1)
		{
			var everySlot : String[];
			everySlot = everyPlayer[i].Split(","[0]);

			score[i] =  everySlot[0];
			mSpeed[i] = everySlot[1];
			names[i] = everySlot[2];
		}
	}
}

function checkHighscore() //: boolean
{
	//Debug.Log("check script");
	if(AllValues.meters > float.Parse(score[score.length - 1]))
	{
	//Debug.Log("check script true");
		AllValues.newScore = true;
		newHighscoreElements.SetActive(true);
		//saveHighscore.SetActive(true);
		//return true;
	}
	else
	{
		AllValues.newScore = false;
		//return false;
	}
}
