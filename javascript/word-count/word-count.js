function words(words)
{
	var wordsArr = words.split(/ |\n/);
	var countedWords = {};

	for(var x = 0; x < wordsArr.length; x++)
	{
		if(!countedWords[wordsArr[x]])
		{
			countedWords[wordsArr[x]] = 1;
		}
		else
		{
			countedWords[wordsArr[x]]++;
		}
	}
	return countedWords;
}