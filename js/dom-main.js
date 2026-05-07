var elements;

// elements = document;

// elements = document.all; // It will returns all document tag in array format
// elements = document.all[0];
// elements = document.all[10];

// elements = document.URL;
// elements = document.domain;
// elements = document.baseURI;
// elements = document.forms;
// elements = document.doctype;
// elements = document.head;
// elements = document.title;
// elements = document.body;
// elements = document.images;
// elements = document.documentElement;

// elements = document.links; // It will return all links
// elements = document.links[2];

// elements = document.getElementById('header'); // it will return id tag code

// elements = document.getElementsByClassName('list')[1];

// elements = document.getElementsByTagName('ul')[0];



/* GET Methods 
innerText (It will return text)
innerHTML (It will return HTML)
getAttribute (It will return attribute)
getAttributeNode (It will return Attribute)
Attributes (It will return Attribute)
*/

// elements = document.getElementById('header').innerText; // It will get text from target
// elements = document.getElementById('header').innerHTML; // It will get all html from the target

// elements = document.getElementById('header').getAttribute('id');
// elements = document.getElementById('header').getAttributeNode('class');
// elements = document.getElementById('header').attributes[0].value;

// elements = document.getElementById('header').innerText = "Hani";

//elements = document.getElementById('header').innerHTML = "<h1>Hani</h1>";

// elements = document.getElementById('header').setAttribute('style', 'color: yellow');
// elements = document.getElementById('header').setAttribute('class', 'abc xyz efg hani');
// elements = document.getElementById('header').removeAttribute('class');
// elements = document.getElementById('header').setAttribute('class', 'abc xyz efg hani');

// elements = document.getElementById('header').innerHTML = "<h1>Hani</h1>";
// elements = document.querySelector('#header').innerHTML = '<h1>Hani</h1>';
//elements = document.querySelector('#header').getAttribute('class');

//elements = document.querySelectorAll('#header h1')[0].innerHTML = '<h1>Mufaddal</h1>';

// elements = document.querySelector('.list'); 
// elements = document.querySelectorAll('.list')[1];

// elements = document.querySelectorAll('#header h1')[0].innerHTML = "Hani";


// How to add style in html tag 

// elements = document.querySelector('#header').style.backgroundColor = "gray";
// elements = document.querySelector('#header').style.border = "5px dotted red";
// elements = document.querySelector('#header').style.backgroundColor;

// How to get classname how to set class getElementsByTagName

// elements = document.querySelector('#header').className= 'abc xyz';
// elements = document.querySelector('#header').className;

// elements = document.querySelector('#header').classList.add('abc', 'xyz');
// elements = document.querySelector('#header').classList;
// console.log(elements);


/* New way to call event */
// document.querySelector("#header").onclick = abc;
// document.querySelector("#header").onmouseleave = abc;


/* New way to call addEventListner call external funtion*/
// document.querySelector("#header").addEventListener('click', abc);

/* New way to call addEventListner call internal funtion*/
// document.querySelector("#header").addEventListener('click', function(){
//     document.querySelector("#header").style.border = "10px dotted black";
// });

// document.querySelector("#header").addEventListener('mouseleave', abc);
// document.querySelector("#header").addEventListener('click', function() {
//     document.querySelector("#header").removeEventListener('mouseleave', abc);
// });

// function abc() {
//     document.querySelector("#header").style.backgroundColor = "green";
// }

/* Class List Methods */

/* Add classlist method added the class in targeted tag */
// document.querySelector("#header").addEventListener('click', function(){
//     this.classList.add("xyz", "lmn");
// });

/* Remove classlist method remove the class from targeted tag */
// document.querySelector("#header").addEventListener('click', function(){
//     this.classList.remove("xyz", "lmn");
// });

/* Toggel classlist method add and remove class as per event call */
// document.querySelector("#header").addEventListener('click', function(){
//     this.classList.toggle("lmn");
// });

/* Length classlist method return the Length of class */
// document.querySelector("#header").addEventListener('click', function(){
//     var a = this.classList.length;
//     console.log(a);
// });

/* Item classList method as per index we can get the class name */
// document.querySelector("#header").addEventListener('click', function(){
//     var a = this.classList.item(0);
//     console.log(a);
// });

/* Comtains ClassList method check the class exists or not and return true false */
// document.querySelector("#header").addEventListener('click', function(){
//     var a = this.classList.contains('test');
//     console.log(a);
// });