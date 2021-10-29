function calculate() {
    var description = ["Thinness","Normal","Overweight","Obesity","Severe obesity","Morbid obesity"];
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    const BMI = parseFloat(weight * height ** 2 /100000);
    var result = 0;
    var tagBody = document.getElementsByTagName("body")[0];
    var tagP = document.getElementsByTagName("p");
    var tagH1 = document.getElementsByTagName("h1")[0];
    var tagSelect = document.getElementsByTagName("select")[0];
    var tagOption = document.getElementsByTagName("option");
    var tagInput = document.getElementsByTagName("input");
    var tagSpan = document.getElementsByTagName("span");
    var tagButton = document.getElementsByTagName("button")[0];
    console.log(BMI);
    if(tagP[1]) {
        tagP[1].remove();
    }
    var p = document.createElement("p");
    tagP[0].innerHTML = "Score :";
    tagH1.innerHTML = BMI.toFixed(2);
    document.getElementById("top").appendChild(p);
    if(BMI <= 18.4) {
        console.log("grey");
        result = 0;
        tagBody.className = "grey";
        tagSelect.style.color = "#FFF";
        for(let i = 0; i <tagOption.length; i++)
            tagOption[i].style.backgroundColor = "var(--result0)";
        for(let i = 0; i <tagInput.length; i++)
            tagInput[i].style.color = "#FFF";
        for(let i = 0; i<tagP.length; i++)
            tagP[i].style.color = "#999";
        for(let i = 0; i <tagSpan.length; i++)
            tagSpan[i].style.color = "#FFF";
    }
    else if(BMI >= 18.5 && BMI < 25.0 ) {
        console.log("blue");
        result = 1;
        tagBody.className = "blue";
        tagSelect.style.color = "#FFF";
        for(let i = 0; i <tagOption.length; i++)
            tagOption[i].style.backgroundColor = "var(--result1)";
        for(let i = 0; i <tagInput.length; i++)
            tagInput[i].style.color = "#FFF";
        for(let i = 0; i<tagP.length; i++)
            tagP[i].style.color = "#DDD";
        for(let i = 0; i <tagSpan.length; i++)
            tagSpan[i].style.color = "#FFF";
    }
    else if(BMI > 25.0 && BMI < 30.0 ) {
        console.log("green");
        result = 2;
        tagBody.className = "green";
        tagSelect.style.color = "#AAA";
        for(let i = 0; i <tagOption.length; i++)
            tagOption[i].style.backgroundColor = "var(--result2)";
        for(let i = 0; i <tagInput.length; i++)
            tagInput[i].style.color = "#AAA";
        for(let i = 0; i<tagP.length; i++)
            tagP[i].style.color = "#999";
        for(let i = 0; i <tagSpan.length; i++)
            tagSpan[i].style.color = "#AAA";
    }
    else if(BMI >= 30.0 && BMI < 35.0 ) {
        console.log("yellow");
        result = 3;
        tagBody.className = "yellow";
        tagSelect.style.color = "#AAA";
        for(let i = 0; i <tagOption.length; i++)
            tagOption[i].style.backgroundColor = "var(--result3)";
        for(let i = 0; i <tagInput.length; i++)
            tagInput[i].style.color = "#AAA";
        for(let i = 0; i<tagP.length; i++)
            tagP[i].style.color = "#999";
        for(let i = 0; i <tagSpan.length; i++)
            tagSpan[i].style.color = "#AAA";
    }
    else if(BMI >= 35.0 && BMI < 40.0 ) {
        console.log("orange");
        result = 4;
        tagBody.className = "orange";
        tagSelect.style.color = "#FFF";
        for(let i = 0; i <tagOption.length; i++)
            tagOption[i].style.backgroundColor = "var(--result4)";
        for(let i = 0; i <tagInput.length; i++)
            tagInput[i].style.color = "#FFF";
        for(let i = 0; i<tagP.length; i++)
            tagP[i].style.color = "#DDD";
        for(let i = 0; i <tagSpan.length; i++)
            tagSpan[i].style.color = "#FFF";
    }
    else if(BMI >= 40.0) {
        console.log("red");
        result = 5;
        tagBody.className = "red";
        tagSelect.style.color = "#FFF";
        for(let i = 0; i <tagOption.length; i++)
            tagOption[i].style.backgroundColor = "var(--result5)";
        for(let i = 0; i <tagInput.length; i++)
            tagInput[i].style.color = "#FFF";
        for(let i = 0; i<tagP.length; i++)
            tagP[i].style.color = "#DDD";
        for(let i = 0; i <tagSpan.length; i++)
            tagSpan[i].style.color = "#FFF";
    }
    setTimeout(function() {p.innerHTML = description[result];}, 1500);
    tagButton.style.backgroundImage = "linear-gradient(0deg, #CCC, #FFF)";
}