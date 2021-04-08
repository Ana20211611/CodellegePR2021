var productos = [];

$(function () {

    $.get('http://localhost:666/products/all', function (response) {
        productos = response;
        for (var i = 0; i < productos.length; i++) {
            const producto = productos[i];
            $('body').append(
                `<div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${producto.image}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> ${producto.brand} - ${producto.name}</h5>
                                <p class="card-text">${producto.description}</p>
                                <p class="card-text">
                                    <small class="text-muted">In Stock: ${producto.stock} units</small>
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>`);
        }
    });
    //Asynchronous Javascript And XML
    /*var AJAX = new XMLHttpRequest(); //Estado inicial 0
    AJAX.onreadystatechange = function () {
        //State 3: Downloading
        if (this.readyState === 4) {
            if (this.status === 200) {
                productos = JSON.parse(this.responseText);
                for (var i = 0; i < productos.length; i++) {
                    const producto = productos[i];
                    $('body').append(
                        `<div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${producto.image}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"> ${producto.brand} - ${producto.name}</h5>
                                    <p class="card-text">${producto.description}</p>
                                    <p class="card-text">
                                        <small class="text-muted">In Stock: ${producto.stock} units</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                     </div>`);
                }
            }
        }
        //State 4: Finish
    };
    AJAX.open('GET', 'http://localhost:666/products/all'); //State: 1
    AJAX.send(); //State: 2*/
});

function MostrarDetalleProducto(productIndex) {

    const producto = productos[productIndex];

    var modal = $('.modal');
    modal.find('h5').text(producto.brand + " - " + producto.name);
    modal.find('.modal-body p').text(producto.description);

    $('.modal').modal('toggle');
}

// function MostrarMensaje() {
//     $('body').prepend(
//     `<div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
//             <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//      </div>`);
// }