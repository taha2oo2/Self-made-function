<html>
<input type="text" id="text1">
<button type="button" onmouseover="button()"  >Enter</button>
</body>
</html>
function button(){
 var a = document.getElementById("text1");
 alert(a.value);
 console.log(a.value);
}
