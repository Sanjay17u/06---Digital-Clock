let clock = document.querySelector('.clock')
setInterval(() => {

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()

}, 1000)

// 2nd Way--------------------------------------------------------------------------------- 

// let clock = document.querySelector('.clock');

// function updateClock() {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// }


// updateClock();


// setInterval(updateClock, 1000);
