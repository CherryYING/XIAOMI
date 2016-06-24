// JavaScript Document
function ee(a)
	{
		document.getElementById(a).style.display="block";
		}
		function dd(b)
		{
			document.getElementById(b).style.display="none";
			}
			var x;
function r(m)
{
	
	for(var a=1;a<5;a++)
	{
		if(a==m){
		document.getElementById("r3_p"+m).style.border="1px solid #F36701";
		var b=document.getElementById("r3_p"+m).title;
		document.getElementById("r5_p").innerHTML="小米手机5&nbsp;"+b;
		x=document.getElementById("r5_p").innerHTML;
		}
		
		else{
			document.getElementById("r3_p"+a).style.border="1px solid #DFDFDF";
			
			}
	}
	
	}
	
function r2(n)
{	
	
	for(var a=1;a<5;a++)
	{
		if(a==n){
		document.getElementById("sp1"+n).style.border="1px solid #F36701";
		document.getElementById("mage").src="images/mi5-"+n+".jpg";
		var y=document.getElementById("sp1"+n).innerText;
		
			document.getElementById("r5_p").innerHTML=x+"&nbsp;"+y;
			
		}
		
		else{
			document.getElementById("sp1"+a).style.border="1px solid #DFDFDF";
			}
	}
	
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
				 function mm()
				 {
					 window.location="jiesuan.html";
					 }