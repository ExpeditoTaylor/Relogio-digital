const hours = document.getElementById('hours');
constminutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time()
{
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let se = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if ( se < 10) se = '0' + se

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = se;
})