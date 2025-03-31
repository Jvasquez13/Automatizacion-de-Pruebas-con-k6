# Automatizacion-de-Pruebas-con-k6
Automatización de Pruebas con k6 para un Proyecto Web o API -12

# 📊 Pruebas de Carga con k6

Este proyecto contiene un conjunto de pruebas automatizadas utilizando [k6](https://k6.io/) con la API pública de [Reqres](https://reqres.in).

## 🚀 ¿Qué contiene?

- ✅ Script `prueba-api.js` con 4 escenarios:
  - Obtener lista de usuarios (GET)
  - Obtener un usuario que no existe (GET 404)
  - Crear un usuario (POST)
  - Actualizar un usuario (PUT)
- ✅ Resultado de ejecución exportado en `resultados.json`
- ✅ Gráfica generada desde métricas (PNG)

## 🛠️ Cómo usar

1. Ejecuta el script de prueba localmente:
   ```bash
   k6 run prueba-api.js

2. Si compilaste k6 con el dashboard visual:
    ```bash
    ./k6.exe run --out dashboard prueba-api.js

Esto abrirá un dashboard en tu navegador: http://localhost:5665/

📈 Gráfica
fue generada a partir del archivo resultados.json y representa métricas clave como tiempo de respuesta, cantidad de peticiones, etc.
