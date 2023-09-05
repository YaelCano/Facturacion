 # Factura, Productos y Usuarios

Este proyecto consta de 3 archivos JavaScript: factura.js, productos.js y usuario.js. Cada archivo contiene funciones para interactuar con su respectiva API.

## factura.js

Este archivo contiene las siguientes funciones:

* `getFactura()`: Obtiene todas las facturas de la API.
* `getFacturaId(id)`: Obtiene una factura por su ID.
* `getProducto()`: Obtiene todos los productos de la API.
* `getUsuario()`: Obtiene todos los usuarios de la API.
* `postFactura()`: Crea una nueva factura.
* `putFactura(id)`: Actualiza una factura por su ID.
* `deleteFactura(id)`: Elimina una factura por su ID.

A continuación se muestra un ejemplo de cómo utilizar estas funciones:

```javascript
// Obtener todas las facturas
let facturas = await getFactura();
console.log(facturas);

// Obtener una factura por su ID
let factura = await getFacturaId(1);
console.log(factura);

// Crear una nueva factura
let newFactura = {
  invoCod: Math.floor(Math.random() * 100),
  invoTotPri: Math.floor(Math.random() * 10000),
  userCode: Math.floor(Math.random() * (await getFactura()).length) + 1,
  prodList: []
};
let res = await postFactura(newFactura);
console.log(res);

// Actualizar una factura por su ID
let updatedFactura = {
  invoCod: Math.floor(Math.random() * 100),
  invoTotPri: Math.floor(Math.random() * 10000),
};
res = await putFactura(1, updatedFactura);
console.log(res);

// Eliminar una factura por su ID
res = await deleteFactura(1);
console.log(res);
```

## productos.js

Este archivo contiene las siguientes funciones:

* `getProductos()`: Obtiene todos los productos de la API.
* `getProductoId(id)`: Obtiene un producto por su ID.
* `postProducto()`: Crea un nuevo producto.
* `putProducto(id)`: Actualiza un producto por su

