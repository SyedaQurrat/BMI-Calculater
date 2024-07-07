import inquirer from 'inquirer';

async function calculateBMI() {
    // Prompt for height in feet
    let answers1 = await inquirer.prompt({
        name: "height",
        type: "number",
        message: "Insert your height in feet"
    });

    // Prompt for weight in KG
    let answers2 = await inquirer.prompt({
        name: "weight",
        type: "number",
        message: "Insert your weight in KG"
    });

    // Convert height from feet to meters (1 feet = 0.3048 meters)
    let oneMeter: number = 0.3048;
    let heightInMeters: number = answers1.height * oneMeter;

    // Get weight in KG from user input
    let weightInKg: number = answers2.weight;

    // Calculate BMI
    let bmi: number = weightInKg / (heightInMeters * heightInMeters);

    // Display BMI
    console.log(`Your BMI is ${bmi.toFixed(2)}`);

    // Determine BMI category
    if (bmi < 18.5) {
        console.log("You are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("You have a normal weight.");
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log("You are overweight.");
    } else {
        console.log("You are obese.");
    }
}

// Call the function to start BMI calculation
calculateBMI();
