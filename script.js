//javascript for Blog of Life
function blogEntry(){
	var date;
	var message;
	var name;

	this.setDate=setDate;
	this.setBlogger= setBlogger;
	this.setMessage=setMessage;
	this.showBlog=showBlog;

	function setDate(){
		var d= new Date();
		var year= d.getFullYear();
		var month= d.getMonth();
		var day= d.getDate();
		date= day +" - "+ month + "- "+ year;
	}

	function setBlogger(nameVal){
		name= nameVal;
	}

	function setMessage(messageVal){
		message=messageVal;
	}

	function showBlog(){
		var para = document.createElement("p");
		var count= document.getElementsByTagName("p").length;
		para.setAttribute("id","para" + count);

		var aBr=document.createElement("br");
		var aBold=document.createElement("b");
		var divObj=document.getElementById("div1");

		divObj.appendChild(para);
		var txt1= document.createTextNode("Posted  by "+ name+ " on ");
		var txt2= document.createTextNode(date);
		var txt3=document.createTextNode(message);

		para.appendChild(txt1);
		para.appendChild(txt2);

		aBold.appendChild(aBr);
		para.appendChild(aBold);
		aBold.appendChild(txt3);
		para.appendChild(aBold);

		//alert(document.getElementById("para"+count).HTML);

	}	

}

function addBlog(){
	message=document.getElementById("text").value;
	bloggername= document.getElementById("name").value;
	var blog= new blogEntry();
	blog.setMessage(message); 
	blog.setBlogger(bloggername);
	blog.setDate();
	blog.showBlog();
}

function reset(){
	message=document.getElementById("text").reset();

}
function clear(){
	var m = document.getElementById("div1");
	console.log(m);

}