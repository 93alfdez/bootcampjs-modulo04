// Valor de turno
let turno: number = 0;

// Botones
const botonSiguiente = document.getElementById('turnoSiguiente') as HTMLButtonElement;

const botonAnterior = document.getElementById('turnoAnterior') as HTMLButtonElement;

const botonReset = document.getElementById('resetearTurno') as HTMLButtonElement;

// H1 de Turno
const turnoActual = document.getElementById('turnoActual') as HTMLHeadingElement;

// Input y botón para cambiar manualmente
const turnoManual = (document.getElementById('turnoManual') as HTMLInputElement);

const botonCambiarTurno = document.getElementById('cambiarTurno') as HTMLButtonElement;

// Funciones
const actualizarTurno = () => turnoActual.innerText = turno.toString().padStart(2, '0');

// Función para el cambio de turno manual y no salga NaN cuando pulsan sin poner nada
const cambiarTurno = () => {
    if (turnoManual.value !== "") {
        turno = parseInt(turnoManual.value);
        actualizarTurno();
    }
};

// Eventos
botonSiguiente.addEventListener('click', () => {
    turno++;
    actualizarTurno();
});

botonAnterior.addEventListener('click', () => {
    // Con esta comparación evito que el turno sea negativo
    turno > 0 && turno--;
    actualizarTurno();
});

botonReset.addEventListener('click', () => {
    turno = 0;
    actualizarTurno();
});


botonCambiarTurno.addEventListener('click', cambiarTurno);


// Evito que puedan meter números decimales o negativos
turnoManual.addEventListener('input', (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.includes('-') || inputValue.includes(',') || inputValue.includes('.')) {
        turnoManual.value = '';
    }
});
