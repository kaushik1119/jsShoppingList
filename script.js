var list = ["Banana", "Apples", "Oranges", "Blueberries"];
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

list.forEach(function (fruit,i,j) {
	console.log(fruit,i,j);
	// body...
});

var heading = document.getElementById("heading");
heading.addEventListener("mouseenter", function(){
	console.log("Shopping!!!!");
})

var input = document.getElementById("userinput");
var add = document.getElementById("add");
var list = document.querySelector("ul");
var toDos = document.getElementsByTagName("li");
var delButtons = document.getElementsByClassName("del");

function inputLength() {
	return input.value.length;
}

function toggleDone(li){
	li.addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

function removeElement(btn){
	btn.addEventListener("click",function () {
		list.removeChild(btn.parentElement);
	});
}

function createElement(){
	var li = document.createElement("li");
	li.className = "element";
	var delb = document.createElement("input");
	delb.type = "button";
	delb.className = "del";
	delb.value = "Delete";
	toggleDone(li);
	removeElement(delb);
	li.appendChild(document.createTextNode(input.value))
	li.appendChild(delb);
	list.appendChild(li);
	input.value = "";
}

function addElementOnClick(){
	if(inputLength() > 0){
		createElement();
	}
}

function addElementOnKeyPress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createElement();
	}
}

add.addEventListener("click",addElementOnClick);
	
input.addEventListener("keypress",addElementOnKeyPress);

Array.from(toDos).forEach(function(li){
	toggleDone(li);
});

Array.from(delButtons).forEach(function (btn){
	removeElement(btn);
})
	
