// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    // Aquí podemos manejar las solicitudes entrantes
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

