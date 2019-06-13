
    var attempt = 3; // Variable to count number of attempts.

    function validate(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if ( username == "User" && password == "test"){
           // alert ("Login successful");
            /*window.sessionStorage.setItem('uname', 'User');
            window.sessionStorage.setItem('loggedin', 'yes');*/
            window.localStorage.setItem('uname', 'User');
            window.localStorage.setItem('loggedin', 'yes');
            window.location = "details.html"; // Redirecting to other page.
            return false;
        }
        else if(username == "" || password == ""){
            alert("Please provide your Username and password");
        }
        else{
            attempt --;// Decrementing by one.
            alert("You have left "+attempt+" attempt;");
            // Disabling fields after 3 attempts.
            if( attempt == 0){
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    }