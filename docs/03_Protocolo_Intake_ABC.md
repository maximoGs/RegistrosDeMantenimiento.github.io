# Protocolo de Ingreso y Diagnóstico (Intake Digital)

Para que la base de datos sea escalable y permita el análisis masivo de información (Big Data), la plataforma adopta el estándar VMRS (Vehicle Maintenance Reporting Standards) y un flujo guiado ("Intake ABC") que prohíbe el texto libre desestructurado.

## Consideraciones de UX/UI para el Taller
El entorno de un taller mecánico es hostil para los dispositivos móviles (manos con grasa, luz variable). La interfaz debe cumplir con:
1.  **Simplicidad Extrema**: No más de 9 elementos por pantalla.
2.  **Botones Grandes**: Mínimo 48x48px para uso con guantes.
3.  **Entrada Alternativa**: Soporte para dictado por voz.
4.  **Modo Offline**: Capacidad de captura de datos/fotos sin señal, con sincronización en background al recuperar conexión.

---

## Flujo de Carga (Skip Logic)

El proceso se divide en tres niveles de profundidad.

### Nivel A: Identificación y Estado Base (Obligatorio)
Establece la línea base de la transacción.

*   **Identificación**: Captura de VIN (escaneo/manual) y Kilometraje actual.
*   **Razón (VMRS Key 14)**: 
    *   Mantenimiento Programado (01)
    *   Queja del Conductor (02)
    *   Avería en Carretera (03)
*   **Inspección Perimetral**: Registro de daños previos (fotos obligatorias).
*   **Fluidos**: Aceite, refrigerante, líquido de frenos.

### Nivel B: Mantenimiento Preventivo y por Sistemas
Focado en intervenciones de rutina, seguridad y longevidad.

*   **Frenos**: Medición espesor pastillas (mm).
*   **Tren de Rodaje**: Profundidad neumáticos (mm), presión.
*   **Sistema de Carga**: Voltaje de batería (reposo/carga).
*   **Suspensión/Dirección**: Fugas, bujes, rótulas.

### Nivel C: Correctivo Mayor y Diagnóstico Avanzado
Para fallas complejas y electrónica.

*   **Códigos OBD-II**: Reporte de códigos P, C, B, U.
*   **Componentes Reemplazados**: Fabricante y Nº de serie (OEM vs Aftermarket).
*   **Certificación**: Foto de la pieza instalada y firma digital del mecánico.

---

## Cuestionario Base (Ejemplo)

| Fase | Pregunta Técnica Específica | Tipo de Dato |
| :--- | :--- | :--- |
| A: Recepción | ¿Existen fugas visibles de fluidos en el motor? | Booleano + Foto |
| A: Recepción | ¿Estado de los testigos (MIL) en el tablero? | Selección Múltiple |
| B: Sistemas | Profundidad remanente de neumáticos delanteros | Numérico (0.0 mm) |
| B: Sistemas | ¿Integridad de correas y mangueras verificada? | Checklist |
| C: Crítico | Código de falla (DTC) detectado por el escáner | Alfanumérico |
| C: Crítico | ¿Requiere alineación/balanceo inmediato? | Booleano (Recomendación) |
