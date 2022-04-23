

// for gallery off w3 schools
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

//  addEventHandeler taken from w3 school - onclick
let p1 = document.querySelector(".java p:nth-of-type(1n)")
let tar = document.getElementById("target1")
tar.addEventListener("click", function () {
    p1.style.display = "block"
});

// Mouseover event
let p2 = document.querySelector(".java p:nth-of-type(2n)")
p1.parentElement.addEventListener("mouseover", function () {
    p2.style.display = "block"
});

let p3 = document.querySelector(".classList")
p3.parentElement.addEventListener("click", function () {
    p3.classList.toggle("classList")
});


// Contact form Javascript validations

function validateForm() {
    let w = document.forms["myForm"]["fname"].value;
    if (w == "") {
        alert("Name must be filled out");
        return false;
    }
    else { return true; }
}


// Taken from week 6 lab
function submitMessage() {
    x = document.getElementById("fname").value
    y = document.getElementById("phone").value
    z = document.getElementById("email").value

    let contact = []



    // Use of arrays to store literal objects when info submitted
    var customerDetails = {
        "name": "",
        "phone": "",
        "email": ""
    }


    customerDetails.name = x;
    customerDetails.phone = y;
    customerDetails.email = z;


    var myArray = [];

    myArray.push(customerDetails);

    console.log(customerDetails);
    console.log(myArray);

    // Calling a function
    validate1();
}

// Taken from week 6 lab
function validate1() {
    if (x || y || z == "") { alert("Please complete the form before submitting.") }
    else {
        alert(x + ", thank you for your details. We will be in touch via " + z + " shortly.")
    }

}





// Tests
// function check() {
//     cb = document.getElementById("checkPhone").checked = true;

//     if (cb == true) { alert("yay") }

// }

// checkboxes
// function check() {
//     let checker = document.querySelector("#checkPhone").value
//     if (checker.checked == true) {
//         alert("yah")
//     }
//     else { alert("nah") }
// }



