/* CLOCK Project */

let userName = prompt("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = userName;

function showTime() { // Zaman fonksiyonu oluşturuldu.

    let myClock = document.querySelector("#myClock");
    let date = new Date(); // Tarih nesnesi oluşturuldu.

    // JavaScript için günler Pazar'dan başlar ve bu yüzden ilk index olan 0 = Pazar
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    ${days[date.getDay()]}
    `
}
setInterval(showTime,1000); // 1000 milisaniye de yani 1 saniyede bir showTime fonksiyonu çağrılacak.