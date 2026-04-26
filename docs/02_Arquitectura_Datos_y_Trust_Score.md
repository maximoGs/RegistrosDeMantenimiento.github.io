# Arquitectura de Datos y Trust Score

Este documento define la base algorítmica y la estructura de la base de datos relacional (Supabase) necesaria para sustentar el ecosistema de reputación de CarUp.

## 1. El Algoritmo del "Trust Score" Vehicular ($TS_v$)

La calificación del vehículo es una entidad matemática independiente que refleja la salud y confiabilidad del activo. El historial de mantenimiento se convierte en un algoritmo.

$$TS_v = \alpha \cdot \left( \frac{\sum M_{realizadas}}{\sum M_{programadas}} \right) + \beta \cdot \text{Qual}_{avg} - \gamma \cdot \text{Sev}_{acc}$$

**Donde:**
*   $\alpha, \beta, \gamma$: Coeficientes de ponderación técnica (ajustables durante la fase beta).
*   $M_{realizadas}/M_{programadas}$: Ratio de cumplimiento del plan de mantenimiento preventivo.
*   $\text{Qual}_{avg}$: Calificación promedio histórica de los mecánicos que han intervenido el vehículo.
*   $\text{Sev}_{acc}$: Nivel de severidad de reparaciones correctivas mayores o accidentes registrados.

**Objetivo del $TS_v$**: Permitir a futuros compradores o aseguradoras evaluar el riesgo del activo basándose en datos inalterables y validados, mitigando el fraude del kilometraje adulterado.

---

## 2. Esquema de Base de Datos Base (Supabase / PostgreSQL)

Para inicializar el proyecto en la fase de "Vibe Coding", se define el siguiente esquema simplificado:

### Tabla `vehicles`
*   `id` (UUID, PK)
*   `vin` (String, Unique)
*   `brand` (String)
*   `model` (String)
*   `year` (Integer)
*   `trust_score` (Float) - *Se recalcula vía Trigger/Función tras cada nueva inserción en maintenance_records.*
*   `owner_id` (UUID, FK a users)

### Tabla `mechanics`
*   `id` (UUID, PK)
*   `business_name` (String)
*   `specialty` (String)
*   `certificates_url` (String/Array)
*   `avg_rating` (Float)

### Tabla `maintenance_records`
*   `id` (UUID, PK)
*   `vehicle_id` (UUID, FK a vehicles)
*   `mechanic_id` (UUID, FK a mechanics)
*   `mileage` (Integer)
*   `v_mrs_reason_code` (String) - *Código VMRS de razón de ingreso.*
*   `v_mrs_work_code` (String) - *Código VMRS de trabajo realizado.*
*   `fluid_check_json` (JSONB) - *Resultados del Nivel A de inspección.*
*   `evidence_photos_url` (Array de Strings)
*   `digital_signature` (String) - *Firma o hash de validación.*
*   `created_at` (Timestamp)

### Tabla `ratings`
*   `id` (UUID, PK)
*   `from_user_id` (UUID)
*   `to_user_id` (UUID)
*   `entity_type` (Enum: 'mechanic', 'user', 'car')
*   `score` (Integer 1-5)
*   `comments` (Text)
*   `created_at` (Timestamp)

## 3. Lógica de Negocio Crítica

1.  **Recálculo del $TS_v$**: Cada vez que se inserta un nuevo registro en `maintenance_records`, una función (Edge Function o Trigger en Postgres) debe volver a calcular el puntaje del vehículo.
2.  **Geolocalización**: Se deberá implementar PostGIS en el futuro para consultas de cercanía (`ST_Distance`) entre la ubicación del usuario y las coordenadas guardadas en la tabla `mechanics`.
