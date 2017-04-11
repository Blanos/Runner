/*var difference : float = 3.0;
var highOrLow : int = 0;
var sizeOfHole : int;
var sizeOfSection : int;

function Start()
{
	InvokeRepeating("nowa", 1, 1);
}

function nowa () 
{

	highOrLow = 0;
	Debug.Log("LastHeight = " + AllValues.lastHeight);
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
			if( low && high)
			{
				Debug.Log("LastHeight po dodaniu = " + ((AllValues.lastHeight + AllValues.height/2) + (difference * highOrLow)));
				Debug.Log("break");
				break;
			}
			else
			{
				low = false;
				high = false;
			}
		}
		Debug.Log("LowOrHigh = " + highOrLow);
		AllValues.lastHeight = AllValues.lastHeight + difference * highOrLow;
		//yield WaitForSeconds (0.5);
		Debug.Log("sizeOfHole = " + sizeOfHole);
		Debug.Log("sizeOfSection = " + sizeOfSection);
		Debug.Log("AllValues.lastXAxis = " + AllValues.lastXAxis);
		for(var i : int = 1; i <= (sizeOfHole + sizeOfSection); i++)
		{
			if(i <= sizeOfHole)
			{
				//Instantiate(backGround, Vector3(AllValues.lastXAxis, 0, AllValues.backgroundZAxis), Quaternion.identity);
				//Instantiate(bottom, Vector3(AllValues.lastXAxis, -22.3, AllValues.buildingsZAxis), Quaternion.identity);
			}
			else
			{
				//Instantiate(backGround, Vector3(AllValues.lastXAxis, 0, AllValues.backgroundZAxis), Quaternion.identity);
		
				//if(i == (sizeOfSection + sizeOfHole))
				//{
				//	Instantiate(endSection, Vector3(AllValues.lastXAxis, AllValues.lastHeight, AllValues.buildingsZAxis), Quaternion.identity);
				//}
				//else
				//{
				//	Instantiate(sections[Random.Range(0, sections.length)], Vector3(AllValues.lastXAxis, AllValues.lastHeight, AllValues.buildingsZAxis), Quaternion.identity);
				//}
			}

			AllValues.lastXAxis = AllValues.lastXAxis + 10;
		}
}
*/