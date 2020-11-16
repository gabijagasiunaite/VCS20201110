//alert("as esu JS faile");
console.log("as esu konsoleje");

document.write("as esu dokumente");
var kintamojoPavadinimas = "kazkoks tekstas ";
console.log(kintamojoPavadinimas);

var masyvas = ["Vardas", 23, true, null];

//masyvas.pop();

// kaip pasalinti konkretu elementa
//masyvas.push("nauja reiksme");
//masyvas.shift();
masyvas.unshift(50);

console.log(masyvas);

//console.log( masyvas.length);

var profile = {
    firstName: "Gabija",
    lastName: "Gasiunaite",
    fullName: function (){
        return this.firstName + " " + this.lastName;

    },
    changeName: function (newFirstName){
        this.firstName = newFirstName;


    }

}
profile.changeName("Vaidas");
console.log(profile.fullName());

var paragraph = document.createElement("p");
paragraph.innerText = "tekstas idetas i elementa su JS."

document.body.prepend(paragraph);

var button2=document.querySelector("#change-img");
var i=0;
button2.addEventListener("click", function() {
    var image=document.querySelector("div.gallery img");
image.setAttribute("src", "https://picsum.photos/seed/" + Math.random() + "/150");
});
var images = document.querySelectorAll("div.gallery img");

for (var j = 0; j <images.length; j++) {
    images[j].addEventListener("click", function (event){

        event.target.setAttribute("src", "https://picsum.photos/seed/"+ Math.random()+ "/150")
        console.log(event);
    });

}