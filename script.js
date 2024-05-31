var islogin=false

function openlogin(){
    document.querySelector('.login-page').style.display="flex";
  closeregister();
  closemenu();
}



function closelogin(){
    document.querySelector('.login-page').style.display="none";
    console.log("login cls");
}


function openregister(){
    document.querySelector('.register-page').style.display="flex";
   
}


function closeregister(){
    document.querySelector('.register-page').style.display="none";
    
}

function registeruser(){
    if(true){
        const usernm= document.querySelector("#username");
        const phonenm=document.querySelector("#phonenm");
        const useremail=document.querySelector("#useremail");
        const password=document.querySelector("#password");
        
        localStorage.setItem("usernm",usernm.value);
        localStorage.setItem("userphonenm",phonenm.value);
        localStorage.setItem("useremail",useremail.value);
        localStorage.setItem("userpassword",password.value);
        gotoindex();
        alert("succesfully register");
        

    }
    else{
        alert("enter all detail");
    }

}

function loginuser(){
    const lngemail=document.querySelector("#lnguseremail");
    const lngpass=document.querySelector("#lngpass");
    
    
    
    if(lngemail.value==localStorage.getItem("useremail") && lngpass.value==localStorage.getItem("password")){
        gotoindex();
        alert("successfully login");
         islogin=true;
    }
    else{ alert("invailide username");}
}

function gotoindex(){
    closelogin();
    closeregister();
   const logo= document.getElementById("logo-svg")
   logo.classList.remove("ri-user-3-line");
   logo.classList.add("ri-account-pin-circle-fill");


}


// here menu code
const menudiv=document.querySelector(".menu-div");
function menu(){
    menudiv.style.right="0%";
}

function closemenu(){
    menudiv.style.right="-100%";
}

// name changing animation start frome here

const demo = document.querySelector("#change-item");


const bagTypes = ['office bags.', 'travelling bags.', 'trolley bags.', 'school bags.'];
let i = 0;
async function changeAnimation() {

    document.getElementById("change-item").textContent=bagTypes[i];
    i++;

    if (i === bagTypes.length) {
        i = 0;
    }

    setTimeout(changeAnimation, 5000);

}

changeAnimation();

// silde animation 

var currantindex = 0;
const bags = document.querySelectorAll('.bags');
console.log(bags);


bags.forEach( bags=> {
    bags.style.display='none';
});

bags[currantindex].style.display='flex';

document.querySelector("#left").addEventListener("click", function prv() {
    if (currantindex > 0) {
        bags[currantindex].style.display = "none";
        currantindex--;
        bags[currantindex].style.display = "flex";
       
    }
});
document.querySelector("#right").addEventListener("click",function next() {
    if (currantindex <3) {
        bags[currantindex].style.display = "none";
        currantindex++;
        bags[currantindex].style.display = "flex";
     
    }
})



// here add card start now 

function addcard(pid,count=1)
 {
    localStorage.setItem(`${pid}`,`${count}`);
}

function buy(pid,count=1){
    if(islogin){

        localStorage.setItem(`${pid}`,`${count}`);
        let curranturl=window.location.href.split("/index.html").join("");
        window.location.href=`${curranturl}/pages/cart.html`
    }
    else{
        openlogin();
        alert("Please Loging");
    }
}

function showpage(productnm){
    let curranturl=window.location.href.split("/index.html").join("");
    window.location.href=`${curranturl}/pages/${productnm}.html`
}



































// gsap animation start from here

const tl =gsap.timeline();


tl.from(".left-nav",{
    y:"-100%",
    duration:0.5
})

tl.from(".center-nav h5",{
    y:"-300%",
    duration:0.7
},"=0.10")

tl.from(".right-nav",{
    y:"-100%",
    duration:0.5
})


gsap.from(".left-center",{
    x:"-200%",
    duration:1.2,
    delay:0.2
  
})

gsap.from(".heading-sec",{
    x:-300,
    duration:1,
    scrollTrigger:{
        trigger:".heading-sec",
        start:"top: 700",
        scroll:"body"
    }
})

gsap.from(".detail-office",{
    x:-600,
    duration:1.2,
    scrollTrigger:{
        scroll:"body",
        trigger:".detail-office",
        start:"top: 620"
    }
})












