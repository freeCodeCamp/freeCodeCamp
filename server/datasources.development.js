module.exports = {
    mail: {
        connector: 'mail',
        transport: {
            type: 'smtp',
            host: 'localhost',
            secure: false,
            port: 1025,
            tls: {
                rejectUnauthorized: false
            }
        },
        auth: {
            user: 'test',
            pass: 'test'
        }
    }
};
