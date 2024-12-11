// Base de datos de vehículos
const vehiculos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    años: [2019, 2020, 2021],
    hp: 169,
    bolsasDeAire: 6,
    precio: 20000,
    imagen: "img/corolla.webp"
  },
  {
    marca: "Honda",
    modelo: "Civic",
    años: [2018, 2019, 2020],
    hp: 180,
    bolsasDeAire: 6,
    precio: 22000,
    imagen: "img/civic.png"
  },
  {
    marca: "Ford",
    modelo: "Focus",
    años: [2017, 2018, 2019],
    hp: 160,
    bolsasDeAire: 4,
    precio: 19000,
    imagen: "img/focus.png"
  },
  {
    marca: "Mazda",
    modelo: "Mazda3",
    años: [2019, 2020, 2021],
    hp: 186,
    bolsasDeAire: 6,
    precio: 23000,
    imagen: "img/mazda3.png"
  },
  {

  marca: "Ford",
  modelo: "Mustang GT",
  años: [2019, 2020, 2021],
  hp: 450, 
  bolsasDeAire: 6,  precio: 27000, 
  imagen: "img/mustang.png"
  }
];

// Función para cargar los vehículos en los selects
// Función para cargar los vehículos en los selects
function cargarVehiculos() {
  const vehiculo1 = document.getElementById("vehiculo1");
  const vehiculo2 = document.getElementById("vehiculo2");

  // Limpiar las opciones anteriores y añadir la opción vacía
  vehiculo1.innerHTML = '<option value="">Selecciona un vehículo</option>';
  vehiculo2.innerHTML = '<option value="">Selecciona un vehículo</option>';

  vehiculos.forEach((v, index) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = index;
    option2.value = index;

    option1.textContent = `${v.marca} ${v.modelo}`;
    option2.textContent = `${v.marca} ${v.modelo}`;

    vehiculo1.appendChild(option1);
    vehiculo2.appendChild(option2);
  });
}

// Función para cargar años según el vehículo seleccionado
function cargarAnios(selectVehiculo, selectAno) {
  const index = document.getElementById(selectVehiculo).value;
  const anos = vehiculos[index]?.años || [];

  const select = document.getElementById(selectAno);
  select.innerHTML = ""; // Limpiar opciones anteriores

  anos.forEach((ano) => {
    const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    select.appendChild(option);
  });
}

// Función para mostrar imagen del vehículo seleccionado
function mostrarImagen(selectVehiculo, imgId) {
  const select = document.getElementById(selectVehiculo);
  const index = select.value;
  const vehiculo = vehiculos[index];

  const img = document.getElementById(imgId);
  if (vehiculo && vehiculo.imagen) {
    img.src = vehiculo.imagen;
    img.alt = `Imagen de ${vehiculo.marca} ${vehiculo.modelo}`;
  } else {
    img.src = "";
    img.alt = "Sin imagen disponible";
  }
}

// Función para comparar los vehículos
function comparar() {
  const index1 = document.getElementById("vehiculo1").value;
  const index2 = document.getElementById("vehiculo2").value;

  if (index1 === "" || index2 === "") {
    document.getElementById("resultado").textContent = "Por favor selecciona ambos vehículos.";
    return;
  }

  const vehiculo1 = vehiculos[index1];
  const vehiculo2 = vehiculos[index2];

  let mejor = "";
  if (vehiculo1.hp > vehiculo2.hp) {
    mejor = `Vehículo 1 (${vehiculo1.marca} ${vehiculo1.modelo}) es mejor en caballos de fuerza (${vehiculo1.hp} HP). `;
  } else {
    mejor = `Vehículo 2 (${vehiculo2.marca} ${vehiculo2.modelo}) es mejor en caballos de fuerza (${vehiculo2.hp} HP). `;
  }

  mejor += vehiculo1.bolsasDeAire > vehiculo2.bolsasDeAire
    ? `Tiene más bolsas de aire (${vehiculo1.bolsasDeAire}). `
    : `Tiene más bolsas de aire (${vehiculo2.bolsasDeAire}). `;

  mejor += vehiculo1.precio < vehiculo2.precio
    ? `Es más económico ${vehiculo1.modelo}) ($${vehiculo1.precio}).`
    : `Es más económico ${vehiculo2.modelo})  ($${vehiculo2.precio}).`;

  document.getElementById("resultado").textContent = mejor;
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  cargarVehiculos();

  document.getElementById("vehiculo1").addEventListener("change", () => {
    cargarAnios("vehiculo1", "ano1");
    mostrarImagen("vehiculo1", "imagen1");
  });

  document.getElementById("vehiculo2").addEventListener("change", () => {
    cargarAnios("vehiculo2", "ano2");
    mostrarImagen("vehiculo2", "imagen2");
  });
});
