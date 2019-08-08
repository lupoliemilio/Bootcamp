// Forskellen på 03a og og 03b er at løkken bliver pakket ind i en funktion, som tager et array som argument. Arrayet bruges i funktionen til at udskrive de enkelte li'er.

// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	// Opretter et array med 3 strings
	// De får pladserne 0, 1, 2  (index)
	let navne = [
		"Mickey",  // index 0
		"Anders",  // index 1
		"Fedtmule" // index 2
	];

	// Tager fat i <ul> elementet
	let listElement = document.querySelector ("#liste");

	// [Udenad?]: Du behøver ikke at kunne skrive forEach'en udenad,
	// men du skal kunne fortælle os, at det ville være oplagt at bruge
    // forEach til at gøre noget med hvert element inden i et array
    
    // bruge ikke specifikke navne til funktioner og argumemnter, da det mindsker genbrugeligheden
    function listCreator (array) {
        array.forEach ((item) => {
            listElement.innerHTML += "<li>" + item + "</li>";
        }); // afslutter forEach
    }
	
    // kald funktionen
    listCreator(navne);


}); // Afslutter: DOMContentLoaded