const app = require('./src/config/custom-express');
const PORT = process.env.PORT || 8089

app.listen(PORT, function() {
    console.log(`Servidor rodando na porta 8089`);
});
