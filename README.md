# Energe - Energía Solar

Empresa especialista en brindar soluciones domésticas e industriales mediante la utilización de energía solar. Lleva más de una década mejorando al mundo mediante el aporte de energía pura, renovable y amigable con el medio ambiente..

# Demo
* [Live](https://condescending-ptolemy-73cab2.netlify.app/).
* [Vídeo Desktop](https://youtu.be/A9fipx-XqCM).
* ![Gif](https://s9.gifyu.com/images/Grabacion-de-pantalla-2021-10-13-a-las-20.18.00.gif).

# Librerías de terceros

## [Bootstrap](https://getbootstrap.com/)

Framework de css para un prototipado rápido de cada pantalla y poder hacer foco en la funcionalidades del commerce y en el aprendizaje de React.

## [env-cmd](https://github.com/toddbluhm/env-cmd)

Para generar variables de entorno en un `.env` y no publicar credenciales de acceso a Firebase/Firestore.

# Instalación

### 1. Instalar dependencias
Se recomienda emplear la última versión de [NodeJS](https://nodejs.org/en/).
```
npm install
```
### 2. Variables de entorno
Aquí se pegan las credenciales de lectura de Firebase/Firestore provistas de manera privada.
```
cp .env.example .env
```
### 3. Iniciar server local
```
npm start
```

# Otras consideraciones
1. Se englobaron los archivos en carpetas para un fácil recorrido por los mismos.
    * **Catalog**: todo lo referente a categorías y listado de items.
    * **Product**: componentes para el detalle de un item.
    * **Cart**: funcionalidades de productos en el carrito.
    * **Checkout**: formulario de datos de usuario y orden de compra
    * **Layout**: componentes globales o de UI
    * **Pages**: páginas separadas como la de 404
2. Otras funcionalidades:
    * **contexts**
    * **resources**
    * **services**
3. Consideraciones sobre el código:
    * Variables, folders y files en inglés.
    * Contenido del sitio en castellano.
4. La home del proyecto es el listado completo de productos.
5. Las categorías del `NavBar` son dinámicas.
6. Al carrito se puede acceder siempre a través de `/cart`. Si no existen items se muestra un mensaje de carrito vacío.
7. Se generó una _página de 404_ para rutas o parámetros inexistentes.


