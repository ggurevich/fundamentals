// delclaration
function helloWorld(){
	console.log("hello world");
}

helloWorld();

function printMyName(){
	console.log("gabriel");
}

printMyName();

function addNumbers(){
	var x=10;
	var y=10;
	console.log(x+y);
}

function multipyNumbers(){
	var x=10;
	var y=10;
	console.log(x*y);
}

//parameters and arguments

function printNumber(x){
	console.log("the number you entered was: " + x);
}

printNumber(6)

function bankPin(x){
	console.log(x+ " is the correct number.");
}

bankPin(12345)

//bankpin
	function enterpin(xyz) {
		var pin = 503;

		if (pin != xyz) {
			console.log("Pin not accepted");
		} else {
			console.log("Correct!");
		}
	}

	enterpin(502);


function phoneBill(phoneConnect, phoneInsurance, phoneData){
	
	return (phoneData+phoneInsurance+phoneConnect);
	
}

console.log(phoneBill(20, 10, 15));


