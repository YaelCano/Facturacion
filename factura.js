let getFactura = async () => {
    let url = "https://64f2062f0e1e60602d249a99.mockapi.io/invoice";
    let peticion = await fetch(url);
    let res = await peticion.json();
    return res
}
getFacturaId;

let getFacturaId = async (id) => {
    let url = `https://64f2062f0e1e60602d249a99.mockapi.io/invoice/${id}`;
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
    return res
}

let getProducto = async () => {
    let url = `https://64f202d20e1e60602d2490bc.mockapi.io/producto`;
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
    return res
}
let getUsuario = async () => {
    let url = `https://64f202d40e1e60602d2490d4.mockapi.io/usuario`;
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
    return res
}

getFacturaId(1);

let postFactura = async () => {
    let users = ((await getUsuario()).length) + 1;
    let userCode = Math.floor(Math.random() * (users))
    let productos = await getProducto();
    let random = Math.floor(Math.random() * (productos).length);
    let invoTotPri = 0;
    let prodList = [];
    for (let i = 0; i < (random + 1); i++) {
        productoRandom = Math.floor(Math.random() * (productos).length);
        proUnid = Math.floor(Math.random() * (1000));
        prodList.push({ producto: productos[productoRandom], proUnid: proUnid });
        productoActual = productos[productoRandom];
        precioProductoActual = productoActual.precio;
        invoTotPri += precioProductoActual * proUnid;
        console.log(productos[productoRandom]);
        productos.splice(productoRandom, 1);
        console.log(productos);
    }
    let newFactura = {
        invoCod: Math.floor(Math.random() * 100),
        invoTotPri: invoTotPri,
        userCode: userCode,
        prodList: prodList
    }
    let config = {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newFactura)

    }
    console.log(newFactura);
    let url = `https://64f2062f0e1e60602d249a99.mockapi.io/invoice/`;
    let peticion = await fetch(url, config);
    let res = await peticion.json();
}
postFactura();

let putFactura = async (facturaId, invoCod = Math.floor(Math.random() * 100), invoTotPri = Math.floor(Math.random() * 10000),) => {
    let newFactura = {
        invoCod: invoCod,
        invoTotPri: invoTotPri,
        userCode: Math.floor(Math.random() * (await getFactura()).length) + 1,
        prodList: []
    }
    let config = {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(newFactura)
    }
    console.log(newFactura);
    // let url = `https://64f2062f0e1e60602d249a99.mockapi.io/invoice/${facturaId}`;
    // let peticion = await fetch(url, config);
    // let res = await peticion.json();
}
putFactura(1);

let deleteFactura = async (facturaId) => {
    let id = facturaId.toString();
    let config = {
        method: 'DELETE',
        headers: { 'content-Type': 'application/json' }
    }
    let url = `https://64f2062f0e1e60602d249a99.mockapi.io/invoice/${id}`;
    let peticion = await fetch(url, config);
    let res = await peticion.json();
}
deleteFactura(8);