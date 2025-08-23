document.getElementById("loginButton").addEventListener("click", function (e){

e.preventDefault()

const mobileNumber = 12345678910

const pinNumber= 1234

const mobileNumberValue = document.getElementById("mobile-number").value

const moblileNumberValueConverted = parseInt(mobileNumberValue)

const pinNumberValue = document.getElementById("pin-number").value

const pinNumberValueConverted = parseInt(pinNumberValue)

console.log(moblileNumberValueConverted, pinNumberValueConverted)

if(moblileNumberValueConverted === mobileNumber && pinNumberValueConverted===pinNumber){
      window.location.href="./home.html"
}
else{
    alert("invalid cradential")
}

})