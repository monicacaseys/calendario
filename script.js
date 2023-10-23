// Variables globales
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Función para generar el calendario
function generateCalendar(year, month) {
    const calendarGrid = document.getElementById("calendar-grid");
    calendarGrid.innerHTML = ""; // Limpiar el calendario anterior
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    document.getElementById("current-month-year").textContent = `${monthNames[month]} ${year}`;

    // Generar el encabezado de días de la semana
    for (let i = 0; i < 7; i++) {
        const dayOfWeek = document.createElement("div");
        dayOfWeek.textContent = daysOfWeek[i];
        document.getElementById("days-of-week").appendChild(dayOfWeek);
    }

    // Generar las cuadrículas de los días
    for (let day = 1; day <= totalDays; day++) {
        const calendarDay = document.createElement("div");
        calendarDay.textContent = day;
        calendarGrid.appendChild(calendarDay);
    }
}

// Event listeners para los botones
document.getElementById("prev-month").addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById("next-month").addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById("select-month-year").addEventListener("click", () => {
    const selectedMonth = parseInt(prompt("Selecciona el mes (1-12):"), 10);
    if (!isNaN(selectedMonth) && selectedMonth >= 1 && selectedMonth <= 12) {
        const selectedYear = parseInt(prompt("Selecciona el año:"), 10);
        if (!isNaN(selectedYear)) {
            currentMonth = selectedMonth - 1; // Restamos 1 ya que los meses en JavaScript son 0-11
            currentYear = selectedYear;
            generateCalendar(currentYear, currentMonth);
        } else {
            alert("Año inválido. Por favor, ingresa un año válido.");
        }
    } else {
        alert("Mes inválido. Por favor, ingresa un mes válido (1-12).");
    }
});

// Generar el calendario inicial
generateCalendar(currentYear, currentMonth);
