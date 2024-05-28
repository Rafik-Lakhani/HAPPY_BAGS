

        function card(pid) {
            localStorage.setItem(`${pid}`, `${no}`);
            console.log("call");
            // document.querySelector(".addtocart").style.backgroundColor="var(--text-color)"
            // document.querySelector(".addtocart").style.color="var(--back-color1)"

        }

        function changeimg(imgid) {
            prvimg = document.querySelector("#mainimage").src;
            nextimg = document.querySelector(`#image${imgid}`).src;
            document.querySelector("#mainimage").src = nextimg;
            document.querySelector(`#image${imgid}`).src = prvimg;
        }

        var islogin = false

        function openlogin() {
            document.querySelector('.login-page').style.display = "flex";
            closeregister();
            closemenu();
        }



        function closelogin() {
            document.querySelector('.login-page').style.display = "none";
            console.log("login cls");
        }


        function openregister() {
            document.querySelector('.register-page').style.display = "flex";

        }


        function closeregister() {
            document.querySelector('.register-page').style.display = "none";

        }

        function registeruser() {
            if (true) {
                const usernm = document.querySelector("#username");
                const phonenm = document.querySelector("#phonenm");
                const useremail = document.querySelector("#useremail");
                const password = document.querySelector("#password");

                localStorage.setItem("usernm", usernm.value);
                localStorage.setItem("userphonenm", phonenm.value);
                localStorage.setItem("useremail", useremail.value);
                localStorage.setItem("userpassword", password.value);
                gotoindex();
                alert("succesfully register");


            }
            else {
                alert("enter all detail");
            }

        }

        function loginuser() {
            const lngemail = document.querySelector("#lnguseremail");
            const lngpass = document.querySelector("#lngpass");



            if (lngemail.value == localStorage.getItem("useremail") && lngpass.value == localStorage.getItem("password")) {
                gotoindex();
                alert("successfully login");
                islogin = true;
            }
            else { alert("invailide username"); }
        }

        function gotoindex() {
            closelogin();
            closeregister();
            const logo = document.getElementById("logo-svg")
            logo.classList.remove("ri-user-3-line");
            logo.classList.add("ri-account-pin-circle-fill");


        }


        // here menu code
        const menudiv = document.querySelector(".menu-div");
        function menu() {
            console.log("manu");
            menudiv.style.right = "0%";
        }

        function closemenu() {
            menudiv.style.right = "-100%";
        }

    