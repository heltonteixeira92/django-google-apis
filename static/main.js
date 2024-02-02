/** Used on signIn page to show password in text */
    function showPword() {
        var x = document.getElementsByClassName("password")
        for (let i = 0; i < x.length; i++){
            if (x[i].type === "password") {
                x[i].type = "text";
            } else {
                x[i].type = "password";
            }
        }
    }