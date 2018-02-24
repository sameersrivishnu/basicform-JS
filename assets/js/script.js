
function valid()
{	
var a = document.form.firstname.value;      //First Name Validations
if(a=="")
{
alert("Please enter first name ");
document.form.firstname.focus();
return false;
}
if(!isNaN(a))
{
alert("Please enter first name Correctly(Only Characters)");
document.form.firstname.select();
return false;
}
var a = document.form.lastname.value;       //Last Name Validations
if(a=="")
{
alert("Please enter last name ");
document.form.lastname.focus();
return false;
}
if(!isNaN(a))
{
alert("Please enter last name correctly(only characters)");
document.form.lastname.select();
return false;
}
var x = document.forms["form"]["email"].value;         //Email validations
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        document.form.email.select();
        return false;
    }

var val = document.form.phone.value;                      //Phone Number Validations
if (/^\d{10}$/.test(val)) {
} else {
    alert("Invalid number; must be ten digits")
    document.form.phone.select();
    return false
}
                                                           //Gender Validations
 ErrorText= "";                                            
if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )
{
alert ( "Please choose your Gender: Male or Female" );
document.form.gender[0].focus();
return false;
}
if (ErrorText= "") { form.submit() }


var cou = document.getElementById("cou");                    //Country Validations
        if (cou.value == "") {
   
            alert("Please select an option!");
            document.form.cou.focus();
            return false;
        }
        else
        {
        	alert("Successfully Submitted");

        return true;
}
}







