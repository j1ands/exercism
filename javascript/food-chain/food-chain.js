// function hello()
// {
// 	console.log("hello");
// }
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

// module.exports.hello = hello;

// console.log(module);

//fs.readFile('README.md', 'utf-8', function(err, data)
//{
	//if(err) throw "Big Time Error Now!";
	//console.log(data[9]);


//console.log(lyrics[0][100])
//console.log(lyrics[0].trim());
//console.log(lyrics[0].replace("\r\n\r",""));
	//console.log(lyrics[7]);
//});

// console.log(lyrics[0]);
// lyrics = lyrics.slice(9);
// console.log(lyrics[0]);


//read from readme

//lyrics = lyrics.split('\n');


//console.log(song.verse(8));

//module.exports = song;