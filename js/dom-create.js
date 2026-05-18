/* createElement || createComment || createTextNode */
// var newElement = document.createElement("h1");
// var newtext = document.createTextNode("Hello I am Rahil Shaikh");
// var newComment = document.createComment("This is comments");

/* AppendChild */

var heading = document.createElement('h2');
var headingtext = document.createTextNode('Hello My name is Rahil Shaikh Abdul Majid');

heading.appendChild(headingtext);

var headingcomment = document.createComment('This is comments');
// document.querySelector('#test').appendChild(heading);
// document.querySelector('#test').appendChild(headingcomment);
var target = document.querySelector('#test');
// document.querySelector('#test').appendChild(heading);
// document.querySelector('#test').insertBefore(heading, target.childNodes[0]);

console.log(target);
// console.log(headingtext);