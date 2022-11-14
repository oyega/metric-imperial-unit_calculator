/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const rectangle = document.getElementById("rectangle")
const groupEl1 = document.getElementById("converter1")
const groupEl2 = document.getElementById("converter2")
const groupEl3 = document.getElementById("converter3")



convertBtn.addEventListener("click", function(){
    container()
})

function container(){
    //rectangle.value prevents conversion of empty value
    if (rectangle.value){
        //literal strings
        groupEl1.textContent = `
        ${rectangle.value} meters = 
            ${(rectangle.value*3.281).toFixed(3)} feet | ${rectangle.value} feet = 
            ${(rectangle.value/3.281).toFixed(2)} meters
            `
        groupEl2.textContent = `
            ${rectangle.value} liters = 
            ${(rectangle.value*0.264).toFixed(3)} gallons | ${rectangle.value} gallons = 
            ${(rectangle.value/0.264).toFixed(2)} liters
            `
        groupEl3.textContent = `
        ${rectangle.value} kilos = 
            ${(rectangle.value*2.204).toFixed(3)} pounds | ${rectangle.value} pounds = 
            ${(rectangle.value/2.204).toFixed(2)} kilos
            `     
            //emptied input field after pressing button
        rectangle.value = ""
    }
}
    

