

function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    const BMI = weight * height ** 2 /100000;

    console.log(parseFloat(BMI));
}