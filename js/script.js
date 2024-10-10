function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    
    if (celsius === '') {
        alert("Silakan masukkan nilai Celsius.");
        return;
    }
    
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    
    // Memperbarui hasil kalkulasi di text box
    document.getElementById("calculation").value = `${celsius} °C x (9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
}

function reset() {
    document.getElementById("celsius").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("calculation").value = ''; // Reset hasil kalkulasi
}

function reverseConvert() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    
    if (fahrenheit === '') {
        alert("Silakan masukkan nilai Fahrenheit.");
        return;
    }
    
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    
    // Memperbarui hasil kalkulasi di text box
    document.getElementById("calculation").value = `${fahrenheit} °F - 32) x (5/9) = ${celsius.toFixed(2)} °C`;
}
