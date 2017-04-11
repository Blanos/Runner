var loadHighscore : GameObject;
var leaderboard : GameObject;
var scorePlace : GameObject;
var speedPlace : GameObject;
var namePlace : GameObject;
var canvas : GameObject;

function Start () 
{
	loadHighscore.SetActive(true);
	leaderboard.SetActive(true);
	yield WaitForSeconds (1);
	scorePlace.SetActive(true);
	speedPlace.SetActive(true);
	namePlace.SetActive(true);

	for(var i : int = 0; i < HighscoreComputing.score.length; i++)
	{
		//Debug.Log("obejscie " + i);
		//Debug.Log("score = " + HighscoreComputing.score[i]);
		//Debug.Log("score = " + HighscoreComputing.mSpeed[i]);
		//Debug.Log("score = " + HighscoreComputing.names[i]);
		var spawnPos1 : Vector3 = new Vector3(-158, 70 - 30*i, 0);
		scorePlace.GetComponent.<Text>().text = HighscoreComputing.score[i];
		var newObj1 : GameObject = Instantiate(scorePlace);
		newObj1.transform.SetParent(canvas.transform);
		newObj1.transform.localPosition = spawnPos1;

		var spawnPos2 : Vector3 = new Vector3(47, 70 - 30*i, 0);
		speedPlace.GetComponent.<Text>().text = HighscoreComputing.mSpeed[i];
		var newObj2 : GameObject = Instantiate(speedPlace);
		newObj2.transform.SetParent(canvas.transform);
		newObj2.transform.localPosition = spawnPos2;

		var spawnPos3 : Vector3 = new Vector3(237, 70 - 30*i, 0);
		namePlace.GetComponent.<Text>().text = HighscoreComputing.names[i];
		var newObj3 : GameObject = Instantiate(namePlace);
		newObj3.transform.SetParent(canvas.transform);
		newObj3.transform.localPosition = spawnPos3;
		//speedPlace.GetComponent.<Text>().text = HighscoreComputing.mSpeed[i];
		//Instantiate(speedPlace, Vector3(47, 100 - 30*i, 0), Quaternion.identity).SetParent(Canvas.transform);
		//namePlace.GetComponent.<Text>().text = HighscoreComputing.names[i];
		//Instantiate(namePlace, Vector3(237, 100 - 30*i, 0), Quaternion.identity).SetParent(Canvas.transform);

		/*var spawnPos : Vector3 = new Vector3(158, 100 - 30*i, 0);
		scorePlace.GetComponent.<Text>().text = HighscoreComputing.score[i];
		var newObj GameObject = Instantiate(scorePlace, Vector3(158, 100 - 30*i, 0), Quaternion.identity).SetParent(Canvas.transform);
		speedPlace.GetComponent.<Text>().text = HighscoreComputing.mSpeed[i];
		Instantiate(speedPlace, Vector3(47, 100 - 30*i, 0), Quaternion.identity).SetParent(Canvas.transform);
		namePlace.GetComponent.<Text>().text = HighscoreComputing.names[i];
		Instantiate(namePlace, Vector3(237, 100 - 30*i, 0), Quaternion.identity).SetParent(Canvas.transform);*/
	}

	scorePlace.SetActive(false);
	speedPlace.SetActive(false);
	namePlace.SetActive(false);
}
