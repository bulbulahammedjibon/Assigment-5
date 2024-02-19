// function clickk(elementId){
// let element = document.getElementById(elementId);
// }
let SeatCount = 40;
let totalSetCount = 0;
let setAdd = document.getElementsByClassName('add-set');
// console.log(setAdd.innerText)
for (let set of setAdd) {
    set.addEventListener('click', function (e) {
        set.style.backgroundColor = 'green';

        let clickElementInnerText= set.innerText;

        SeatCount = SeatCount - 1;
        totalSetCount= totalSetCount + 1;

        setInnerText('seat-count', SeatCount);
        setInnerText('select-seat',totalSetCount);

        setInnerText('select-seat-name',set.innerText);

        // console.log(SeatCount);

        console.log(set.innerText)
    })

}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// function selectedSetName(id,){
// document.getElementById(id).innerText = 
// }