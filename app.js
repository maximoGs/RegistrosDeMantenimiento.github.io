document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('intake-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Recopilar datos del formulario
        const mechanicName = document.getElementById('mechanicName').value.trim();
        const workshopName = document.getElementById('workshopName').value.trim();
        
        const carBrand = document.getElementById('carBrand').value.trim();
        const carModel = document.getElementById('carModel').value.trim();
        const carYear = document.getElementById('carYear').value.trim();
        const carPlate = document.getElementById('carPlate').value.trim();
        const carMileage = document.getElementById('carMileage').value.trim();
        const carVin = document.getElementById('carVin').value.trim() || 'No especificado';
        
        const serviceReason = document.getElementById('serviceReason').value;
        const observations = document.getElementById('observations').value.trim() || 'Ninguna';

        // Inspección Rápida
        const shockAbsorbers = document.getElementById('shockAbsorbers').value;
        const radiator = document.getElementById('radiator').value;
        const timingBelt = document.getElementById('timingBelt').value;
        const tires = document.getElementById('tires').value;

        // Número de destino (con código de país, sin el + según la API de WhatsApp, pero la URL wa.me acepta el + o lo omite. Usaremos 5492617094195)
        const phoneNumber = '5492617094195';

        // Construir el mensaje formateado
        const message = `*NUEVO INGRESO DIGITAL - CARUP* 🚗🔧

*🧑‍🔧 DATOS DEL MECÁNICO*
• Nombre: ${mechanicName}
• Taller/Sucursal: ${workshopName}

*🚘 DATOS DEL VEHÍCULO*
• Vehículo: ${carBrand} ${carModel} (${carYear})
• Patente/Dominio: ${carPlate}
• Kilometraje: ${carMileage} km
• VIN: ${carVin}

*🔍 INSPECCIÓN RÁPIDA*
• Amortiguadores: ${shockAbsorbers}
• Radiador: ${radiator}
• Correa de Distribución: ${timingBelt}
• Cubiertas: ${tires}

*📋 ESTADO Y MOTIVO*
• Motivo de Ingreso: ${serviceReason}
• Observaciones: ${observations}

_Enviado desde Intake Digital CarUp_`;

        // Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(message);

        // Crear la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Redirigir o abrir en nueva pestaña
        window.open(whatsappUrl, '_blank');
        
        // Opcional: Resetear el formulario después de enviar
        // form.reset();
    });
});
