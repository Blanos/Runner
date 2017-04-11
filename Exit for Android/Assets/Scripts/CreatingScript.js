var crate : GameObject;
var background1 : GameObject;
var background2 : GameObject;
var background3 : GameObject;
var bottom : GameObject;

var stage1 : GameObject;
var stage2 : GameObject;
var stage3 : GameObject;
var stage4 : GameObject;
var endStage : GameObject;
//var middleSection : GameObject;
//var endSection : GameObject;
var isCrate : boolean = false;

var sizeOfHole : int;
var sizeOfSection : int;
var highOrLow : int = 0;
var low : boolean = false;
var high : boolean = false;
var difference : float = 3.0;



function OnTriggerEnter (col : Collider)
{
	highOrLow = 0;
	var stages : GameObject[] = [stage1, stage2, stage3, stage4];
	var backgrounds : GameObject[] = [background1, background2, background3];

	if(col.GetComponent.<Collider>().tag == "EoB")
	{
	//Debug.Log(highOrLow);
		//Debug.Log("LastHeight = " + AllValues.lastHeight);
		sizeOfHole = Random.Range(1, parseInt(Controls.speed/5) + 1);
		sizeOfSection = Random.Range(1, 6);

		for(;;)
		{
			highOrLow = Random.Range(-1, 2);
			if((AllValues.lastHeight + AllValues.height/2) + (difference * highOrLow) > AllValues.minHeight)
			{
				low = true;
			}
			if((AllValues.lastHeight + AllValues.height/2) + (difference * highOrLow) < AllValues.maxHeight)
			{
				high = true;
			}

			//if(j==20)
			//{
			//	Debug.Log("break");
			//	break;
			//}
			if(low && high)
			{
				//Debug.Log("LastHeight po dodaniu = " + ((AllValues.lastHeight + AllValues.height/2) + (difference * highOrLow)));
				//Debug.Log("break");
				break;
			}
			else
			{
				low = false;
				high = false;
			}
		}
		//Debug.Log("LowOrHigh = " + highOrLow);

		//yield WaitForSeconds (0.5);

		AllValues.lastHeight = AllValues.lastHeight + difference * highOrLow;
		//Debug.Log("sizeOfHole = " + sizeOfHole);
		//Debug.Log("sizeOfSection = " + sizeOfSection);
		//Debug.Log("AllValues.lastXAxis = " + AllValues.lastXAxis);
		isCrate = false;
		for(var i : int = 1; i <= (sizeOfHole + sizeOfSection); i++)
		{
			if(i <= sizeOfHole)
			{
				Instantiate(backgrounds[Random.Range(0, backgrounds.length)], Vector3(AllValues.lastXAxis, 0, AllValues.backgroundZAxis), Quaternion.identity);
				Instantiate(bottom, Vector3(AllValues.lastXAxis, -22.3, AllValues.buildingsZAxis), Quaternion.identity);
			}
			else
			{
				Instantiate(backgrounds[Random.Range(0, backgrounds.length)], Vector3(AllValues.lastXAxis, 0, AllValues.backgroundZAxis), Quaternion.identity);
		
				if(i == (sizeOfSection + sizeOfHole))
				{
					Instantiate(endStage, Vector3(AllValues.lastXAxis, AllValues.lastHeight, AllValues.buildingsZAxis), Quaternion.identity);
				}
				else
				{
					Instantiate(stages[Random.Range(0, stages.length)], Vector3(AllValues.lastXAxis, AllValues.lastHeight, AllValues.buildingsZAxis), Quaternion.identity);
				}

				if(sizeOfSection >= 4 && isCrate == false && Random.Range(1, 10) > 8)
				{
					Instantiate(crate, Vector3(AllValues.lastXAxis, AllValues.lastHeight + AllValues.height/2 + crate.transform.localScale.y/2 + 0.01, AllValues.buildingsZAxis), Quaternion.identity);
					isCrate = true;
					//Debug.Log("crate");
				}
			}

			AllValues.lastXAxis = AllValues.lastXAxis + 10;
		} 
		low = false;
		high = false;
	}
}