//console.log("look at me we are working together");

//(alert("hey hey hey"));
var hobbiesList = document.getElementsByClassName("hobby");

console.log(hobbiesList[0].innerHTML);//an array
console.log(hobbiesList[1].innerHTML);
console.log(hobbiesList[2].innerHTML);
console.log(hobbiesList[3].innerHTML);


var selectMusic= document.getElementById("fav")

console.log(selectMusic.innerHTML);

function favoriteSong(){
	document.getElementById("fav").innerHTML="happy";
}

favoriteSong();

function bestSong(){
	document.getElementById("best").innerHTML="joy";
}

bestSong();

function worstSong(){
	document.getElementById("worst").innerHTML="bad";
}

worstSong();