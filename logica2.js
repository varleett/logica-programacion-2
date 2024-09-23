const  promptSync  =  require ( 'prompt-sync' ) 
const  prompt  =  promptSync ( ) 

function solicitarTemperatura() {
    let celsius
    while (true) {
        celsius = prompt("Por favor, ingrese la temperatura en grados Celsius:")

       
        if (celsius === null) {
            return
        }
        
        celsius = parseFloat(celsius)
        
        if (!isNaN(celsius)) {
            break
        } else {
            alert("Entrada no válida. Por favor, ingrese un número.")
        }
    }

    convertirTemperatura(celsius);
}

function convertirTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32
    const kelvin = celsius + 273.15
}

    console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`)
    console.log(`Temperatura en Kelvin: ${kelvin.toFixed(2)} K`)