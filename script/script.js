function mouseMove(event)
{
	var x = event.clientX;
	var y = event.clientY;

	console.log("x = "+x);
	console.log("y = "+y);

	var moveX = (x * -1/15);
	var moveY = (y * -1/15);


	/*var gameBackgroundA = document.getElementById("gameBackground_a_img");
	gameBackgroundA.style.left+=x/10+"px";*/

	var gameBackgroundB = document.getElementById("gameBackground_b_img");
	gameBackgroundB.style.left=moveX+"px";

	var gameBackgroundC = document.getElementById("gameBackground_c_img");
	gameBackgroundC.style.left=moveY+"px";

}

function portailPage()
{
	var a = document.getElementById("portailPage");
	var b = document.getElementById("portailB");
	if(a.style.display==="block")
	{
		a.style.display="none";
		b.style.display="none";
	}
	else
	{
		a.style.display="block";
		b.style.display="block";
		b.style.opacity="1";
		b.style.width="350px";
		b.style.marginLeft="500px";
		b.style.transform="scale(6)";
		b.style.display="block";
	}
}

/*
function chateauPage()
{
	var a = document.getElementById("chateauPage");
	if(a.style.display==="block")
	{
		a.style.display="none";
	}
	else
	{
		a.style.display="block";
	}
}*/

function arenePage()
{
	var a = document.getElementById("areneB");
	var b = document.getElementById("arenePage");
	if(a.style.display==="block")
	{
		a.style.display="none";
		b.style.display="none";
	}
	else
	{
		a.style.display="block";
		a.style.opacity="1";
		a.style.width="350px";
		a.style.marginLeft="500px";
		a.style.transform="scale(6)";
		b.style.display="block";
	}
}


function projetPage()
{
	var a = document.getElementsByClassName("projetPage")[0];
	if(a.style.display==="block")
	{
		a.style.display="none";
	}
	else
	{
		a.style.display="block";
	}
}

function videoPage()
{
	var a = document.getElementById("videoPage");
	var b = document.getElementById("video");
	if(a.style.display==="block")
	{
		a.style.display="none";
		b.pause();
	}
	else
	{
		a.style.display="block";
		b.play();
	}
}

function introText()
{
	var a = document.getElementById("introText");
	if(a.style.display==="block")
	{
		a.style.display="none";
	
	}
	else
	{
		a.style.display="block";
	}
}

function playPopup()
{
	var a = document.getElementById("videoPage");
	var b = document.getElementById("video");
	if(a.style.display==="block")
	{
		a.style.display="none";
		b.pause();
	}
	else
	{
		a.style.display="block";
		b.play();
	}
}

function marchandPage()
{
	var a = document.getElementById("marchandPage");
	if(a.style.display==="block")
	{
		a.style.display="none";
	}
	else
	{
		a.style.display="block";
	}
}

