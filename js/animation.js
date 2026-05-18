var a = 0;
var anim = setInterval(rahil, 300);

function rahil() {
    a = a + 10;
    if (a == 100) {
        document.getElementById('test').style.background = 'lime';        
    }else{
        document.getElementById('test').style.marginTop = a + 'px';
    }

    if (a == 200) {
        clearInterval(anim);
    }else {
        document.getElementById('test').style.marginLeft = a + 'px';
    }
}