// var exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', function (event) {
// // Button that triggered the modal
// var button = event.relatedTarget
// // Extract info from data-bs-* attributes
// var recipient = button.getAttribute('data-bs-whatever')
// // If necessary, you could initiate an AJAX request here
// // and then do the updating in a callback.
// //
// // Update the modal's content.
// var modalTitle = exampleModal.querySelector('.modal-title')
// var modalBodyInput = exampleModal.querySelector('.modal-body input')

// modalTitle.textContent = 'New message to ' + recipient
// modalBodyInput.value = recipient
// })

// fetch api

//=======================GET============================================//
fetchemp()
function fetchemp() {
  const table = document.getElementById("tableEmployee");
  table.innerHTML = "";
  fetch("http://localhost:3000/employees")
    .then((res) => res.json())
    .then((employees) => {
      console.log(employees);
      var count = 1;
      employees.forEach(data => {
        var id = data.id;

        table.innerHTML += `
      <tr class="pag">
      <td>${count}</td>
      <td><img class="profile-img" src='http://localhost:3000/employees/${data.id}/avatar' style="height: 30px; width: 47px; padding-right: 10px;">${data.salutation + ' . ' + data.firstName + " " + data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.phone}</td>
      <td>${data.gender}</td>
      <td>${data.dob}</td>
      <td>${data.country}</td>
      <td>${data.state}</td>
      <td>
      <div class="dropdown me-1">
      <button type="button" class=" dropdown-toggle " id="dropdownMenuOffset"
          data-bs-toggle="dropdown" aria-expanded="false"
          data-bs-offset="10,20">
          <span class="material-symbols-outlined">
              more_horiz
          </span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset ">
          <li><a class="dropdown-item " href="http://127.0.0.1:5500/Sample.html?id=${id}" onclick="detailsEmployee('${id}'); "><span
                      class="material-symbols-outlined edit">
                      visibility
                  </span>View Details</a></li>
          <li><a class="dropdown-item" href="#" onclick="edit('${id}')"><span
                      class="material-symbols-outlined">
                      edit
                  </span>Edit </a>
          </li>
          <li><a class="dropdown-item" href="#" onclick="delectfun('${id}')"><span
                      class="material-symbols-outlined">
                      delete
                  </span>Delete </a></li>
      </ul>
  </div>   

      </td>
    </tr>
      `
        count++;


      })
      console.log(count)
      var tr = document.getElementsByClassName("pag");
      var paginationNumber = document.getElementById("paginationNumbers");
      var display = 5;
      var flag = 1;
      var buttoncount = Math.ceil(tr.length / display);
      console.log(buttoncount);
      for (var i = 1; i <= buttoncount; i++) {
        var button = document.createElement('button');
        button.innerHTML = i;
        paginationNumber.appendChild(button);
      }
      document.getElementById('prev-button').addEventListener('click', prev);
      document.getElementById('next-button').addEventListener('click', next);
      document.getElementById('prev-button').setAttribute('disabled', true);
      function main(paginationNumber) {
        var tr = document.getElementsByClassName("pag");
        var display = 5;
        var nextpage = display * paginationNumber;
        var prevpage = display * (paginationNumber - 1);
        for (let i = 0; i < tr.length; i++) {
          tr[i].style.display = "none";
          if (i < nextpage && i >= prevpage) {
            tr[i].style.display = "table-row";
          }
        }
      }
      main(1);
      var buttonNumbers = paginationNumber.getElementsByTagName("button");
      for (let i = 0; i < buttonNumbers.length; i++) {
        buttonNumbers[i].addEventListener("click", buttonclick);
      }
      function buttonclick() {
        if (this.innerHTML == buttoncount) {
          console.log(this.innerHTML)
          document.getElementById("next-button").setAttribute("disabled", true);
          document.getElementById("prev-button").removeAttribute("disabled");
          console.log(this.innerHTML)
        }
        else if (this.innerHTML == 1) {
          console.log(this.innerHTML)
          document.getElementById("next-button").removeAttribute("disabled");
          document.getElementById("prev-button").setAttribute("disabled", true);
        }
        else {
          console.log(this.innerHTML)
          document.getElementById("prev-button").removeAttribute("disabled");
          document.getElementById("next-button").removeAttribute("disabled");
        }
        flag = this.innerHTML;
        main(flag);
      }
      function prev() {
        document.getElementById('next-button').removeAttribute('disabled');
        if (flag !== 1) {
          flag--;
        }
        if (flag == 1) {
          document.getElementById('prev-button').setAttribute('disabled', true);
        }
        main(flag);
      }
      function next() {
        document.getElementById('prev-button').removeAttribute('disabled');
        if (flag !== buttoncount) {
          flag++;
        }
        if (flag == buttoncount) {
          document.getElementById('next-button').setAttribute('disabled', true);
        }
        main(flag);
      }

    })

}







// fetchEmp()
// function fetchEmp(){
// fetch("http://localhost:3000/employees")    
//        .then((response) => response.json())
//          .then((data) => {
//              console.log(data);
//              const table = document.getElementById("tableEmployee");
//              table.innerHTML="";
//              var i=1;
//              data.forEach((data) => {
//                var id = data.id;

//                 const row = table.insertRow();
//                  const serialNumber = row.insertCell()
//                  serialNumber.innerHTML=i;

//                  const firstNameCell =row.insertCell();

//                  firstNameCell.innerHTML=`<img src="http://localhost:3000/${id}/avatar" id="input-file_${id}" > ${data.firstName +" "+ data.lastName}` 
//                  const emailCell = row.insertCell();
//                  emailCell.innerHTML=data.email;
//                  const numberCell = row.insertCell();
//                  numberCell.innerHTML=data.phone;
//                  const genderCell = row.insertCell();
//                  genderCell.innerHTML=data.gender;
//                  const dob = row.insertCell();
//                  dob.innerHTML = data.dob;

//                 const countryCell = row.insertCell();
//                  countryCell.innerHTML=data.country;
//                  const stateCell = row.insertCell();
//                  stateCell.innerHTML=data.state;                 
//                  const dot =row. insertCell();
//                 dot.innerHTML=`

//     <div class="dropdown me-1">
//     <button type="button" class=" dropdown-toggle " id="dropdownMenuOffset"
//         data-bs-toggle="dropdown" aria-expanded="false"
//         data-bs-offset="10,20">
//         <span class="material-symbols-outlined">
//             more_horiz
//         </span>
//     </button>
//     <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset ">
//         <li><a class="dropdown-item " href="http://127.0.0.1:5500/JavaScriptID/Sample.html?id=${id}" onclick="detailsEmployee('${id}');"><span
//                     class="material-symbols-outlined edit">
//                     visibility
//                 </span>View Details</a></li>
//         <li><a class="dropdown-item" href="#" onclick="edit('${id}')"><span
//                     class="material-symbols-outlined">
//                     edit
//                 </span>Edit </a>
//         </li>
//         <li><a class="dropdown-item" href="#" onclick="delectfun('${id}')"><span
//                     class="material-symbols-outlined">
//                     delete
//                 </span>Delete </a></li>
//     </ul>
// </div>           
//               `
//                 i++ 

//             })

//             // paganation





//                })



//               }






//=========================POST=====================================================//
const form = document.getElementById("save");
form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
  var salutation = document.getElementById('Salutation').value;
  console.log(salutation)
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var birthday = document.getElementById('birthday').value;
  var dob = changeformat(birthday);

  function changeformat(val) {
    const dobstore = val.split("-");
    let year = dobstore[0];
    let month = dobstore[1];
    let day = dobstore[2];
    let formattebirthday = day + "-" + month + "-" + year;
    return formattebirthday;
  }
  console.log(dob)
  var gender = document.getElementsByName('gender');
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked)
      var savegender = gender[i].value;
    console.log(savegender)
  };

  var qualification = document.getElementById('Qualifications').value;
  var email = document.getElementById('email').value;
  var phonenumber = document.getElementById('mobile').value;
  var username = document.getElementById('Username').value;
  var password = document.getElementById('inputPassword5').value;
  var address = document.getElementById('Address').value;
  var country = document.getElementById('countryid').value;
  var state = document.getElementById('inputState').value;
  var city = document.getElementById('cityid').value;
  var pinzip = document.getElementById('inputpinzip').value;
  console.log(salutation, firstName, lastName, birthday, savegender, password, qualification, email, phonenumber, username, address, country, state, city, pinzip);
 
  const server = {

    address: address,
    city: city,
    country: country,
    dob: dob,
    email: email,
    firstName: firstName,
    gender: savegender,
    lastName: lastName,
    password: password,
    phone: phonenumber,
    qualifications: qualification,
    salutation: salutation,
    state: state,
    username: username,
    pinzip: pinzip
  }

  console.log('0000000000000000000000');

  console.log(server);

  if( validateForm()){
  fetch('http://localhost:3000/employees', {
    method: 'POST', 
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(server)
  })
    .then((res) => res.json())
    .then((data) => {
     
      image_Upload(data);
      
    });

    showSuccessPopup() 
}
  



});



function image_Upload(data) {
  const imgUpload = document.getElementById("input-file")
  console.log(imgUpload,'imgUpload');
  // console.log(imgUpload.files[0],'imgUpload.files[0]');
  const formData = new FormData();
  formData.append("avatar", imgUpload.files[0]);
  console.log(formData, 'form data ');
  fetch(`http://localhost:3000/employees/${data.id}/avatar`, {
    method: "POST",
    body: formData,
  }).then((res) => {
    console.log(res);

  }).catch((error) => {
    console.log(error, "Error message");
  });
}

// function imgupload(){
//   const uploadImage = document.getElementById('input-file');
//   const formData = new FormData();
//   formData.append("avatar", uploadImage.files[0]);

//   fetch(`http://localhost:3000/employees/${id}/avatar`, {
//       method: 'POST',
//       body: formData,
//   })
// }

// deletion =================

function delectfun(id) {

  console.log(id);
  document.getElementById('popper').style.visibility = 'visible'
  const del = document.getElementById('deletid')
  del.addEventListener('click', () => {
    fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById('popper').style.visibility = 'hidden';
           delsucess()
         
         
        }
        // location.reload();
        
      })
      
  })
 
 
}

function cancel() {
  document.getElementById('popper').style.visibility = "hidden"

}



// view================================








// search

const filterInput = document.getElementById('filter');
const table = document.querySelector('.table');
const rows = table.getElementsByTagName('tr');

filterInput.addEventListener('keyup', function () {
    const filter = filterInput.value.toUpperCase();

    for (let i = 0; i < rows.length; i++) {
        const td = rows[i].getElementsByTagName('td');
        let rowMatchesSearch = false;

        for (let j = 0; j < td.length; j++) {
            const textValue = td[j].textContent || td[j].innerHTML;

            if (textValue.toUpperCase().indexOf(filter) > -1) {
                rowMatchesSearch = true;
                break; // Exit the inner loop if a match is found in this row
            }
        }

        if (rowMatchesSearch) {
            rows[i].style.display = ''; // Show the row
        } else {
            rows[i].style.display = 'none'; // Hide the row
        }
    }
});












// image

const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imgView = document.getElementById('img-view');
inputFile.addEventListener("change", uploadImage);
function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  const imgTAG = document.createElement('img');
  imgTAG.src = imgLink;
  imgView.textContent = "";
  imgView.appendChild(imgTAG);
  imgView.style.border = 0;

}


// sucess message

function showSuccessPopup() {
  document.querySelector(".modal-dialog").style.display = "none";
  var successPopup = document.getElementById("success-popup");
  successPopup.style.display = "block";
 
  // Automatically hide the popup after 3 seconds (3000 milliseconds)
  setTimeout(function() {
      successPopup.style.display = "none";
      location.reload();
  }, 1000);
  
  
}





function delsucess(){
  
  document.getElementById("popup").style.display = "block";
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
    location.reload();
});
  
}



function editsucess(){
  
  document.getElementById("soman").style.display = "block";
 document.getElementById( "editmodal-body").style.display = "none";
 
  document.getElementById("soman-edit").addEventListener("click", function() {
    
    document.getElementById("soman").style.display = "none";
    location.reload();
});
            
}




































