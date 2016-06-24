// JavaScript Document
function ab(m)
	{
		for(var i=1; i<9;i++)
		{
			if(i==m)
			{
				document.getElementById("myul"+m).style.border="1px solid red";
				}
				else
				{
					document.getElementById("myul"+i).style.border="1px solid #757575";
					}
			}
		}
		
	function aa(a)
			{
				document.getElementById(a).style.display="block";
			}
	function bb(b)
	{
				document.getElementById(b).style.display="none";
		}
		
function ae()
{
	document.getElementById("right_sp3").style.color="#FFF";
	document.getElementById("right_sp3").style.background="#FF6700";
	}
function af()
{
	document.getElementById("right_sp3").style.color="#FF6700";
	document.getElementById("right_sp3").style.background="#FFF";
	}