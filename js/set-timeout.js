var a = setTimeout(function(){
    var target = document.getElementById('test');
    target.style.width = '500px';
    target.style.background = 'pink';
}, 3000);


function stopFunction() {
    var target = document.getElementById('test');
    target.style.background = 'red';
    clearTimeout(a);
}