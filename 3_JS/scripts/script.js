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
