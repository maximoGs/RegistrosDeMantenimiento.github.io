# Guía Vibe Coding y Stack Tecnológico

Para reducir el "Time-to-Market" a tan solo 4 semanas, CarUp adopta el paradigma del "Vibe Coding", utilizando herramientas de IA generativa y plataformas low-code para prototipado rápido e ingeniería incremental.

## Flujo de Trabajo Sugerido

El enfoque es "Vertical Slice": completar una funcionalidad end-to-end antes de pasar a la siguiente.

1.  **Lovable**: Prototipado rápido de la interfaz y el "vibe" visual. Ideal para generar React + Tailwind CSS desde descripciones en lenguaje natural.
2.  **GitHub Sync**: Sincronizar Lovable con este repositorio para control de versiones.
3.  **Cursor (IDE)**: Para la ingeniería profunda. Uso del Model Context Protocol (MCP) para conectar con la API de Supabase y Stripe, y depurar algoritmos complejos (como el Trust Score).

---

## Prompt Maestro de Generación Inicial

> Utiliza este prompt en Cursor Composer, Bolt.new o Lovable para generar el scaffolding de la app. Antes de enviarlo, asegúrate de adjuntar el documento `01_PRD_CarUp.md` como contexto.

```text
Actúa como un CTO y Arquitecto Full-Stack Senior. Genera una aplicación web progresiva (PWA) de alto rendimiento para la gestión de mantenimiento vehicular.

Contexto de Negocio: Marketplace bilateral para dueños de autos y mecánicos con sistema de reputación bidireccional y 'Trust Score' del vehículo.

Arquitectura de Datos (Supabase):
- Tabla 'vehicles': id, vin, brand, model, year, trust_score, owner_id.
- Tabla 'mechanics': id, business_name, specialty, certificates_url, avg_rating.
- Tabla 'maintenance_records': id, vehicle_id, mechanic_id, mileage, v_mrs_reason_code, v_mrs_work_code, fluid_check_json, evidence_photos_url, digital_signature.
- Tabla 'ratings': id, from_user_id, to_user_id, entity_type (mechanic/user/car), score (1-5), comments.

Requisitos de Interfaz (Tailwind CSS):
- Estilo limpio, profesional, 'vibe' automotriz con modo oscuro nativo.
- UX de carga rápida para mecánicos: botones de mínimo 48x48px para uso con guantes, formularios en una sola columna.
- Dashboard de usuario con alertas visuales tipo semáforo (Verde: OK, Ámbar: Atención, Rojo: Crítico).

Lógica de Negocio:
- Implementar el sistema de carga ABC detallado en el PRD adjunto.
- El 'Trust Score' del auto debe recalcularse tras cada inserción en la tabla 'maintenance_records'.
- Integrar geolocalización para búsqueda de talleres cercanos.

Comienza generando la estructura de la base de datos y la pantalla de onboarding para ambos perfiles. Espera mi aprobación antes de proceder con el módulo de carga técnica.
```
