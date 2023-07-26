module.exports = ({
    local: {
        baseURL: 'http://localhost:8080/',
        timeout: 50000,
        username: 'admin@gmail.com',
        password: 'admin'
    }
})[process.env.TESTENV || 'local'];