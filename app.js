let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let deg = 6;

let setWatch = () => {
    let now = new Date();
    let hh= now.getHours() * 30;
    let mm = now.getMinutes() * deg;
    let ss = now.getSeconds() * deg;
    hour.style.transform = `rotate(${hh}deg)`;
    min.style.transform = `rotate(${mm}deg)`
    sec.style.transform = `rotate(${ss}deg)`
}

setWatch();

setInterval(function(){setWatch()},1000);