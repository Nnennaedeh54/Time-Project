

let name = prompt('Please kindly enter your NAME here').toUpperCase();
let user = document.createElement('p');
document.getElementById('name').appendChild(document.createElement('p')).innerHTML = `<p><strong>Hello <em>${name}</em>, Please click CHECKTIME to display time and STOP to end display</strong></p>`
let clears;
document.getElementById('start').addEventListener('click', Time)
function Time(hour, minutes, seconds){
    let date = new Date(2019, 04, 20, hour, minutes, seconds);
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    session = 'AM';

    
    if(hour == 0) hour = 12;
    if(hour > 12){
        hour = hour - 12;
        session = 'PM';
    } 
    
    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes: minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = `${hour}:${minutes}:${seconds}${session}`


    
    document.getElementById('display').innerHTML = time
  
    clears = setTimeout(Time, 1000)
}

document.getElementById('stop').addEventListener('click',function stop(){
    clearTimeout(clears)
    document.getElementById('name').innerHTML = ''
    document.getElementById('endText').innerHTML = `<h3><p>Hello ${name}, This is not exactly what i want. I want my clock to display a fake time. Not the system time</p> <p>Please click here to see my code <button>Code</button></p></h3>`
    
})


