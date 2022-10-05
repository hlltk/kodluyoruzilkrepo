// document.write("hello word!")
// alert("hello word!")
// console.log("hello word!")

// ********************************************

// let fullName = "Halil Teke";
// fullName += " No middle name";
// console.log(fullName);

// const serverPassword = 123456;
// console.log(serverPassword)

// var coursName = "JS";
// console.log(coursName)


// const aWord = ("Javascriptloop");

// let a = map(aWord);
// console.log(a);

// var two  = document.getElementsByClassName("alternate");
// for (var i = 0; i < two.length; i++) { 
//     two[i].style.color  = "blue"; 
// }
// console.log(typeof(two))

// let item = document.querySelector("ul#list>li:last-child")
// item.innerHTML="Son Öğe Değişti"
// let fitem = document.querySelector("ul#list>li:first-child")
// let fitem = document.querySelector("ul#list>li:first-child").innerHTML="değişti "
// console.log(fitem)
// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement(`li`)
// liDOM.innerHTML = "Kendi oluşturduğumuz Öğe"
// ulDOM.append(liDOM)
// let parag = document.getElementById("demo")
// let listitems = document.querySelector("ul#list>li:first-child").style.color = "blue"
// let listitemslast = document.querySelector("ul#list>li:last-child").innerHTML = "son"
// // let one = document.getElementById("list").innerHTML = "soru işareti"
// let write = document.write(Date())
// console.log ( listitems, write)

// function fdate() {
//     document.querySelector("#demo").innerHTML = Date();
//   }
// let inputString;
// inputString=24
// if (inputString %2 == 0 && inputString>=1 ) {
//     if (inputString>1 && inputString<=5){console.log("Not Weird")}
//     else if (inputString>5 && inputString<=20){console.log("Weird")}
//     else if (inputString>20){console.log("Not Weird")}
//     else{console.log("Weird")}
// }
// else {console.log("Weird")}

// let result = prompt("Lütfen Aldığınız Notu Giriniz: ", "Lütfen 0 dan büyük ve 100 den küçük bir sayı giriniz")
// let a = document.querySelector("#grade")
// let text;

// if (result>=0 && result<=100){
//     a.classList.add("text-primary")

//     if (result>=90 ){text=(`Notunuz: ${result}, Harf Notunuz AA`)}

//     else if (result>=85){text=(`Notunuz: ${result}, Harf Notunuz BA`)}

//     else if (result>=80){text=(`Notunuz: ${result}, Harf Notunuz BB`)}

//     else if (result>=75){text=(`Notunuz: ${result}, Harf Notunuz CB`)}

//     else if (result>=70){text=(`Notunuz: ${result}, Harf Notunuz CC`)}

//     else if (result>=65){text=(`Notunuz: ${result}, Harf Notunuz DC`)}

//     else if (result>=60){text=(`Notunuz: ${result}, Harf Notunuz DD`)}
//     else if (result>=50){text=(`Notunuz: ${result}, Harf Notunuz FD`)}
//     else {
//         text=(`Notunuz: ${result}, Harf Notunuz FF`)
//         a.classList.remove("text-primary")
//         a.classList.add("text-danger")
// }

// }
// else{text=("Lütfen Geçerli Bir Not Giriniz!")}
// a.innerHTML= `${text}`

// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click", domClick)

// function domClick() {
//     console.log(innerHTML= "tıklandığı için bilgi değişti" ) ,
//     this.style.color="blue"
// }

// let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")):0
// let counterDOM = document.querySelector("#counter")
// let increaseDOM = document.querySelector("#increase")
// let decreaseDOM = document.querySelector("#decrease")
// counterDOM.innerHTML=counter

// increaseDOM.addEventListener("click", clickEvent)
// decreaseDOM.addEventListener("click", clickEvent)

// function clickEvent(){
// //    if (this.id =="increase"){counterDOM.innerHTML=counter+=1}
// //    else {counterDOM.innerHTML=counter-=1}

// //kısayol 
// this.id =="increase" ? counterDOM.innerHTML=counter+=1 : counterDOM.innerHTML=counter-=1
// localStorage.setItem("counter", counter)
// }
// let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

// function myFunction (dizi){
// // Kodunuzu buraya yazın.

// }

// myFunction(dizi);

function getSecondLargest(nums) {
    // Complete the function 
    const f = nums.sort().filter (function (a){
         a>1
    }) 
    return f
}
