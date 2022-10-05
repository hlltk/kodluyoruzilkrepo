let ulDOM = document.querySelector("#list") // unordered liste elemanına ulaş
let task = document.querySelector("#task") // input(placeholder) elemanına ulaş
let btn = document.querySelector("#liveToastBtn") // butona ulaş
//let val = localStorage.getItem("do") //localStorage daki değeri al

//btn.addEventListener("click", theValue) // butona tıkladığında theValue fonksiyonunu çalıştır


function newElement() {
    if(task.value===""){ //Girilen değeri kontrol et eğer boşsa alert ver
        alert("Lütfen yazı yazınız")
    }
    else{
        addElement() // Girilen bilgi doğruysa addElement fonksiyonunu çalıştır
    }
}

// Yeni liste oluştur
function addElement(){
    let liDOM = document.createElement("li") // liste elemanı oluştur
    ulDOM.append(liDOM) // liste elemanını en sona ekle
    liDOM.innerHTML = task.value // input kısmına giren değeri listeye yazdır
}

// Inputa girilen değeri localStorag a kaydet
// function theValue(event) {
//     event.preventDefault() // 
//     localStorage.setItem("do", task.value) // inputa girilen değeri kaydet
// }