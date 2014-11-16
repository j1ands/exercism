function anagram(word)
{
	var aGCode = 0;
	var lowerWord = word.toLowerCase();

	for(var x = 0; x < lowerWord.length; x++)
	{
		aGCode += lowerWord.charCodeAt(x);
	}

	// function matches(arr)
	// {
	// 	return [];
	// }
	var anaPack = {"code":aGCode, "word":lowerWord};
	return anaPack;
}

Object.prototype.matches = function(arr)
{
	//return [];
	var result = [];
	//var tempLetter;
	var tempCode = 0;
	var tempWord = "";
	var arrayOfArguments = [];
	//arrayOfArguments = arrayOfArguments.concat(arguments[0]);

	for(var i = 0; i < arguments.length; i++)
	{
		arrayOfArguments = arrayOfArguments.concat(arguments[i]);
	}
	//debugger;

	for(var x = 0; x < arrayOfArguments.length; x++)
	{
		tempWord = arrayOfArguments[x].toLowerCase();
		for(var y = 0; y < tempWord.length; y++)
		{
			//tempLetter = arr[x][y];
			//debugger;
			tempCode += tempWord.charCodeAt(y);
		}
		debugger;
		if(tempCode == this.code)
		{
			var isAna = false;
			
			if(tempWord != this.word)
			{
				isAna = true;
				for(var i = 0; i < tempWord.length; i++)
				{
					if(this.word.indexOf(tempWord[i]) == -1)
					{
						isAna = false;
					}
				}
			}

			if(isAna){result.push(arrayOfArguments[x]);}
		}
		tempCode = 0;
	}

	return result;
}

//module.exports = anagram;