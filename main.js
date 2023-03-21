let bills = document.getElementById('bill')
let people = document.getElementById('people')
let percent = 0

// declare and asign buttons
const btn5 = document.getElementById('n')
const btn10 = document.getElementById('10')
const btn15 = document.getElementById('15')
const btn25 = document.getElementById('25')
const btn50 = document.getElementById('50')
const customInput = document.getElementById('custom')


bills.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        document.getElementById('billperson').textContent='$'+(bills.value)
    }
})

people.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        document.getElementById('tipperson').textContent='$'+(bills.value/(people.value)).toFixed(2)
    }
})

// function btn(butn){
//     percent = Number(butn.id)
// }
if (btn5.click){
    percent = 0.05
}
else if (btn10){
    percent = 0.1
}
else if (btn15){
    percent = 0.15
}
else if (btn20){
    percent = 0.2
}
else if (btn25){
    percent = 0.25
}
else if (btn50){
    percent = 0.5
}
else{
    percent = 2
}

function btn(){
    document.getElementById('tipperson').textContent='$'+((bills.value * percent)/(people.value)).toFixed(2)
}
// The calculations:
// const billp = bills.value * percentages
//     console.log(billp)
//     document.getElementById('tipperson').textContent=billp



// document.getElementById('billperson').textContent='$'+(bills.value/(people.value)).toFixed(2)

