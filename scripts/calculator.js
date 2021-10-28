function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var cHeight = parseFloat(height)/100;
    const BMI = weight * height ** 2 /100000;   // With weight in KG and height in m.

    console.log("Weight : "+weight);
    console.log("Height : "+height);
    console.log("Float Height : "+parseFloat(height));
    console.log("Convert Height : "+parseFloat(height)/100);
    console.log("BMI : "+ weight * cHeight ** 2);
    console.log("BMI : "+ weight * cHeight ** 2 /10);
    console.log("BMI : "+ weight * height ** 2);
    console.log(parseFloat(BMI));
}