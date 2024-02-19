// function clickk(elementId){
// let element = document.getElementById(elementId);
// }
let SeatCount = 40;
let totalSetCount = 0;
let phoneN = 0; 

function HIDE(){
    let Hi = document.getElementById('HIDEEE');
    // Hi.classList.add('bg-red-500');
    Hi.classList.add('hidden');
    Show();
    console.log(Hi)
}

function Show(){
    let show = document.getElementById('show');
    show.classList.remove('hidden');
}

function inputValues() {
    let phoneNum = document.getElementById('phone-number').value;
    let phoneNums = parseInt(phoneNum);
    if (typeof phoneNums === 'number' && isNaN(phoneNums) == false) {
        
        phoneN++;
        
    }

    if (totalSetCount > 0 && phoneN > 0) {
        document.getElementById('next-btn').disabled = false;

    }

    // console.log(totalSetCount)


}


console.log(phoneN)

let setAdd = document.getElementsByClassName('add-set');
// console.log(setAdd.innerText)
for (let set of setAdd) {
    set.addEventListener('click', function (e) {
        set.style.backgroundColor = 'green';

        let clickElementInnerText = set.innerText;

        SeatCount = SeatCount - 1;
        totalSetCount = totalSetCount + 1;

        setInnerText('seat-count', SeatCount);
        setInnerText('select-seat', totalSetCount);

        setInnerText('select-seat-name', set.innerText);

        // console.log(SeatCount);
        // AppnedChild('seat-class','select-seat-list')



        let seatClass = document.getElementById('seat-class').innerText;
        let seatPrice = document.getElementById('seat-price').innerText;

        console.log(seatClass);
        console.log(seatPrice);


        if (totalSetCount > 0) {

            let li = document.createElement('li');
            let p = document.createElement('p');
            let p2 = document.createElement('p2');
            let p3 = document.createElement('p3');

            p.innerText = seatClass;
            p2.innerText = seatPrice;
            p3.innerText = set.innerText;

            li.appendChild(p3);
            li.appendChild(p);
            li.appendChild(p2);

            let seatt = document.getElementById('seatt');
            seatt.appendChild(li);

            // document.getElementById('next-btn').disabled = false;

        }

        let totalCost = 550 * totalSetCount;

        if (totalSetCount > 0 && phoneN > 0) {
            document.getElementById('next-btn').disabled = false;
    
        }

        // let totalCost = document.getElementById('Total-cost');
        setInnerText('Total-cost', totalCost);
        setInnerText('Grand-Total-cost', totalCost);

        // let btn = document.getElementById('next-btn');
        // console.log('jfka');

        // if (totalSetCount === 0) {
        //     document.getElementById('next-btn').disabled = true;
        //     console.log('jf')
        // }



        // console.log(setInnerT)
    })

}

document.getElementById('next-btn').disabled = true;




function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}






















// function AppnedChild(id,parentId){
//     let createElement = document.createElement("p");
//     p.innerText = document.getElementById(id).innerText;
//     console.log(p);
//     // document.getElementById('parentId').AppnedChild(p);

// }


