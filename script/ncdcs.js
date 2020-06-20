(function () {
  const myForm = document.forms.myform;
  const message = document.getElementById("message");
  const submit = document.getElementById("submit");
  // var inputss = document.getElementsByTagName("input");


  function addItem() {

    let visit = ""

    if (myForm.visit.checked) {
      visit = "Yes"
    } else {
      visit = "No"
    }

  
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${myForm.firstname.value} ${myForm.lastname.value}</td> 
                    <td>${myForm.email.value}</td> 
                    <td>${myForm.Gender.value}</td>
                    <td>${visit}</td>
                    <td><button class="edit">Edit</button></td>
                    <td><button class="deleteItem">Delete</button></td>`;
    const tbody = document.getElementById("tbody");

    if (submit.innerHTML === "submit") {
      tbody.appendChild(tr);

    };

    const removeData = document.getElementsByClassName('deleteItem');
    for (let i = 0; i < removeData.length; i++) {
      removeData[i].addEventListener("click", function (e) {
        e.preventDefault();
        //  if(e.target.parentElement.classList.contains('deleteItem')) {
        console.log("remove", removeData);
        let delTr = this.parentElement.parentElement;
        delTr.remove();

      })
    };

    const editData = document.getElementsByClassName("edit");

    for (let i = 0; i < editData.length; i++) {
      editData[i].onclick = function (event) {
        event.preventDefault()
        var div = this.parentElement.parentElement;
        const name = div.children[0].innerHTML.split(" ");
        const emailUpdate = div.children[1].innerHTML;
        const genderUpdate = div.children[2].innerHTML;
        const visitUpdate = div.children[3].innerHTML
        submit.innerHTML = "Update";


        updateData(name, emailUpdate, genderUpdate, visitUpdate);
        
      }
    }
  };

  function updateData(name, emailText, genderText, visitText) {
    myForm.firstname.value = name[0];
    myForm.lastname.value = name[1];
    myForm.email.value = emailText;
    myForm.Gender.value = genderText;
    if (visitText === "Yes") {
      myForm.visit.checked = true
    } else {
      myForm.visit.checked = false
    }
    // myForm.visit.checked = visitText === "Yes";
  };

  function clearInputs() {
    myForm.firstname.value = "";
    myForm.lastname.value = "";
    myForm.email.value = "";
    myForm.visit.checked = false;

  };

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (submit.innerHTML === "submit") {
      //add
      console.log('when adding item')
      if (myForm.firstname.value === "" || myForm.lastname.value === "" || myForm.email.value === "") {
        message.innerHTML = "please enter the field";
        return false;
      } else {
        // if(submit.innerHTML === "submit" && (myForm.firstname.value !== "" || myForm.lastname.value !== "" || myForm.email.value !== "")){
        message.innerHTML = "";
        addItem();
        clearInputs()
      }
    } else {
      console.log('when updating item')
      //update
      
        const allData = document.getElementById("tbody").children;
        console.log('ghjkljh', allData )
        for (let x = 0; x < allData.length; x++) {
            allData[x].children[0].innerHTML = `${myForm.firstname.value} ${myForm.lastname.value}`;
            allData[x].children[1].innerHTML = myForm.email.value;
            allData[x].children[2].innerHTML = myForm.Gender.value;
            // allData[x].children[3].innerHTML = myForm.visit.checked.visitText
            if(myForm.visit.checked){
              allData[x].children[3].innerHTML = "Yes"
            }else{
              allData[x].children[3].innerHTML = "No"
            }
        }
        submit.innerHTML = "Submit";
        clearInputs();
    }
  });

})()