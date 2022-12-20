document.addEventListener('DOMContentLoaded', mostrarProductos);

function mostrarProductos(){
    //llamado a nuestra API
    const url = 'http://localhost:4000/api/productos';
    //funcion fetch
    //si hay una respuesta ejecuta lo primero sino manda el console desde categorias . . .
    fetch(url)
        .then( respuesta => {
            return respuesta.json();
        })
        .then( resultado =>{
            console.log(resultado);

            //dibujar el html, llamamos funcion
            productoHTML(resultado);
        })
}

function productoHTML(productos){
    listaProductos = document.querySelector('.sec-2');

    for (let i=0; i<productos.length; i++){
        const llenado=document.createElement('div');
        console.log(llenado)
        llenado.innerHTML=`
        <div class="iteams">
           <form action="">
            <ul class="ul u1">
                <li class="iteam i1">
                    <div class="pro-img">
                        <img src="img/productos/monitores/monitor.webp">
                        <p class="t">Gigabyte</p> 
                    </div>
                    <div class="det-carr">
                        <a href="#">
                            <input type="button" class="agregar" value="Agregar">
                        </a>
                        
                        <a href="../hrml/ver-mas.html">
                            <input type="button" class="detalles" id="pro-v1" value="Ver Mas">
                        </a>
                    </div>
                    <div>
                    <p class="tx">${productos[i].nombre}</p>
                    <p class="tx">Pulgadas: 21</p>
                    <p class="tx">Frecuencia: 144hz</p>
                    <p class="tx">Proporcion: 21:9</p>
                    <p class="t-precio" >${productos[i].precio}</p>
                </div>
                    <!-- <button class="detalles" id="detalles">Detalles</button> -->
                </li>
            </ul>
        </div>
        `

        listaProductos.appendChild(llenado);
    }
}
