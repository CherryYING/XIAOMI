// JavaScript Document
function tp()
{
	var a=document.getElementById("im").src;
	
	if(a=="file:///C:/Users/zhu/Desktop/%E5%B0%8F%E7%B1%B3%E7%BD%91%E7%AB%99/Demo/images/2.png")
	{
		document.getElementById("im").src="file:///C:/Users/zhu/Desktop/%E5%B0%8F%E7%B1%B3%E7%BD%91%E7%AB%99/Demo/images/3.png"
		}
		if(a=="file:///C:/Users/zhu/Desktop/%E5%B0%8F%E7%B1%B3%E7%BD%91%E7%AB%99/Demo/images/3.png")
	{
		document.getElementById("im").src="file:///C:/Users/zhu/Desktop/%E5%B0%8F%E7%B1%B3%E7%BD%91%E7%AB%99/Demo/images/2.png"
		}
	}
	
	function ina()
{
	if(inb()&&inc()&&ind())
	{
		window.location="登录-1.html";
		}
	}
	function inb()
	{
		
		var b=document.my.t2.value;
		if(b=="")
		{
			document.getElementById("sp2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能为空";
			document.my.t2.focus();
			document.my.t2.select();
			return false;
			}
			if(b.length!=11)
			{
				alert("手机格式不对!");
				document.my.t2.select();
				return false;
				}
				if(isNaN(b))
				{
					alert("手机号只能是纯数字!");
					document.my.t2.select();
					return false;
					}
					return true;
		
		}
		function inc()
		{
			if(inb()){
			var b=document.my.t3.value;
			if(b=="")
			{
				alert("密码不能为空!");
				document.my.t3.focus();
				return false;
				}
			 if(b.length<6)
			 {
				 alert("密码最少6位!");
				 document.my.t3.select();
				 return false;
				 }
				 if(b.length>16)
				 {
					 alert("密码不能超过16位!");
					 document.my.t3.select();
					 return false;
					 }
					 return true;
			}
			}
		function ind()
		{
			if(inc()){
			var d=document.my.t4.value;
			if(d==""||d.length!=6)
			{
				alert("验证码错误!");
				tp();
				document.my.t4.focus();
				document.my.t4.select();
				return false;
				}
				return true;
			}
		}