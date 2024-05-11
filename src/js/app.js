let paso = 1;
const pasoInicial = 1;
const pasoFinal = 3;

const cita = {
  id: "",
  nombre: "",
  fecha: "",
  hora: "",
  servicios: [],
};

document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  mostrarSeccion();
  tabs(); //cambia la seccion al presionar los tabs
  botonesPaginador();
  paginaSiguiente();
  paginaAnterior();

  consultarAPI();
  idCliente();
  nombreCliente();

  seleccionarFecha();
  seleccionarHora();
  mostrarResumen();
}

function mostrarSeccion() {
  const seccionAnterior = document.querySelector(".mostrar");
  if (seccionAnterior) {
    seccionAnterior.classList.remove("mostrar");
  }

  const pasoSelector = `#paso-${paso}`;
  const seccion = document.querySelector(pasoSelector);
  seccion.classList.add("mostrar");

  //tab actual
  const tabAnterior = document.querySelector(".actual");
  if (tabAnterior) {
    tabAnterior.classList.remove("actual");
  }
  const tab = document.querySelector(`[data-paso="${paso}"]`);
  tab.classList.add("actual");
}

function tabs() {
  const botones = document.querySelectorAll(".tabs button");

  botones.forEach((boton) => {
    boton.addEventListener("click", function (e) {
      paso = parseInt(e.target.dataset.paso);

      mostrarSeccion();
      botonesPaginador();
      if (paso === 3) {
        mostrarResumen();
      }
    });
  });
}

function botonesPaginador() {
  const paginaAnterior = document.querySelector("#anterior");
  const paginaSiguiente = document.querySelector("#siguiente");

  if (paso === 1) {
    paginaAnterior.classList.add("ocultar");
    paginaSiguiente.classList.remove("ocultar");
  } else if (paso === 3) {
    paginaAnterior.classList.remove("ocultar");
    paginaSiguiente.classList.add("ocultar");
  } else {
    paginaAnterior.classList.remove("ocultar");
    paginaSiguiente.classList.remove("ocultar");
  }
  mostrarSeccion();
}

function paginaAnterior() {
  const paginaAnterior = document.querySelector("#anterior");
  paginaAnterior.addEventListener("click", function () {
    if (paso <= pasoInicial) return;
    paso--;

    botonesPaginador();
  });
}
function paginaSiguiente() {
  const paginaSiguiente = document.querySelector("#siguiente");
  paginaSiguiente.addEventListener("click", function () {
    if (pasoFinal <= paso) return;
    paso++;

    botonesPaginador();
    if (paso == pasoFinal) {
      mostrarResumen();
    }
  });
}

async function consultarAPI() {
  try {
    const url = "/api/servicios";
    const resultado = await fetch(url);
    const servicios = await resultado.json();
    mostrarServicios(servicios);

    //mostrarServicios();
  } catch (error) {
    console.log(error);
  }
}

function mostrarServicios(servicios) {
  servicios.forEach((servicio) => {
    const { id, nombre, precio } = servicio;
    const nombreServicio = document.createElement("P");
    nombreServicio.classList.add("nombre-servicio");
    nombreServicio.textContent = nombre;

    const precioServicio = document.createElement("P");
    precioServicio.classList.add("precio-servicio");
    precioServicio.textContent = `${formatearPrecio(precio)} COP`;

    const servicioDIV = document.createElement("DIV");
    servicioDIV.classList.add("servicio");
    servicioDIV.dataset.idServicio = id;
    servicioDIV.onclick = function () {
      seleccionarServicio(servicio);
    };

    servicioDIV.appendChild(nombreServicio);
    servicioDIV.appendChild(precioServicio);

    document.querySelector("#servicios").appendChild(servicioDIV);
  });
}

function formatearPrecio(precio) {
  // Convertir el precio a una cadena de texto
  const precioStr = precio.toString();

  // Separar la parte entera y la parte decimal
  const partes = precioStr.split(".");

  // Formatear la parte entera con puntos para separar los miles
  const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Si hay parte decimal, agregarla después del punto decimal
  if (partes.length > 1) {
    const parteDecimal = partes[1];
    return `${parteEntera}.${parteDecimal}`;
  }

  // Si no hay parte decimal, devolver solo la parte entera formateada
  return parteEntera;
}

function seleccionarServicio(servicio) {
  const { id } = servicio;
  const { servicios } = cita;
  const divServicio = document.querySelector(`[data-id-servicio="${id}"]`);
  if (servicios.some((agregado) => agregado.id === id)) {
    cita.servicios = servicios.filter((agregado) => agregado.id !== id);
    divServicio.classList.remove("seleccionado");
  } else {
    cita.servicios = [...servicios, servicio];
    divServicio.classList.add("seleccionado");
  }
}

function nombreCliente() {
  cita.nombre = document.querySelector("#nombre").value;
}

function idCliente() {
  cita.id = document.querySelector("#id").value;
}

function seleccionarFecha() {
  const inputfecha = document.querySelector("#fecha");
  inputfecha.addEventListener("input", function (e) {
    const fechaSeleccionada = new Date(e.target.value);
    const fechaActual = new Date();
    const dia = fechaSeleccionada.getUTCDay();

    if ([6, 0].includes(dia)) {
      e.target.value = "";
      mostrarAlerta("Citas no disponibles Fines de Semana", "error", ".formulario");
    } else if (fechaSeleccionada < fechaActual) {
      e.target.value = "";
      mostrarAlerta(
        "No puedes seleccionar una fecha anterior a hoy o el mismo dia",
        "error",
        ".formulario"
      );
    } else {
      cita.fecha = e.target.value;
    }
  });
}
function seleccionarHora() {
  const inputHora = document.querySelector("#hora");
  inputHora.addEventListener("input", function (e) {
    const horaCita = e.target.value;
    const hora = horaCita.split(":")[0];
    if (hora < 7 || hora > 17) {
      e.target.value = "";
      mostrarAlerta("citas no disponibles", "error", ".formulario");
    } else {
      cita.hora = e.target.value;
    }
  });
}
function mostrarAlerta(mensaje, tipo, elemento, desaparece = true) {
  const alertaPrevia = document.querySelector(".alerta");
  if (alertaPrevia) {
    alertaPrevia.remove();
  }
  const alerta = document.createElement("DIV");
  alerta.textContent = mensaje;
  alerta.classList.add("alerta");
  alerta.classList.add("error");

  const referencia = document.querySelector(elemento);
  referencia.appendChild(alerta);

  if (desaparece) {
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function mostrarResumen() {
  const resumen = document.querySelector(".contenido-resumen");

  while (resumen.firstChild) {
    resumen.removeChild(resumen.firstChild);
  }
  //console.log(cita.servicios.length);
  if (Object.values(cita).includes("") || cita.servicios.length === 0) {
    mostrarAlerta(
      "Debes elegir almenos un servicio, fecha y hora de la cita",
      "error",
      ".contenido-resumen",
      false
    );
    return;
  }

  const { nombre, fecha, hora, servicios } = cita;
  const nombreCliente = document.createElement("P");
  nombreCliente.innerHTML = `<span>Nombre: </span> ${nombre}`;

  const fechaObj = new Date(fecha);
  const mes = fechaObj.getMonth();
  const dia = fechaObj.getDate() + 2;
  const year = fechaObj.getFullYear();

  const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const fechaUTC = new Date(Date.UTC(year, mes, dia));
  const fechaFormateada = fechaUTC.toLocaleDateString("es-CO", opciones);

  const horaObj = new Date(cita.fecha + "T" + cita.hora);
  const opcioneshora = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const horaFormateada = horaObj.toLocaleString("es-ES", opcioneshora);

  const fechaCita = document.createElement("P");
  fechaCita.innerHTML = `<span>Fecha de la cita: </span> ${fechaFormateada}`;
  const horaCita = document.createElement("P");
  horaCita.innerHTML = `<span>Hora de la cita: </span> ${horaFormateada}`;

  //heading

  const headingServicios = document.createElement("H3");
  headingServicios.textContent = "Tus servicios solicitados";
  resumen.appendChild(headingServicios);

  servicios.forEach((servicio) => {
    const { id, nombre, precio } = servicio;
    const contenedorServicio = document.createElement("DIV");
    contenedorServicio.classList.add("contenedor-servicio");

    const textoServicio = document.createElement("P");
    textoServicio.textContent = nombre;

    const precioServicio = document.createElement("P");
    const precioFormateado = formatearPrecio(precio);
    precioServicio.innerHTML = `<span>Precio: </span> ${precioFormateado} COP`;

    contenedorServicio.appendChild(textoServicio);
    contenedorServicio.appendChild(precioServicio);

    resumen.appendChild(contenedorServicio);
  });

  const headingCita = document.createElement("H3");
  headingCita.textContent = "Información de tu cita";

  const botonReservar = document.createElement("BUTTON");
  botonReservar.classList.add("boton");
  botonReservar.textContent = "Reservar Cita";
  botonReservar.onclick = reservarCita;

  resumen.appendChild(headingCita);
  resumen.appendChild(nombreCliente);
  resumen.appendChild(fechaCita);
  resumen.appendChild(horaCita);
  resumen.appendChild(botonReservar);
}

async function reservarCita() {
  const { nombre, fecha, hora, servicios, id } = cita;

  const idServicios = servicios.map((servicio) => servicio.id);
  const datos = new FormData();
  datos.append("fecha", fecha);
  datos.append("hora", hora);
  datos.append("usuarioid", id);
  datos.append("servicios", idServicios);

  //,peticion a la api

  try {
    const url = "/api/citas";

    const respuesta = await fetch(url, {
      method: "POST",
      body: datos,
    });

    const resultado = await respuesta.json();
    if (resultado.resultado) {
      Swal.fire({
        icon: "success",
        title: "Cita reservada",
        text: "Tu cita fue creada correctamente",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...Algo Salio mal!",
      text: "no se pudo guardar la cita",
      confirmButtonText: "OK",
    });
  }
}
