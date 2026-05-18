/* ParentElement it will check the parent elements have or not */
// var c = document.querySelector("#inner").parentElement.style.background = "skyblue";

/* Checked inner parentElement */
// var c = document.querySelector("#inner").parentElement;

/* Checked outer parentElement */
// var c = document.querySelector("#outer").parentElement;

/* Checked body parentElement */
// var c = document.body.parentElement;

/* Checked main parentElement */
// var c = document.querySelector("#main").parentElement;

/* Checked  parentNode */
// var c = document.querySelector("#main").parentNode;


/* Checked child-c parentElement */
// var c = document.querySelector("#child-C").parentNode;

/* Checked child-e parentElement */
// var c = document.querySelector("#child-E").parentNode;
// console.log(c);

/* Children and ChildNode */
// document.querySelector('#outer').children[0].style.background = "red";
// var c = document.querySelector('#inner').children[1].style.background = "red";
// var d = document.querySelector('#inner').childNodes[7].style.background = "green";
// console.log(d);

/* FirstChild & LastChild and FirstElements & LastElements */

// var a = document.querySelector('#inner').firstElementChild.style.background = "red";
// var a = document.querySelector('#inner').lastElementChild.style.background = "red";

// var a = document.querySelector('#inner').firstChild;
// var a = document.querySelector('#inner').lastChild;

/* nextElementSibling  */
// document.querySelector("#child-C").nextElementSibling.style.background = 'red';
// var a = document.querySelector("#child-C").nextElementSibling;

/* previousElementSibling  */
// document.querySelector("#child-C").previousElementSibling.style.background = 'red';
// var a = document.querySelector("#child-C").previousElementSibling;

/* nextSibling  */
// var a = document.querySelector("#child-C").nextSibling;

/* previousSibling  */
// var a = document.querySelector("#child-C").previousSibling;

/* InsertAdjacentElement */
// var newElement = document.createElement('h1');
// var newText = document.createTextNode("Hello Wolrd, My name is Shaikh");

// newElement.appendChild(newText);

// var target = document.getElementById('adjacent');
// target.insertAdjacentElement("afterbegin", newElement);


/* InsertAdjacentHTML */
// var newElement = "<h1> Hello Wolrd, My name is Rahil Shaikh</h1>";

// var target = document.getElementById('adjacent');

// target.insertAdjacentHTML('beforebegin', newElement);


/* InsertAdjacentText */

// var newText = "Hello My name is Rahil Shaikh";

// var target = document.getElementById('adjacent');

// target.insertAdjacentText('afterbegin', newText);


/* ReplaceChild and RemoveChild */

// var newElement = document.createElement('li');
// var newText = document.createTextNode("Badam Mengo");
// newElement.appendChild(newText);

// var target = document.getElementById("fruits-list");
// var oldText = target.children[1];
// console.log(oldText);
// target.replaceChild(newElement, oldText);
// target.removeChild(oldText);


/* CloneNode */

// var target = document.getElementById('fruits-list').children[1];
// var copyElement = target.cloneNode(true);

// console.log(copyElement);

// document.getElementById('vagitable').appendChild(copyElement);


/* Cotains */

// var parentElement = document.getElementById('test');
// var target = document.getElementById('paragraph');

// var result = parentElement.contains(target);

// console.log(result);


/* Hasattribute and HasChildNode */

// var target = document.getElementById('test');
// var find = target.hasAttribute('data-rahil');

// var target = document.getElementById('test');
// var find = target.hasChildNodes(target);

var test1 = document.querySelector('.list-1').children[2];
var test2 = document.querySelector('.list-2').children[2];

var equal = test1.isEqualNode(test2);
console.log(equal);