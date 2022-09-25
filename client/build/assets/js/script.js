$(document).ready(function() {
//Emaljs Script
  $( ".footer-email" ).on( "keyup", function() {
    var email = $(".footer-email").val();
    console.log('!!');
    if(IsEmail(email)==false){
      $(".email-tip").addClass("invalid");
      $(".email-tip").html("!Please enter valid mail").css("color", "red");
    }
    else{
      $(".email-tip").removeClass("invalid");
      $(".email-tip").html("");
    }
  });
  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
  }else{
      return true;
  }
  }
});