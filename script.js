var _ = require('lodash');

var arraysss = [1,2,3,4,5,5,6,6,7,7,];

console.log('answer', _.without(arraysss, 3))

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var delbtn = document.getElementsByClassName('delete')


// What i am trying to do is to create a way to check off items of the list by adding a del button
// This button will automatically deleete items of the list once clicked so think about it

function delclick(event){
	if(event.target.classList.contains('delete')){
		event.target.closest('li').remove();
	}

}


function inputLen(){
	return input.value.length;
}

function createList(){
	var li = document.createElement('li')

	//  Create Del Button 
	var butt = document.createElement('button');
	butt.classList.add('delete')
	butt.appendChild(document.createTextNode('del'))
	li.appendChild(document.createTextNode(input.value))
	li.appendChild(butt)
	ul.appendChild(li)
	input.value = ''
}

function clickbait(){
	if (inputLen() > 0) {
		createList();
	}
}

function buttonbait(event){
	if (inputLen()>0 && event.keyCode === 13) {
		createList()
	}
}

button.addEventListener('click', clickbait);

input.addEventListener("keypress", buttonbait);

ul.addEventListener("click", delclick);