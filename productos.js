let getProductos = async () => {
    let url = "https://64f202d20e1e60602d2490bc.mockapi.io/producto";
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
}
getProductos();



let getProductoId = async (id) => {
    let url = `https://64f202d20e1e60602d2490bc.mockapi.io/producto/${id}`;
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
}
getProductoId(1);



let postProducto = async () => {
    let nuevoProducto = {
        codigo: 60,
        nombre: "Barrilete",
        descripcion: "Barra de dulce",
        precio: 200,
        marca: "Colombina",
    }
    let config = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    }
    let peticion = await fetch("https://64f202d20e1e60602d2490bc.mockapi.io/producto/", config);
    let res = await peticion.json();
    console.log(res);
}
postProducto();



let putProducto = async (id) => {
    let cambioProducto = {
        codigo: 63,
        nombre: "CocaCola",
        descripcion: "Gaseosa",
        precio: 5000,
        marca: "CocaCola",
    }
    let config = {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cambioProducto)
    }
    let peticion = await fetch(`https://64f202d20e1e60602d2490bc.mockapi.io/producto/${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
putProducto(7);



let deleteProducto = async (id) => {
    let config = {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        },
    }
    let peticion = await fetch(`https://64f202d20e1e60602d2490bc.mockapi.io/producto/${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
deleteProducto(9);