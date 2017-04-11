//var saveNick : GameObject;

function Start()
{
	Debug.Log("SaveHighscore script");
	//saveHighscore.SetActive(true);
	sortHighscore();
	saveHighscore(HighscoreComputing.fileName);
}

function sortHighscore()
{
	var swapScore : String;
	var swapMaxSpeed : String;
	var swapNick : String;

	HighscoreComputing.score[HighscoreComputing.score.length - 1] = AllValues.meters.ToString();
	HighscoreComputing.mSpeed[HighscoreComputing.mSpeed.length - 1] = AllValues.maxSpeed.ToString();
	HighscoreComputing.names[HighscoreComputing.names.length - 1] = SaveNick.nick.ToString();//getNick();

	for(var i : int = HighscoreComputing.score.length - 1; i >= 1 ; i--)
	{
		if(AllValues.meters > float.Parse(HighscoreComputing.score[i - 1]))
		{
			swapScore = HighscoreComputing.score[i - 1];
			swapMaxSpeed = HighscoreComputing.mSpeed[i - 1];
			swapNick = HighscoreComputing.names[i - 1];

			HighscoreComputing.score[i - 1] = AllValues.meters.ToString();
			HighscoreComputing.mSpeed[i - 1] = AllValues.maxSpeed.ToString();
			HighscoreComputing.names[i - 1] = SaveNick.nick.ToString();

			HighscoreComputing.score[i] = swapScore;
			HighscoreComputing.mSpeed[i] = swapMaxSpeed;
			HighscoreComputing.names[i] = swapNick;
		}
	}
}

function saveHighscore(ourFile: String)
{
	var sr = File.CreateText(ourFile);
	sr.Close();
	var sw : StreamWriter = File.AppendText(ourFile);//new StreamWriter(ourFile);

	for(var i : int = 0; i < HighscoreComputing.score.length; i++)
	{
		sw.WriteLine(HighscoreComputing.score[i] + "," + HighscoreComputing.mSpeed[i] + "," + HighscoreComputing.names[i]);
	}
	sw.Close();
}