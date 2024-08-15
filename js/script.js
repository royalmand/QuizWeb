// ini javascript

console.log("linked success");


function formValidate() {
    let inputWeight = document.getElementById("input-weight").value;
    let inputHeight = document.getElementById("input-height").value;
    console.log(`Isi inputan berat badan: ${inputWeight}`);
    console.log(`Isi inputan tinggi badan: ${inputHeight}`);

    const weight = document.getElementById("input-weight");
    const height = document.getElementById("input-height");
    const age = document.getElementById("input-age");

    (inputWeight == '' || inputHeight == "")
        ? alert("Inputan berat badan tidak boleh kosong!")
        : result(inputHeight,inputWeight);
    
    console.log("form validation success");

    weight.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    height.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    age.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

function result(inputHeight,inputWeight) {
    let convertCmtoM = inputHeight / 100;
        let resultHeight = Math.pow(convertCmtoM, 2);
        console.log(`Hasil perhitungan pangkat: ${resultHeight}`);
        let bmiResult = inputWeight / resultHeight;
        let stringResultOne;
        let stringResultTwo;
    
        if (inputWeight / resultHeight < 18.5) {
            stringResultOne = "Anda memiliki berat badan berlebih";
            stringResultTwo = "Hasil BMI berada dibawah 18.5";
            console.log(`BMI: ${bmiResult}, Kekurangan berat badan`);
        } else if (inputWeight / resultHeight >= 18.5 && inputWeight / resultHeight <= 24.9) {
            stringResultOne = "Anda memiliki berat badan normal";
            stringResultTwo = "Hasil BMI berada diantara 18.5 - 24.9";
            console.log(`BMI: ${bmiResult}, Normal (ideal)`);
        } else if (inputWeight / resultHeight >= 25 && inputWeight / resultHeight <= 29.9) {
            stringResultOne = "Anda memiliki berat badan berlebih";
            stringResultTwo = "Hasil BMI berada diantara 25 - 29.9";
            console.log(`BMI: ${bmiResult}, Kelebihan berat badan`);
        } else if (inputWeight / resultHeight >= 30) {
            stringResultOne = "Anda masuk ke dalam kategori kegemukan (obesitas)";
            stringResultTwo = "Hasil BMI berada di 30 atau lebih";
            console.log(`BMI: ${bmiResult}, Kegemukan (obesitas)`);
        }
    
    // Insert the result into the HTML element with id "output-bmi"
    document.getElementById("output-bmi").textContent = bmiResult;

    // Insert the result into the HTML element with id "output-note"
    document.getElementById("output-note").textContent = stringResultOne;
    
    // Insert the result into the HTML element with id "output-sntce-one"
    document.getElementById("output-sntce-one").textContent = stringResultTwo;
}

