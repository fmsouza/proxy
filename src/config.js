import {Utils} from './common/utils';

module.exports = {
    projectRoot: __dirname,
    bootstrapper: 'index',
    server: {
        environment: {
            development: {
                port: '80',
                ip: '127.0.0.1'
            },
            production: {
                port: '80',
                ip: '66.228.60.200'
            }
        },
        dataReporter: {
            intervalTime: 180000,
            busLines: [485, 210, 125, 616, 625, 341]
        },
        dataServer: {
            host: 'dadosabertos.rio.rj.gov.br',
            path: '/apiTransporte/apresentacao/rest/index.cfm/onibus',
            intervalTime: 15000,
            timeout: 20000
        },
        maxSearchedItems: 10,
        numberOfLastLogLines: 40,
        driver: 'express',
        dataRequirer: 'datarequirer'
    },
    resources: [
        'resources/main',
        'resources/alldata'
    ],
    logger: {
        driver: 'winston',
        consoleConfig: {
            colorize: true,
            timestamp: Utils.getTimestamp()
        },
        fileConfig: {
            colorize: true,
            handleExceptions: true,
            filename: 'logs/data-service.log',
            timestamp: Utils.getTimestamp()
        }
    },
    analytics: {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    }
};