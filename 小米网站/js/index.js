// JavaScript Document
function timer()
{
	time();
	time2();
	}
function spa(x)
{
	document.getElementById("span"+x).style.backgroundColor="#F25807";
	document.getElementById("span"+x).style.color="#FFF";
	}
	function spb(y)
{
	document.getElementById("span"+y).style.backgroundColor="#FFF";
	document.getElementById("span"+y).style.color="#F25807";
	}
function aa(a)
{	
	document.getElementById(a).style.display="block";
	}
	
function bb(b)
{
	document.getElementById(b).style.display="none";
	}
	
var i=1;
var t;
function time()
{
	
	i++
	if(i>4){i=1;}
	document.getElementById("im1").src="images/"+i+".jpg";
	for( var j=1;j<5;j++){
		if(j==i){
	document.getElementById("sp_"+j).style.backgroundColor="#FFF";}
	else{document.getElementById("sp_"+j).style.backgroundColor="#929292";}
	}
	t=setTimeout("time()",1000);
	}
	function stop1()
	{	
	i=i-1;
		clearTimeout(t);
		}
function stop2(m)
{
	
	clearTimeout(t);
	for(var x=1;x<5;x++){
		
		if(m==x){
				document.getElementById("sp_"+m).style.backgroundColor="#FFF";
				document.getElementById("im1").src="images/"+m+".jpg";
				i=x;
	}
	else
	{
		document.getElementById("sp_"+x).style.backgroundColor="#929292";
		}
		
	}
	}


	function ee(a)
	{
		document.getElementById(a).style.display="block";
		}
		function dd(b)
		{
			document.getElementById(b).style.display="none";
			}
	var x=0;		
	function time2()
	{
		
		x++;
		if(x==2)
		{
			
			if(document.getElementById("centent_3").style.display=="block")
			{
				document.getElementById("centent_3").style.display="none";
				document.getElementById("centent_2").style.display="block";
				}
				else
				{
				document.getElementById("centent_3").style.display="block";
				document.getElementById("centent_2").style.display="none";
					}
			x=0;
			}
			setTimeout("time2()",1000);
		}
		
		 
		 function top_sp()
		 {
			 document.getElementById("top_sp3").style.color="#fff";
			 document.getElementById("top_sp3").style.backgroundColor="#F25807";
			 }
			 function top_out()
			 {
			document.getElementById("top_sp3").style.color="#F25807";
			 document.getElementById("top_sp3").style.backgroundColor="#fff";
				 }
				 
//function tbspp1(m)
//{
//	document.getElementById(m).style.display="block";
//	}
//function tbspp2(n)
//{
//	document.getElementById(n).style.display="none";
//	}