module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database : process.env.DB_NAME || 'MySimpleERP',
        user: process.env.DB_USER || 'MySimpleERP',
        password: process.env.DB_PASS || 'MySimpleERP',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './MySimpleERP.sqlite'
        }
    }
}