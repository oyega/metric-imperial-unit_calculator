/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let rectangle = document.getElementById("rectangle")
let groupEl1 = document.getElementById("converter1")
let groupEl2 = document.getElementById("converter2")
let groupEl3 = document.getElementById("converter3")
let inputEl = document.getElementById("inputOptions")
let outputEl = document.getElementById(outputOptions)
let outputEl2 = document.getElementById("outputOptions2")
let outputEl3 = document.getElementById("outputOptions3")

convertBtn.addEventListener("click", function(){
    container1()
    rectangle.value = ""
})

function container1(){
    if(inputOptions.value === "Meter")
        if(outputOptions.value === "Meter") {
            groupEl1.textContent = `${rectangle.value} meters`
        }

         if(inputOptions.value === "Feet") 
            if(outputOptions.value === "Feet"){
                groupEl1.textContent = `${rectangle.value} feets`
            }

          if(inputOptions.value === "Meter") 
            if(outputOptions.value === "Feet"){
//rectangle.value prevents conversion of empty value
                if (rectangle.value){
                //literal strings
                    groupEl1.textContent = `
                        ${rectangle.value} meters = ${(rectangle.value*3.281).toFixed(3)} feets

                            `
        }
    }

                if(inputOptions.value === "Feet")
                if(outputOptions.value === "Meter"){

                    if (rectangle.value){
            groupEl1.textContent = `${rectangle.value} feet = 
            ${(rectangle.value/3.281).toFixed(2)} meters`
        }
        
    }


    if(inputOptions.value === "Kilogram")
        if(outputOptions3.value === "Kilogram") {
            groupEl3.textContent = `${rectangle.value} kilogram`
        }

         if(inputOptions.value === "Pound") 
            if(outputOptions3.value === "Pound"){
                groupEl3.textContent = `${rectangle.value} pound`
            }

          if(inputOptions.value === "Kilogram") 
            if(outputOptions3.value === "Pound"){
//rectangle.value prevents conversion of empty value
                if (rectangle.value){
                //literal strings
                    groupEl3.textContent = `
                    ${rectangle.value} kilogram = 
                    ${(rectangle.value*2.204).toFixed(2)} pounds

                            `
        }
    }

                if(inputOptions.value === "Pound")
                if(outputOptions3.value === "Kilogram"){

                    if (rectangle.value){
            groupEl3.textContent = `${rectangle.value} pounds = 
                 ${(rectangle.value/2.204).toFixed(2)} kilogram
                         `
        }
    }


    if(inputOptions.value === "Litre")
        if(outputOptions2.value === "Litre") {
            groupEl2.textContent = `${rectangle.value} litre`
        }

         if(inputOptions.value === "Galon") 
            if(outputOptions2.value === "Galon"){
                groupEl2.textContent = `${rectangle.value} galon`
            }

          if(inputOptions.value === "Litre") 
            if(outputOptions2.value === "Galon"){
//rectangle.value prevents conversion of empty value
                if (rectangle.value){
                //literal strings
                groupEl2.textContent = `
                ${rectangle.value} liters = 
                ${(rectangle.value*0.264).toFixed(2)} gallons

                            `
        }
    }

                if(inputOptions.value === "Galon")
                if(outputOptions2.value === "Litre"){

                    if (rectangle.value){
                    groupEl2.textContent = `${rectangle.value} gallons = 
                    ${(rectangle.value/0.264).toFixed(2)} liters
                         `
        }
      }
}



// groupEl2.textContent = `
        //     ${rectangle.value} liters = 
        //     ${(rectangle.value*0.264).toFixed(3)} gallons | ${rectangle.value} gallons = 
        //     ${(rectangle.value/0.264).toFixed(2)} liters
        //     `
        // groupEl3.textContent = `
        // ${rectangle.value} kilos = 
        //     ${(rectangle.value*2.204).toFixed(3)} pounds | ${rectangle.value} pounds = 
        //     ${(rectangle.value/2.204).toFixed(2)} kilos
        //     `     
        //     //emptied input field after pressing button