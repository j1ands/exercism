var fs = require('fs');	
var data = fs.readFileSync('README.md', 'utf-8');


var lyrics;

lyrics = data.split('\n\r\n');
lyrics = lyrics.slice(4,12);
lyrics[0] = lyrics[0].replace("```plain\r\n","");
lyrics[7] = lyrics[7].replace("\r\n```","");


var song = 
{
	lyrics : lyrics,
	verse : function(num)
			  {
			  	return lyrics[num-1];
			  },
	verses : function(num1, num2)
			  {
			  	var total = "";
			  	while(num1 <= num2)
			  	{
			 		total += (lyrics[num1-1] +"\r\n");
			 		num1++;
			  	}
			  	return total;
			  }
}

module.exports = song;