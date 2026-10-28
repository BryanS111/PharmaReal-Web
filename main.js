document.getElementById("calcular").onclick = calcularPeso;

function calcularPeso() {
    var edad = document.getElementById("edad").value;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var sexo = document.getElementById("sexo").value;
    var resultado = document.getElementById("resultado");
    var pesoIdeal;
    var diferencia;
    var recomendacion;

    if (edad === "" || estatura === "" || peso === "" || sexo === "") {
        resultado.innerHTML = "Por favor, completa todos los datos.";
        resultado.className = "resultado mostrar";
        return;
    }

    if (edad < 1 || edad > 120) {
        resultado.innerHTML = "La edad debe estar entre 1 y 120 años.";
        resultado.className = "resultado mostrar";
        return;
    }

    if (estatura < 100 || estatura > 250) {
        resultado.innerHTML = "La estatura debe estar entre 100 y 250 cm.";
        resultado.className = "resultado mostrar";
        return;
    }

    if (peso < 1 || peso > 500) {
        resultado.innerHTML = "El peso debe estar entre 1 y 500 kg.";
        resultado.className = "resultado mostrar";
        return;
    }

    if (sexo === "masculino") {
        pesoIdeal = 50 + (0.9 * (estatura - 152.4));
    } else {
        pesoIdeal = 45.5 + (0.9 * (estatura - 152.4));
    }

    if (peso >= pesoIdeal - 0.5 && peso <= pesoIdeal + 0.5) {
        diferencia = 0;
        recomendacion = "Tu peso actual coincide aproximadamente con el peso ideal estimado.";
    } else {
        if (peso < pesoIdeal) {
            diferencia = pesoIdeal - peso;
            recomendacion = "Te encuentras por debajo del peso ideal estimado y deberías subir aproximadamente " + diferencia.toFixed(1) + " kg.";
        } else {
            diferencia = peso - pesoIdeal;
            recomendacion = "Te encuentras por encima del peso ideal estimado y deberías bajar aproximadamente " + diferencia.toFixed(1) + " kg.";
        }
    }

    resultado.innerHTML = "<strong>Resultado</strong>" +
        "<br>Peso actual: " + peso + " kg" +
        "<br>Peso ideal estimado: " + pesoIdeal.toFixed(1) + " kg" +
        "<br>Diferencia de peso: " + diferencia.toFixed(1) + " kg" +
        "<br>Recomendación: " + recomendacion;
    resultado.className = "resultado mostrar";
}
