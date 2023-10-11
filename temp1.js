function convertTemperatureRange(){
let startValue = Number(prompt("enter a starting temperature"));
let endValue = Number(prompt("Enter an ending temperature"));
let scale = prompt("Enter a scale of F or C CAPLITALIZED ONLY");
let html = document.getElementById("results");
for (let i = startValue; i <=endValue; i++){
    if (scale=== "F"){;
    let celsius = (i-32)* 5/9
    console.log(celsius);
    html.innerHTML += `<p>${celsius.toFixed(2)} C converts from ${i} F </p>`
    } else if ( scale === "c"){

        let fahrenhit = (i * 9/5) + 32
        html.innerHTML += `<p>${celsius.toFixed(2)} F converts from ${i} C </p>`
    }else{
    alert("Please enter capital F or C");
}
console.log( i,scale );
}
}
