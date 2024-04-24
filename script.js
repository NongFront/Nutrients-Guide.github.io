
document.getElementById('calculate1').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    const exerciseLevel = document.getElementById('exerciseLevel').value;

    let carbResult, proteinResult, fatResult, vitaminResult;

    // Calculate Carbohydrates
    if (exerciseLevel === 'light') {
        carbResult = 5 * weight;
    } else if (exerciseLevel === 'heavy') {
        carbResult = 10 * weight;
    } else {
        carbResult = 3 * weight;
    }

    // Calculate Protein
    if (exerciseLevel === 'light') {
        proteinResult = 1.2 * weight;
    } else if (exerciseLevel === 'heavy') {
        proteinResult = 2 * weight;
    } else {
        proteinResult = weight;
    }

    // Fat and Vegetable-Vitamin have fixed values
    fatResult = 400; // grams per day
    vitaminResult = 400; // grams per day

    // Display results
    document.getElementById('carbResult').textContent = `Carbohydrates needed: ${carbResult} grams per day`;
    document.getElementById('proteinResult').textContent = `Protein needed: ${proteinResult} grams per day`;
    document.getElementById('fatResult').textContent = `Fat needed: ${fatResult} grams per day`;
    document.getElementById('vitaminResult').textContent = `Vegetable-Vitamin needed: ${vitaminResult} grams per day`;




});
document.getElementById('calculate2').addEventListener('click', function() {
    // Protein
    const cookedRiceIntake = parseInt(document.getElementById('cookedRiceInput').value) || 0;
    const bananaIntake = parseInt(document.getElementById('bananaInput').value) || 0;
    const OrangeOrAppleIntake = parseInt(document.getElementById('OrangeOrAppleInput').value) || 0;
    const breadIntake = parseInt(document.getElementById('breadInput').value) || 0;
    const softDrinkIntake = parseInt(document.getElementById('softDrinkInput').value) || 0;
    const fruitJuiceIntake = parseInt(document.getElementById('fruitJuiceInput').value) || 0;
    const BubbleTeaIntake = parseInt(document.getElementById('BubbleTeaInput').value) || 0;
    const sugarIntake = parseInt(document.getElementById('sugarInput').value) || 0;
    
//Carbohydrates
    const eggIntake = parseInt(document.getElementById('eggInput').value) || 0;
    const chickenBreastIntake = parseInt(document.getElementById('chickenBreastInput').value) || 0;
    const shrimpIntake = parseInt(document.getElementById('shrimpInput').value) || 0;
    const beefIntake = parseInt(document.getElementById('beefInput').value) || 0;
    const porkIntake = parseInt(document.getElementById('porkInput').value) || 0;
    const salmonIntake = parseInt(document.getElementById('salmonInput').value) || 0;
    const soyMilkIntake = parseInt(document.getElementById('soyMilkInput').value) || 0;
    const cowMilkIntake = parseInt(document.getElementById('cowMilkInput').value) || 0;
    const yogurtIntake = parseInt(document.getElementById('yogurtInput').value) || 0;

//Fat
    const chiaSeedsIntake = parseInt(document.getElementById('chiaSeedsInput').value) || 0;
    const darkChocolateIntake = parseInt(document.getElementById('darkChocolateInput').value) || 0;
    const avocadoIntake = parseInt(document.getElementById('avocadoInput').value) || 0;
    const olivesIntake = parseInt(document.getElementById('olivesInput').value) || 0;
    const tofuIntake = parseInt(document.getElementById('tofuInput').value) || 0;

//Vitamin
    const sweetChiliIntake = parseInt(document.getElementById('sweetChiliInput').value) || 0;
    const broccoliIntake = parseInt(document.getElementById('broccoliInput').value) || 0;
    const KaleIntake = parseInt(document.getElementById('KaleInput').value) || 0;
    const spinachIntake = parseInt(document.getElementById('spinachInput').value) || 0;
    const moringaLeavesIntake = parseInt(document.getElementById('moringaLeavesInput').value) || 0;
    const orangesIntake = parseInt(document.getElementById('orangesInput').value) || 0;


    let carbResult2, proteinResult2, fatResult2, vitaminResult2;

// Calculate Carbohydrates Intake
    const cookedRiceCalories = 0.25 * cookedRiceIntake ;
    const bananaCalories = 0.25 * bananaIntake;
    const OrangeOrAppleCalories = 0.15 * OrangeOrAppleIntake;
    const breadCalories = 0.10 * breadIntake;
    const softDrinkCalories = 0.4 * softDrinkIntake;
    const fruitJuiceCalories = 0.4 * fruitJuiceIntake;
    const BubbleTeaCalories = 0.75 * BubbleTeaIntake;
    const sugarCalories = 0.15 * sugarIntake;
    
    // Calculate Protein Intake
    const eggCalories = 7 * eggIntake ;
    const chickenBreastCalories = 0.32 * chickenBreastIntake;
    const shrimpCalories = 0.24 * shrimpIntake;
    const beefCalories = 0.23 * beefIntake;
    const porkCalories = 0.3 * porkIntake;
    const salmonCalories = 0.25 * salmonIntake;
    const soyMilkCalories = 0.07 * soyMilkIntake;
    const cowMilkCalories = 0.08 * cowMilkIntake;
    const yogurtCalories = 0.13 * yogurtIntake;

    // Calculate fat Intake
    const chiaSeedsCalories = 0.3 * chiaSeedsIntake ;
    const darkChocolateCalories = 0.426 * darkChocolateIntake;
    const avocadoCalories = 14.7 * avocadoIntake;
    const olivesCalories = 0.11 * olivesIntake;
    const tofuCalories = 0.04 * tofuIntake;

    // Calculate Vitamin Intake
    const sweetChiliCalories =  0.08 * sweetChiliIntake ;
    const broccoliCalories = 0.089 * broccoliIntake;
    const KaleCalories = 0.147 * KaleIntake;
    const spinachCalories = 0.120 * spinachIntake;
    const moringaLeavesCalories = 0.141 * moringaLeavesIntake;    
    const orangesCalories = 0.532 * orangesIntake;  
    carbResult2 = cookedRiceCalories + bananaCalories  + OrangeOrAppleCalories + breadCalories + softDrinkCalories +fruitJuiceCalories + BubbleTeaCalories + sugarCalories;
    proteinResult2 = eggCalories + chickenBreastCalories + shrimpCalories + beefCalories + porkCalories + salmonCalories + cowMilkCalories + soyMilkCalories + salmonCalories +  yogurtCalories;
    fatResult2 = chiaSeedsCalories + darkChocolateCalories + avocadoCalories + olivesCalories + tofuCalories; 
    vitaminResult2 = sweetChiliCalories + broccoliCalories + KaleCalories + spinachCalories + moringaLeavesCalories + orangesCalories; 

 // Display results
    document.getElementById('carbResult2').textContent = `Carbohydrates that you eat: ${carbResult2} grams `;
    document.getElementById('proteinResult2').textContent = `Protein that you eat: ${proteinResult2} grams `;
    document.getElementById('fatResult2').textContent = `Fat that you eat: ${fatResult2} grams `;
    document.getElementById('vitaminResult2').textContent = `Vitamin that you eat: ${vitaminResult2} grams `;



	
});

