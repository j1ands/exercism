var Bob = function() {};

Bob.prototype.hey = function(input) {

	var final_char = input[input.length - 1];

	if(input === input.toUpperCase() && input.match(/[a-z]/i))
	{
		return 'Whoa, chill out!'
	}
	else if(final_char === "?")
	{
		return 'Sure.';
	}
	else if(input[0] == null || input[0] == ' ')
	{
		return 'Fine. Be that way!';
	}
	else
	{
		return 'Whatever.'
	}
};