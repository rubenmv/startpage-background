!function(){function a(a){if(void 0!=a.keyCode&&0!=a.keyCode&&13!=a.keyCode)return!1;var b=document.getElementById("searchBox").value,c="https://encrypted.google.com/search?q="+b;return window.location.href=c,!1}function b(){document.getElementById("searchBox").textContent="";var a=new Date,b=a.getHours(),c="",d="";b>=5&&12>b?(c="Good morning",d="bg/Morning.jpg"):b>=12&&17>b?(c="Good afternoon",d="bg/Afternoon.jpg"):b>=17&&21>b?(c="Good evening",d="bg/Evening.jpg"):(c="Good night",d="bg/Night.jpg"),document.getElementById("message").textContent=c,document.getElementById("container").style.backgroundImage="url('"+d+"')"}window.onload=function(){document.getElementById("searchBox").addEventListener("keyup",a),document.getElementById("searchButton").addEventListener("click",a),b()}}();