let textanswer1= 37+42;
let textanswer2= 35+66;
let checkboxans1= "True"
let checkboxans2= "True"
let checkboxans3= "False"
let radioans= "2+2*4"
function DisplayScore() {
	let counter = 0
	let usertxtans1= document.getElementById("textq1").value;
	let usertxtans2= document.getElementById("textq2").value;
	var checkbox1 = document.querySelector("#q1").checked;
	var checkbox2 = document.querySelector("#q2").checked;
	var checkbox3 = document.querySelector("#q3").checked;
	var radio3= document.querySelector("#ans3").checked;
	if (usertxtans1 == textanswer1) {
		counter = counter + 1
	} 
	if (usertxtans2 ==textanswer2) {
		counter = counter + 1
	}
	if (checkbox1 == true) {
		counter = counter +1
	}
	if (checkbox2 == true) {
		counter = counter + 1
	}
	if (checkbox3 == false) {
		counter = counter + 1
	}	
	if (radio3 == true) {
		counter = counter + 1
	}
	
	function passOrFail(score) {
		if (score <= 2) {
			return "You failed the test"
		}
		if (score==6) {
			return "You got 100!"
		}
		else {
			return "You passed the test"
		}
	}
	
	let paragraph = document.createElement("p");
	document.body.appendChild(paragraph);
	let x = document.createElement("p");
	x.innerHTML = counter;
	paragraph.append("Your score is:")
	paragraph.append(x)
	paragraph.append(passOrFail(counter))
}	

function displayAnswers() {
	let olist = document.createElement("ol");
	document.body.appendChild(olist);
	let li1 = document.createElement("li");
	li1.innerHTML = textanswer1;
	olist.appendChild(li1);
	let li2= document.createElement("li");
	li2.innerHTML = textanswer2;
	olist.appendChild(li2)
	let li3= document.createElement("li");
	li3.innerHTML = checkboxans1;
	olist.appendChild(li3)
	let li4= document.createElement("li");
	li4.innerHTML = checkboxans2;
	olist.appendChild(li4)
	let li5= document.createElement("li");
	li5.innerHTML = checkboxans3;
	olist.appendChild(li5)
	let li6= document.createElement("li");
	li6.innerHTML = radioans;
	olist.appendChild(li6)
}