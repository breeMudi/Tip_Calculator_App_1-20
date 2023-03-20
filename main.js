let bills = document.getElementById('bill')
let people = document.getElementById('people')
let perText = document.getElementsByClassName('normalbtn').textContent
let percentages = 0

people.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        document.getElementById('billperson').textContent='$'+(bills.value/(people.value)).toFixed(2)
    }
})



// bills.addEventListener('keyup', (e) => {
//     if e.keycode === 
// })
function btn() {
    let perText = document.getElementsByClassName('normalbtn').textContent
    if (perText == '5%'){
        percentages = 0.05
    }
    else if (perText == '10%') {
        percentages = 0.1
    }
    else if (perText == '15%') {
        percentages = 0.15
    }
    else if (perText == '25%') {
        percentages = 0.25
    }
    else if (perText == '50%') {
        percentages = 0.5
    }
    else{
        percentages = 2
    }
    const billp = bills.value * percentages
    console.log(billp)
    document.getElementById('tipperson').textContent=billp
}

// if(){

// }

// bills.addEventListener('keyup', (e) => {
//     if (e.keyCode == 13){
//         document.getElementById('billperson').textContent=bills.value
//     }
// })



// if (bill){
//     alert('your bill is ' + bill)
// } 
// const percentages = [{order:10}, {order:15}, {order:20}]