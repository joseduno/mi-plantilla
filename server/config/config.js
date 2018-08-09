process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Configurar en producción, la variable de proceso "SEED"
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

// ================
//  Base de datos
// ================
if (process.env.NODE_ENV === 'dev') {
    // Colocar nombre de la BD
    let nombreBD = 'gaviables-d1';
    process.env.URLDB = `mongodb://localhost:27017/gaviables-d1`;
} else {
    // Configurar en producción, la variable de proceso "MONGO_URI"
    process.env.URLDB = process.env.MONGO_URI;
}