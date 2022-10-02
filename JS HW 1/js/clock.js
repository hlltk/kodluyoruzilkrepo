let firstName = prompt("Lütfen İsminizi Giriniz", "Halil")
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
let getname = document.querySelector("#myName")
getname.innerHTML = firstName

const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const d = new Date();
let day = weekday[d.getDay()];

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock").innerHTML = ` ${h} : ${m} : ${s} - ${day} `;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
