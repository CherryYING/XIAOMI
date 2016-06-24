// JavaScript Document
function ee(a)
	{
		document.getElementById(a).style.display="block";
		}
		function dd(b)
		{
			document.getElementById(b).style.display="none";
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
	
	function sp(i)
	{
		for( var y=1;y<6;y++){
			if(y==i){
		document.getElementById("sp"+i).style.color="#FFAC13";
		document.getElementById("nd"+i).style.display="block";
		}
		else{
			document.getElementById("sp"+y).style.color="black";
			document.getElementById("nd"+y).style.display="none";
			}
		}
		}
		
	
	
	
