// JavaScript Document
function test()
{
	var s=document.my.in1.value;
	if(s==""){
		document.getElementById("sp1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号不能为空";
		document.my.in1.select();
		document.my.in1.focus();
		return false;
		}
		else if(isNaN(s)){
			document.getElementById("sp1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号不能有字母";
			document.my.in1.select();
			document.my.in1.focus();
			return false;
			}
			else if(s.length!=11)
			{
				document.getElementById("sp1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号必须是11位";
				document.my.in1.select();
				document.my.in1.focus();
				return false;
				}
				else if(s.substr("0","1")!=1)
				{
					document.getElementById("sp1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号必须以1开头";
					document.my.in1.select();
					document.my.in1.focus();
					return false;
					}
					else{
						document.getElementById("sp1").style.color="green";
						document.getElementById("sp1").innerHTML="<i class='fa fa-check' aria-hidden='true'></i>";
						return true;
					}
	}
	function test2()
	{
		if(test())
		{
			var x=document.my.in2.value;
			if(x=="")
			{
				document.getElementById("sp2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能为空";
				document.my.in2.select();
				document.my.in2.focus();
				return false;
				}
				else if(x.length<8)
				{
				document.getElementById("sp2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能少于8位";
				document.my.in2.select();
				document.my.in2.focus();
				return false;
					}
					else  if(x.length>16)
					{
				document.getElementById("sp2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能超过16位";
				document.my.in2.select();
				document.my.in2.focus();
				return false;
						}
						else{
						document.getElementById("sp2").style.color="green";
						document.getElementById("sp2").innerHTML="<i class='fa fa-check' aria-hidden='true'></i>";
						return true;	
							}
					
			}
		}
		function login()
		{
			if(test()&&test2())
			{
				window.location="../index.html";
				}
			}
	
			
function img_a()
{
	document.getElementById("centent_img").style.opacity=0.9;
	}
	function img_b()
{
	document.getElementById("centent_img").style.opacity=0.1;
	}
	function aa()
	{
		document.getElementById("centent1").style.display="none";
		document.getElementById("centent3").style.display="block";
		
		}
		function bb()
	{
		document.getElementById("centent1").style.display="block";
		document.getElementById("centent3").style.display="none";
		
		}