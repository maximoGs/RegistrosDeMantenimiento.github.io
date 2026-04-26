# Product Requirements Document (PRD): CarUp

## 1. Resumen Ejecutivo
La asimetría de información entre el propietario del vehículo y el prestador del servicio técnico es un problema histórico. CarUp busca eliminar esta fricción mediante una plataforma centralizada que consolide registros de mantenimiento validados y establezca un sistema de confianza basado en la reputación tridimensional: taller, usuario y vehículo.

## 2. Análisis de Mercado y Referentes (Contexto 2026)
El mercado actual se divide en dos polos extremos, dejando un gran espacio en el medio para una solución híbrida y colaborativa.

### Benchmarking de Funcionalidades Líderes

| Categoría de Software | Ejemplos Destacados | Fortalezas Técnicas | Brecha de Mercado Detectada |
| :--- | :--- | :--- | :--- |
| **Gestión Administrativa de Talleres** | AutoLeap, Tekmetric, Kordata | Facturación automática, control de inventario, historial de productividad. | Enfoque exclusivo B2B; nula interacción social entre usuarios o reputación. |
| **Mantenimiento Predictivo (CMMS)** | Tractian, Fiix, eMaint | Sensores IoT integrados, análisis de vibraciones por IA. | Alta complejidad y costo; orientada a flotas corporativas, no al usuario final. |
| **Apps de Control de Gastos B2C** | Drivvo, Simply Auto, Motorist | UX simplificada, recordatorios automáticos. | Datos cargados por el usuario (no verificados); falta de sistema de calificación. |
| **Asistencia y Diagnóstico Emergente** | MECH.AI, Autotekne | Diagnóstico visual 3D, videollamadas. | Modelos de nicho; no actúan como repositorio central de historial legal. |

## 3. Oportunidad Estratégica
Amalgamar la profundidad técnica de un CMMS profesional con la agilidad y el componente social de una red bidireccional B2C/B2B. La plataforma debe ser el **"libro de vida"** del auto, donde cada entrada es validada por un profesional calificado y cada interacción contribuye a un índice de confianza global.

## 4. Arquitectura de Confianza: Reputación Tridimensional

### 4.1 Lógica de Reputación para el Mecánico / Taller
El algoritmo de reputación no debe basarse solo en la "amabilidad", sino en indicadores de desempeño:
*   **Precisión del Diagnóstico**: Comparación síntoma vs. eficacia en el primer intento.
*   **Transparencia de Datos**: Calidad de la información cargada (fotos, códigos estándar).
*   **Certificaciones Verificables**: Integración con entidades (ej. UTMA).
*   **Opinión del Usuario**: Relación precio-calidad, plazos, comunicación.
*   *Protección al taller*: Sistema de disputa para eliminar calificaciones bajas por factores externos (ej. repuestos defectuosos del cliente).

### 4.2 Lógica de Reputación para el Usuario
Los mecánicos califican al usuario para incentivar el respeto mutuo (similar al modelo Uber):
*   **Puntualidad en Citas**: Penalización por "tiempos muertos" generados al taller.
*   **Estado de Cuidado del Vehículo**: Penalización por ignorar alertas críticas o higiene precaria.
*   **Claridad en Reporte de Fallas**: Capacidad de describir síntomas para ayudar al diagnóstico inicial.

### 4.3 El "Trust Score" del Automóvil (Pasaporte Técnico)
La verdadera innovación: el vehículo como entidad independiente que acumula reputación basada en datos reales, no solo en kilometraje. (Ver `02_Arquitectura_Datos_y_Trust_Score.md` para detalles del algoritmo).
