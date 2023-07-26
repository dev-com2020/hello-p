module.exports = ({
    local: {
        baseURL: 'https://www.meestpost.com/pl/',
        brandName: 'Sprawna dostawa paczek. Meest Post – Twoja poczta.',
        mainProductName: 'Meest Post'
    },
    test : {},
    prod : {}
})[process.env.TESTENV || 'local'];