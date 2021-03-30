var express = require('express');

const app = express();
app.use(express.static('../'));

// app.get('/', (req, res) => {
//         res.status(403).send('Invalid endpoint Request con GET');
// });

// app.get('/saludo', (req, res) => {
//         res.status(200).send('Saludo con GET');
// });
// app.post('/saludo', (req, res) => {
//         res.status(200).send('CREA Saludo con POST');
// });




app.get('/products/all', (req, res)=>{
        var productos=[
                {
                    name: "iPhone 12 Pro Max",
                    brand: "Apple",
                    description: "The new 2020 iPhone 12. Thin Max Pro version has a better camera.",
                    image: "https://cdn1.coppel.com/images/catalog/pm/2937063-1.jpg",
                    price: 1800.50,
                    stock: 15
                },
                {
                    name: "Mi 11",
                    brand: "Xiaomi",
                    description: "The New 2021 Xiaomi Mi 11.",
                    image: "https://images.solopos.com/2021/01/22-Xiaomi-Mi-11-Pro-Render-Gizmochina.jpg",
                    price: 800,
                    stock: 17
                },
                {
                        name: "Samsung Galaxy S21 Ultra",
                        brand: "Samsung",
                        description: "The New Samsung Galaxy S21",
                        image: "https://tienda.movistar.com.mx/media/catalog/product/cache/75b1917cf488b9b8b9e806b91f3035c0/p/l/plata_frente_vuelta.png",
                        price: 1600,
                        stock: 12
                    }
            ];
            res.send(productos);

});
app.get('/html',(req, res)=>{
    res.send('<h1>HOLA</h1>');
});


console.log('ejecutando el servicio en el puerto 666');
console.log('verificar las peticiones en el eendpoint: http://localhost:666');
app.listen(666);
