function calculateIMC() {

    const calculateBtn = document.getElementById("calculate-btn");
    const imcResult = document.getElementById("imc-result");
    const imcStatus = document.getElementById("imc-status");

    calculateBtn.addEventListener("click", () => {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);

        if (!height || !weight) {
            imcResult.textContent = "Por favor, preencha ambos os campos.";
            imcStatus.textContent = "";
            return;
        }

        // Calcula o IMC: Peso (kg) / Altura² (m)
        const imc = (weight / (height * height)).toFixed(2);

        // Exibe o resultado do IMC
        imcResult.textContent = `Seu IMC é: ${imc}`;

        // Define o status do IMC
        let status = '';
        if (imc < 18.5) {
            status = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            status = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            status = "Sobrepeso";
        } else {
            status = "Obesidade";
        }
        imcStatus.textContent = `Status: ${status}`;
    });
}

    function menuToggle(){

        const menuToggle = document.querySelector('.menu-toggle');
        const sideMenu = document.querySelector('.side-menu');
        const shadow = document.querySelector('.shadow');

        menuToggle.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            shadow.classList.toggle('active');
        });

        shadow.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            shadow.classList.toggle('active');
        });
    }


document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".side-menu ul li");
    const contentItems = document.querySelectorAll(".content-container ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menuItems.forEach(menuItem => menuItem.classList.remove("active"));
            this.classList.add("active");
            contentItems.forEach(contentItem => contentItem.classList.remove("active"));

            const refId = this.id;
            const contentToShow = document.querySelector(`.content-container ul li[data-id-ref="${refId}"]`);
            if (contentToShow) {
                contentToShow.classList.add("active");
            }
        });
    });

    calculateIMC()
    menuToggle()


});




