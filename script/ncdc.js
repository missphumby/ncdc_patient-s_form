function setUpEvents() {

    const myForm = document.forms.myform;
    const message = document.getElementById("message");
    const submit = document.getElementById("submit");
    const button2 = document.getElementsByName("Edit");





    submit.onclick = function () {
        if (myForm.firstname.value || myForm.firstname.value || myForm.email.value == "") {
            message.innerHTML = "please enter the field";
            return false;
        } else {
            message.innerHTML = ""
            return true;
        }
    };


/*
event.preventDefault();
button2.forEach(function(item, index) {
    item.onclick = function () {
    if (button2 == "open") {
        //change the text
        button2.className = "open"
        button.innerHTML = "update";
        return false;
    } else {
        button2 = ""
        button.innerHTML = "submit"
        return true;
    }
}
});

}

windows.onload(){
    setUpEvents();r
}
/*
function a(b, f, c) { //parameters
    console.log('bbbbbb', b, 'ccccccffffff', f, 'cccccccccc', c)
}

a(3, 'dsada', true, function() {

}) //arguments

//function passed as argument to another function is called callback
*/





//basic data types in JS: string, number, boolean, null, undefined, NaN
//complex data types: array[], object{}
