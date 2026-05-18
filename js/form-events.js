function focusFunction(element) {
    // document.getElementById('test').style.background = "lime";
    element.style.background = "lime";
}

function blurFunction(element) {
    element.style.background = "";
}

function inputFunction(element) {
    var x = element.value;
    document.getElementById('writing').innerHTML = x;
}

function changeFunction(element) {
    var x = element.value;
    document.getElementById('writing').innerHTML = x;
}

function selectFunction() {
    console.log('Hello Wolrd');
}

function submitFunction() {
    var x = document.getElementById('test').value;
    alert('Hello ' + x);
}

function invalidFunction() {
    alert('Please Enter your Email ID....')
}