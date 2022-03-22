function validate(formObj) {
	let check = true;  // check login status
	let emptyList = [];
	if (formObj.rcs.value != "wuk9") {
		emptyList[0] = "You must enter correct RCS ID\n";
	    formObj.rcs.focus();
	    check = false;

	}
	if (formObj.password.value != "password") {
      emptyList[emptyList.length] = "You must enter correct password\n";
      if (check) {
         formObj.password.focus();
         check = false;
      }
   }
   if (!check) {
      let result = emptyList[0];
      for (var i = 1; i < emptyList.length; i++) {
         result += emptyList[i];
      }
      alert(result);
      $('#status').css('color', 'red');
      return false;
   }
   else {
      let result = "submission received!";
      alert(result);
      $('#status').css('color', 'green');
      window.location="../index.html";
      return true;
   }
}