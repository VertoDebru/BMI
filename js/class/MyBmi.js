class Mybmi {
    constructor() {
        this.BMI = 0;
        this.morphology = ["Thinness","Normal","Overweight","Obesity","Severe obesity","Morbid obesity"];
        this.styleMorphology = ["grey","blue","green","yellow","orange","red"];
    }

    // Setting up calculator.
    setBMI() {
        const mySection = document.getElementById("form");
        mySection.innerHTML = `<div class="gender"><h2>Gender</h2><select><option value="Male" selected>Male</option><option value="Female">Female</option></select></div>
        <div class="age"><h2>Age</h2><input type="number" min="1" max="120" value="22" /></div>
        <div class="height"><h2>Height</h2><input id="height" type="number" min="100" max="220" value="170" /><span>cm</span></div>
        <div class="weight"><h2>Weight</h2><input id="weight" type="number" min="20" max="300" value="60" /><span>kg</span></div>`;
        // Create button for calculate BMI.
        let btnCalculate = document.createElement("button");
        btnCalculate.textContent = "Calculate";
        btnCalculate.addEventListener('click', () => {
            this.calculateBMI();
        });
        mySection.appendChild(btnCalculate);
    }

    calculateBMI() {
        let morphology = this.getResult();           // Return number of morphology.
        this.setResult(morphology);                  // Setting up result.
    }

    // Setting up result.
    setResult(morphology) {
        let bodyHtml = document.body;
        bodyHtml.className = this.styleMorphology[morphology];

        let topBox = document.getElementById("top");
        let scoreBox = topBox.getElementsByTagName("p")[0];
        scoreBox.textContent = "Your score :";

        let myTitle = topBox.getElementsByTagName("h1")[0];
        myTitle.textContent = this.BMI.toFixed(2);
        
        if(topBox.getElementsByTagName("p").length > 1 ) 
            topBox.getElementsByTagName("p")[1].remove();
        
        let myMorphology = document.createElement("p");
        myMorphology.textContent = this.morphology[morphology];
        topBox.appendChild(myMorphology);
    }

    // Update BMI & Return morphology.
    getResult() {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        this.BMI = parseFloat(weight * height ** 2 /100000);
        
        if(this.BMI <= 18.4)
            return 0;
        else if(this.BMI >= 18.5 && this.BMI < 25.0 )
            return 1;
        else if(this.BMI >= 25.0 && this.BMI < 30.0 )
            return 2;
        else if(this.BMI >= 30.0 && this.BMI < 35.0 )
            return 3;
        else if(this.BMI >= 35.0 && this.BMI < 40.0 )
            return 4;
        else if(this.BMI >= 40.0)
            return 5;
    }
}