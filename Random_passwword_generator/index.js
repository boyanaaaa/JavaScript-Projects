const btn = document.querySelector('.btn');
const inputEl = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
    createPass()
})

copyIcon.addEventListener("click", ()=> {
    copyPassword();
    if(inputEl.value){
        alertContainer.classList.remove('active');
        setTimeout(() =>{
            alertContainer.classList.add('active');
        }, 2000)
    }

})


function createPass(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomPass = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPass, randomPass + 1);
    }
    inputEl.value = password;
    alertContainer.innerText = password + " copied!";
}


function copyPassword() {
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
    
   

}