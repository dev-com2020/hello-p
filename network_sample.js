const NETWORK_PRESETS = {

    GPRS: {
        download: 50 * 1024 / 8,
        upload: 20 * 1024 / 8,
        latency: 500,
    },
    Good3G: {
        download: 1.5 * 1024 * 1024 / 8,
        upload: 750 * 1024 / 8,
        latency: 40,
    },
    Regular4G: {
        download: 4 * 1024 * 1024 / 8,
        upload: 3 * 1024 * 1024 / 8,
        latency: 20,
    }
};
module.exports = NETWORK_PRESETS;