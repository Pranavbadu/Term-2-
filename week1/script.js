/*alert('script loded');*/
/*function print5() {
	console.log(1);
	console.log(2);
	console.log(3);
	console.log(4);
	console.log(5);
}
print5();
*/
/*function print5() {
for (var i=1; i<=10; i++)
{
	console.log(i);
}*/
var count = 0;

function chamgeHeading(){
	var pageheading = document.getElementById('pageheading');
	count++;
	if(count % 2 ==1){
		pageheading.firstChild.nodeValue = ' New Page Heading';
		pageheading.style.background ='blue';
	}
	else{
		pageheading.firstChild.nodeValue = 'Page Heading';
		pageheading.style.background ='pink';
	}
	console.log(count);
}


function myLoad() {
	var pageheading = document.getElementById('pageparagraph');
    pageparagraph.addEventListener( 'click', chamgeHeading);
}
var count = 0;

function chamgeHeading(){
	var pageparagraph = document.getElementById('pageparagraph');
	count++;
	if(count % 2 ==1){
		pageparagraph.firstChild.nodeValue = ' Clic again to go back';
		page.style.background ='blue';
	}
	else{
		pageparagraph.firstChild.nodeValue = 'Page Heading';
		pageparagraph.style.background ='pink';
	}
	console.log(count);
}


function myLoad() {
	var pageparagraph = document.getElementById('pagepageparagraph');
  	   pageparagraph.addEventListener( 'click', chamgeHeading);
}
document.addEventListener('DOMContentLoaded', myLoad);
