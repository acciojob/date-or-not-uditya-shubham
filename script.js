var isDate = function (input) {
  //   write your code here
	if(isNaN(Date.parse(input)))
		return false;
	return true;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
