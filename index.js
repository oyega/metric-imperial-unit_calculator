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
    if(inputOptions.value === "meter")
        if(outputOptions.value === "meter") {
            groupEl1.textContent = `${rectangle.value} meters`
        }

         if(inputOptions.value === "feet") 
            if(outputOptions.value === "feet"){
                groupEl1.textContent = `${rectangle.value} feets`
            }

          if(inputOptions.value === "meter") 
            if(outputOptions.value === "feet"){
//rectangle.value prevents conversion of empty value
                if (rectangle.value){
                //literal strings
                    groupEl1.textContent = `
                        ${rectangle.value} meters = ${(rectangle.value*3.281).toFixed(3)} feets

                            `
        }
    }

                if(inputOptions.value === "feet")
                if(outputOptions.value === "meter"){

                    if (rectangle.value){
            groupEl1.textContent = `${rectangle.value} feet = 
            ${(rectangle.value/3.281).toFixed(2)} meters`
        }
        
    }


    if(inputOptions.value === "kilogram")
        if(outputOptions3.value === "kilogram") {
            groupEl3.textContent = `${rectangle.value} kilogram`
        }

         if(inputOptions.value === "pound") 
            if(outputOptions3.value === "pound"){
                groupEl3.textContent = `${rectangle.value} pound`
            }

          if(inputOptions.value === "kilogram") 
            if(outputOptions3.value === "pound"){
//rectangle.value prevents conversion of empty value
                if (rectangle.value){
                //literal strings
                    groupEl3.textContent = `
                    ${rectangle.value} kilogram = 
                    ${(rectangle.value*2.204).toFixed(2)} pounds

                            `
        }
    }

                if(inputOptions.value === "pound")
                if(outputOptions3.value === "kilogram"){

                    if (rectangle.value){
            groupEl3.textContent = `${rectangle.value} pounds = 
                 ${(rectangle.value/2.204).toFixed(2)} kilogram
                         `
        }
    }




    if(inputOptions.value === "litre")
        if(outputOptions2.value === "litre") {
            groupEl2.textContent = `${rectangle.value} litre`
        }

         if(inputOptions.value === "galon") 
            if(outputOptions2.value === "galon"){
                groupEl2.textContent = `${rectangle.value} galon`
            }

          if(inputOptions.value === "litre") 
            if(outputOptions2.value === "galon"){
//rectangle.value prevents conversion of empty value
                if (rectangle.value){
                //literal strings
                groupEl2.textContent = `
                ${rectangle.value} liters = 
                ${(rectangle.value*0.264).toFixed(2)} gallons

                            `
        }
    }

                if(inputOptions.value === "galon")
                if(outputOptions2.value === "litre"){

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