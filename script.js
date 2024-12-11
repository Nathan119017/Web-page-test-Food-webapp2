document.addEventListener('DOMContentLoaded', () => {
    const restaurantButton = document.querySelector('.categories button:nth-child(1)');

    // Redireccionar al hacer clic en el botón "Restaurantes"
    restaurantButton.addEventListener('click', () => {
        window.location.href = 'pagina_restaurantes.html'; // Reemplaza con la URL deseada
    });
});