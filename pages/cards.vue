<template>
    <div class="flight-card">
        <div class="logo-container">
            <!-- Logo de la empresa -->
            <img src="https://imgs.search.brave.com/rM8acZBPm3sfF8AxztHIJhqDGnQzCowfB2mx4AhlSnU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dHVyYW1hLmVzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEy/L2xvZ2UuanBn" alt="Logo de la empresa" class="company-logo" />
        </div>
        <div class="flight-info">
            <!-- Punto de inicio del viaje -->
            <p class="start-location">Ciudad de origen</p>
            <p class="start-location">MAD</p>
            <!-- Información sobre si es un vuelo directo -->
            <i class="mdi mdi-airplane"></i>
        </div>
        <div class="flight-info">
            <i class="mdi mdi-airplane"></i>
            <p class="direct-flight">Vuelo directo</p>
        </div>
        <div class="flight-info">
            <p class="start-location">Ciudad de destino</p>
            <p class="start-location">BCN</p>
            <i class="mdi mdi-airplane"></i>
        </div>

        <div class="price-container">
            <!-- Precio del vuelo -->
            <p class="flight-price">$500</p>
            <p class="info-ticket">Precio 1 Pasajero, Ida y Vuelta</p>

            <button class="share-button">Compartir</button>
        </div>
    </div>
</template>

<style scoped>
.flight-card {
    background-color: #ffffff; /* Color de fondo blanco */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    display: flex;
    padding: 20px;
    margin: 10px;
    border-bottom: 2px solid black;
}

.logo-container {
    margin-right: 20px;
}

.i.mdi.mdi-airplane {
    color: black;
    width: 1500px;
}

.company-logo {
    max-width: 200px; /* Ajustar el tamaño del logo según sea necesario */
}

.flight-info{
    flex-grow: 1;
    color: black;
}

.info-ticket,
.start-location {
    font-weight: bold;
    color: black;
    font-size: 25px;
}

.direct-flight {
    color: #00aaff; /* Color para indicar vuelo directo */
    font-size: 25px;
}

.flight-type {
    font-style: italic;
}

.price-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-left: 2px solid black;
}

.flight-price {
    font-size: 1.5em;
    font-weight: bold;
    color: #ff5500; /* Color del precio */
}

.share-button {
    background-color: #00aaff; /* Color del botón */
    color: #ffffff; /* Color del texto del botón */
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
