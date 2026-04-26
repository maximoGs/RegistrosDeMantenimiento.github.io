# CarUp: Ecosistema de Reputación Bidireccional y Marketplace Vehicular

## Visión 2026
La industria automotriz global atraviesa una de las transformaciones más profundas de su historia, impulsada por la digitalización de los servicios de posventa y la demanda de transparencia por parte de los consumidores modernos. En el año 2026, el concepto de vehículo se ha desplazado hacia el de un activo definido mayoritariamente por software. 

**CarUp** es la estrategia de disrupción tecnológica en el mantenimiento vehicular: una plataforma centralizada que consolida los registros de mantenimiento e implementa un sistema de calificación bidireccional entre mecánicos, usuarios y los propios activos (vehículos).

## El Problema
La asimetría de información entre el propietario del vehículo y el prestador del servicio técnico ha sido históricamente un foco de ineficiencias, desconfianza y costos ocultos. 

## La Solución
Una plataforma que actúa como el "libro de vida" del auto. Transforma el mantenimiento de una tarea reactiva y opaca en un activo de valor patrimonial. Un historial de servicio impecable y verificable se traduce directamente en un mayor valor de reventa y una menor prima de riesgo para aseguradoras y compradores.

## Documentación del Proyecto

El repositorio está estructurado para facilitar el desarrollo rápido bajo el paradigma de "Vibe Coding" y para presentar la iniciativa a fondos de inversión y subsidios.

* **[01. Product Requirements Document (PRD)](docs/01_PRD_CarUp.md)**: Análisis de mercado, benchmarking y concepto base.
* **[02. Arquitectura de Datos y Trust Score](docs/02_Arquitectura_Datos_y_Trust_Score.md)**: Algoritmo de reputación y esquema de base de datos.
* **[03. Protocolo Intake ABC](docs/03_Protocolo_Intake_ABC.md)**: Estandarización de carga de datos para mecánicos.
* **[04. Guía Vibe Coding](docs/04_Guia_Vibe_Coding.md)**: Flujo de trabajo con IA (Lovable, Cursor) y Stack Tecnológico.
* **[05. Estrategia Go-To-Market](docs/05_Estrategia_Go_To_Market.md)**: Fases de lanzamiento y validación.
* **[06. Contexto Regional (Mendoza)](docs/06_Contexto_Regional_Mendoza.md)**: Adaptaciones climáticas y alianzas locales estratégicas.
* **[Pitch Deck Outline](presentations/Pitch_Deck_Outline.md)**: Estructura de presentación comercial.

## Stack Tecnológico para el MVP (4 Semanas)
- **Frontend**: React + Vite con Tailwind CSS (Mobile-first, PWA).
- **Backend & DB**: Supabase (PostgreSQL) para Auth, Realtime DB y Storage.
- **Pagos**: Stripe Connect para gestión de comisiones.
