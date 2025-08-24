
const validPin=1234
const validCoupon=12345
const transactionData=[]
//function to get input value
function getInputValueNumber (id) {
   const inputField = document.getElementById(id)
   const inputFieldValue = inputField.value
   const inputFieldValueNumber = parseInt (inputFieldValue)
   return inputFieldValueNumber
}
function getInputValue (id){
   const inputField = document.getElementById(id)
   const inputFieldValue = inputField.value
   return inputFieldValue
}
//function to get inner text
function getInnerText(id){
   const element = document.getElementById

   ("available-balance")

   const elementValue = element.innerText

   const elementValueNumber = parseInt(elementValue)

   return elementValueNumber
}

// function to set innerText

function setInnerText(value){
   const availableBalanceElement = document.getElementById("available-balance")
   availableBalanceElement.innerText=value
}

//function to toggle

function handleToggle(id) {
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
   form.style.display = "none"
   }
   document.getElementById(id).style.display="block"
}

//function to toggle buttons

function handleButtonToggle(id){
   const formBtns = document.getElementsByClassName("form-btn")
   for(const btn of formBtns){
   btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
   btn.classList.add("border-gray-300")
   }
   document.getElementById(id).classList.remove("border-gray-300")
   document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}
//add money feature
document.getElementById("add-money-btn").addEventListener("click", function (e){

e.preventDefault()
console.log("add money btn clicked")

const bank = getInputValue("bank");

const accountNumber = document.getElementById

("account-number").value

const amount = getInputValueNumber("add-amount")
if(amount<0){
   alert("invalid amount")
   return;
}

const pin = getInputValueNumber("add-pin")
const availableBalance = getInnerText("available-balance")

console.log(availableBalance)

if (accountNumber.length <11){
   alert("please provide valid account number")
   return;
}

if(pin !== validPin) {
   alert("Please provide valid pin number")
   return;

}

const toatalNewAvailableBalance = amount +availableBalance

setInnerText(toatalNewAvailableBalance)

const data = {
   name: "Add Money",
   date:new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)
})

//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function(e){

e.preventDefault()


const amount =getInputValueNumber("withdraw-amount")
const agentNumber = getInputValueNumber("agent-number")
const pin =getInputValueNumber("agent-pin")
const availableBalance = getInnerText("available-balance")
if(amount<=0 || amount>availableBalance){
   alert("invalid amount")
   return
}

if (agentNumber.length <11){
   alert("please provide valid account number")
   return;
}
if(pin !== validPin) {
   alert("Please provide valid pin number")
   return;

}
const totalNewAvailableBalance = availableBalance - amount

console.log(totalNewAvailableBalance)

setInnerText(totalNewAvailableBalance)
const data = {
   name: "Cash Out",
   date:new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)
})

//transfermoney feature
document.getElementById("transfer-btn").addEventListener("click", function(e){

e.preventDefault()


const amount =getInputValueNumber("transfer-amount")
const userNumber = getInputValueNumber("user-number")
const pin =getInputValueNumber("transfer-pin")
const availableBalance = getInnerText("available-balance")
if(amount<=0 || amount>availableBalance){
   alert("invalid amount")
   return
}

if (userNumber.length <11){
   alert("please provide valid account number")
   return;
}
if(pin !== validPin) {
   alert("Please provide valid pin number")
   return;

}
const totalNewAvailableBalance = availableBalance - amount

console.log(totalNewAvailableBalance)

setInnerText(totalNewAvailableBalance)
const data = {
   name: "Transfer monry",
   date:new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)
})

//bonus feature
document.getElementById("bonus-btn").addEventListener("click", function(e){
e.preventDefault()
const couponNumber = getInputValueNumber("coupon-number")
if (couponNumber.length <5){
   alert("please provide valid account number")
   return;
}
if(couponNumber !== validCoupon) {
   alert("Please provide valid pin number")
   return;

}
const data = {
   name: "Bonus coupon",
   date:new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)
})

//bill feature
document.getElementById("biller-btn").addEventListener("click", function(e){

e.preventDefault()


const amount =getInputValueNumber("biller-amount")
const billerAccount = getInputValueNumber("biller-account")
const pin =getInputValueNumber("biller-pin")
const availableBalance = getInnerText("available-balance")
if(amount<=0 || amount>availableBalance){
   alert("invalid amount")
   return
}

if (billerAccount.length <11){
   alert("please provide valid account number")
   return;
}
if(pin !== validPin) {
   alert("Please provide valid pin number")
   return;

}
const totalNewAvailableBalance = availableBalance - amount

console.log(totalNewAvailableBalance)

setInnerText(totalNewAvailableBalance)
const data = {
   name: "Bill",
   date:new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)
})


//transaction feature
document.getElementById("transactions-button").addEventListener("click",function(){
   const transactionContainer= document.getElementById("transaction-container")
   transactionContainer.innerText=""
   for(const data of transactionData){
      const div=document.createElement("div")
      div.innerHTML=`
      <div class="bg-white rounded-x1 p-3 flex justify-between items-center">
                <div class="flex items-center mt-3">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
   </div>
  `
  transactionContainer.appendChild(div)
   }
})


//toggolink

document.getElementById("add-button").addEventListener("click", function(e){
   handleToggle("add-money-parent")
   handleButtonToggle("add-button")
})

document.getElementById("cash-out-button").addEventListener("click", function(){
   handleToggle("cash-out-parent")
   handleButtonToggle("cash-out-button")
})

document.getElementById("transfer-button").addEventListener("click", function(){
   handleToggle("transfer-money-parent")
   handleButtonToggle("transfer-button")
})

document.getElementById("bonus-button").addEventListener("click", function(){
   handleToggle("get-bonus-parent")
   handleButtonToggle("bonus-button")
})

document.getElementById("bill-button").addEventListener("click", function(){
   handleToggle("pay-bill-parent")
   handleButtonToggle("bill-button")
})

document.getElementById("transactions-button").addEventListener("click", function(){
   handleToggle("transactions-parent")
   handleButtonToggle("transactions-button")
})


document.getElementById("logoutButton").addEventListener("click", function (e){

e.preventDefault()

window.location.href="./index.html"
})