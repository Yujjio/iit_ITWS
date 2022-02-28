/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements
   let check = true;
   const emptyList = [];
   if (formObj.firstName.value == "") {
      emptyList[0] = "You must enter a first name\n";
      formObj.firstName.focus();
      check = false;

   }
   if (formObj.lastName.value == "") {
      emptyList[emptyList.length] = "You must enter a last name\n";
      if (check) {
         formObj.lastName.focus();
         check = false;
      }
   }
   if (formObj.title.value == "") {
      emptyList[emptyList.length] = "You must enter a Title\n";
      if (check) {
         formObj.title.focus();
         check = false;
      }
   }
   if (formObj.org.value == "") {
      emptyList[emptyList.length] = "You must enter a Organization name\n";
      if (check) {
         formObj.org.focus();
         check = false;
      }
   }
   if (formObj.Nickname.value == "") {
      emptyList[emptyList.length] = "You must enter a Nickname\n";
      if (check) {
         formObj.Nickname.focus();
         check = false;
      }
   }
   if (formObj.comments.value == "" || formObj.comments.value == "Please enter your comments") {
      emptyList[emptyList.length] = "You must enter a Comment";
      if (check) {
         formObj.comments.focus();
         check = false;
      }
   }
   if (!check) {
      let result = emptyList[0];
      for (var i = 1; i < emptyList.length; i++) {
         result += emptyList[i];
      }
      alert(result);
      return false;
   }
   if (check) {} {
      let result = "submission received!";
      alert(result);
      return true;
   }
}

function check() {
   let equal = document.getElementById("firstName").value;
   equal += ' ';
   equal += document.getElementById("lastName").value;
   equal += " is ";
   equal += document.getElementById("Nickname").value;
   alert(equal);
}

// function button_detail(formObj) {
//    alert(formObj.firstName.value + " " + formObj.la .value + "=" formObj.Nickname.value);
//    return 0;
// }