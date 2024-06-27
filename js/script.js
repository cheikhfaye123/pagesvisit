document.addEventListener('DOMContentLoaded', (event) => {
    let contadorVisitas = localStorage.getItem('contadorVisitas');
    
    if (contadorVisitas === null) {
        contadorVisitas = 0;
    } else {
        contadorVisitas = parseInt(contadorVisitas);
    }
    
    contadorVisitas++;
    localStorage.setItem('contadorVisitas', contadorVisitas);
    document.getElementById('contadorVisitas').textContent = contadorVisitas;
    
    document.getElementById('btnReestablecer').addEventListener('click', () => {
        localStorage.setItem('contadorVisitas', 0);
        document.getElementById('contadorVisitas').textContent = 0;
    });
});
