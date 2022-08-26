

const curentTime = () => {
    const clokTime = document.querySelector(".clock-time");
    const markingSeconds = document.querySelector(".marking-seconds");


    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //condições que coloca o 0 na frente dos números
    //caso sejam menor que dez
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    //cálculo que vai fazer o ponteiro rodar
    const ssDegress = (ss / 60) * 360;
    markingSeconds.style.transform = `rotate(${ssDegress}deg)`;

    let time = `${hh}:${mm}`;
    clokTime.innerText = time;
    setInterval(curentTime, 1000);
};

