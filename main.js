const bill = document.getElementById('bill')
const people = document.getElementById('people')
let billPerson = document.getElementById('billperson')
let tipPerson = document.getElementById('tipperson')
let custom = document.getElementById('custom')

// declare and asign value placeholders
let bill_record = 0
let numberOfPeople = 0
let perc = 0


bill.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        bill_record = bill.value   
        console.log(bill_record)     
    }
})

people.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        numberOfPeople = people.value
        console.log(numberOfPeople)
        document.getElementById('warning').textContent = " "
    }
})

custom.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        perc = (custom.value) / 100
        console.log('custom percentages '+perc)
        calculation()
    }
})

function calculation (){
    if (numberOfPeople > 0) {
    document.getElementById('warning').textContent = " "
    const billPerPerson = bill_record / numberOfPeople
    const tipPerPerson = billPerPerson * perc
    const finalBill = billPerPerson + tipPerPerson
    console.log(finalBill)
    tipPerson.textContent='$'+(tipPerPerson).toFixed(2)
    billPerson.textContent='$'+(finalBill).toFixed(2)
    console.log(tipPerson)
    console.log(billPerson)
    }
    else{
        console.log("Can't be zero")
        document.getElementById('warning').textContent = "Can't be zero"
    }
}

function b1 () {perc = 0.05; calculation()}
function b2 () {perc = 0.10; calculation()}
function b3 () {perc = 0.15; calculation()}
function b4 () {perc = 0.25; calculation()}
function b5 () {perc = 0.50; calculation()}

function resets () {
    console.log('bill record before is' + bill_record)
    billPerson.textContent='$0.00'
    tipPerson.textContent='$0.00'
    bill_record=0
    numberOfPeople=0
    perc=0
    console.log('bill record is' +bill_record)
    bill.value = ''
    people.value = ''
    custom.value = ''
    document.getElementById('warning').textContent = " "
}
