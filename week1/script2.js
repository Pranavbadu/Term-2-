function getContent() {
	var content =document.getElementById('myContent').value;
	document.getElementById('display').innerHTML = content;
}
function myLoad() {
	var content = document.getElementById('myContent');
  	  content.addEventListener( 'keyup', getContent);
}
document.addEventListener('DOMContentLoaded', myLoad);
