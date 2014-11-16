function compute(str1,str2)
{
	//var identical = true;
	var diffCounter = 0;

	for(var x = 0; x < str1.length; x++)
	{
		if(str1[x] != str2[x])
		{
			//identical = false;
			diffCounter++;
		}
	}

	return diffCounter;
}