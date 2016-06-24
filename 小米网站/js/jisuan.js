// JavaScript Document

function aa(m)
{
	var a=parseInt(document.getElementById("spp").innerHTML);
	if(m=="-")
	{
		var g;
		a--;
		if(a<=0){document.getElementById("bs").innerHTML=0;
		document.getElementById("spp").innerHTML=0;}
		else{
		document.getElementById("spp").innerHTML=a;
		g=a*1999;
		document.getElementById("bs").innerHTML=g;}
		
		}
		if(m=="+")
		{
			a++;
			document.getElementById("spp").innerHTML=a;
			g=a*1999;
		document.getElementById("bs").innerHTML=g;
			}
	}
	
	function bb(n)
{
	var x=parseInt(document.getElementById("ssp1").innerHTML);
	if(n=="-")
	{
		var c;
		
		x--;
		if(x<=0){document.getElementById("es").innerHTML=0;
		document.getElementById("ssp1").innerHTML=0;}
		else{
		document.getElementById("ssp1").innerHTML=x;
		c=x*8999;
		v=c;
		document.getElementById("es").innerHTML=c;}
		
		}
		if(n=="+")
		{
			x++;
			document.getElementById("ssp1").innerHTML=x;
			 c=x*8999;
		document.getElementById("es").innerHTML=c;
		
			}
	}
	
	function cc()
	{
		var d=document.my.n2.length;
		var a=document.my.i1.checked;
		if(a==true){
			for(var p=0;p<d;p++)
			{
				document.getElementsByName("n2")[p].checked=true;
				}
		
		
		}
		if(a==false)
		{
			for(var f=0;f<d;f++)
			{
				document.getElementsByName("n2")[f].checked=false;
				}
			
		
			}
		}
		function ff(j)
		{	
			var a=parseFloat(document.getElementById(j).innerHTML);
			
				var b=parseFloat(document.getElementById("sa").innerHTML);
			
			for(var c=0;c<document.getElementsByName('n2').length;c++){
				
				
				
			if(document.getElementsByName('n2')[c].checked==true)
				{
					
			document.getElementById("sa").innerHTML=a+b;
			}
			
			if(b!=0&&document.getElementsByName('n2')[c].checked==false)
			{
				document.getElementById("sa").innerHTML=b-a;
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