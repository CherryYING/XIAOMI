// JavaScript Document

	
	function ina()
{
	inb();
	inc();
	ind();
	ine();
	if(inb()&&inc()&&ind()&&ine())
	{
		window.location="登录-1.html";
		}
	}
	function inb()
	{
		var b=document.my.num.value;
		if(b=="")
		{
			document.getElementById("s1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号不能为空";
			document.getElementById("s1").style.color="red";
			return false;
		}
		else if(b.length<11)
		{
			document.getElementById("s1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号只能是11位数字";
			document.getElementById("s1").style.color="red";
			return false;
		}
		else if(isNaN(b))
		{
			document.getElementById("s1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号只能是数字";
			document.getElementById("s1").style.color="red";
			return false;
		}
		else if(b.indexOf("1",0)==-1)
		{
			document.getElementById("s1").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>手机号格式不对";
			document.getElementById("s1").style.color="red";
			return false;
		}
		else
		{
			document.getElementById("s1").innerHTML="<i class='fa fa-check' aria-hidden='true'></i>手机号正确";
			document.getElementById("s1").style.color="green";
			return true;
		}
	}
	function inc() {
		var c=document.my.pwd1.value;
		if(c=="")
		{
			document.getElementById("s2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能为空";
			document.getElementById("s2").style.color="red";
			return false;
		}
		else if(c.length<8)
		{
			document.getElementById("s2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码长度不够";
			document.getElementById("s2").style.color="red";
			return false;
		}
		else if (!isNaN(c))
		{
			document.getElementById("s2").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能为纯数字";
			document.getElementById("s2").style.color="red";
			return false;
		}
		else
		{
			document.getElementById("s2").innerHTML="<i class='fa fa-check' aria-hidden='true'></i>密码格式正确";
			document.getElementById("s2").style.color="green";
			return true;
		}
	}
	function ind() {
		var d=document.my.pwd2.value;
		var x=document.my.pwd1.value;

		if(d!=x)
		{
			document.getElementById("s3").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>两次密码不一致";
			document.getElementById("s3").style.color="red";
			return false;
		}
		else if(d==""&&d==x)
		{
			document.getElementById("s3").innerHTML="<i class='fa fa-times' aria-hidden='true'></i>密码不能为空";
			document.getElementById("s3").style.color="red";
			return false;
		}
		else
		{
			document.getElementById("s3").innerHTML="<i class='fa fa-check' aria-hidden='true'></i>两次密码输入一致";
			document.getElementById("s3").style.color="green";
			return true;
		}

	}

function ine() {
	var e=document.my.yz.value;
	if(e=="")
	{

		return false;
	}
	else
	{

		return true;
	}
}
var a=60;
function yz() {
	a--;
	var y=document.getElementById("ss").innerHTML;

		document.getElementById("ss").innerHTML="重新发送（"+a+"）";
		document.getElementById("ss").style.backgroundColor="#D4D4D4";
		document.getElementById("ss").style.color="#fff";
		if(a>0)
		{
			setTimeout("yz()",1000);
		}
		else
		{
			document.getElementById("ss").innerHTML="发送手机验证码";
			document.getElementById("ss").style.backgroundColor="#FF6700";
			document.getElementById("ss").style.color="#fff";
		}


}

