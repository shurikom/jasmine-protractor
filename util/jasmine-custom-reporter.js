const logger = require("./logger.js").logger;

class myReporter {

    jasmineStarted (suiteInfo) {
        logger.warn('Running suite with ' + suiteInfo.totalSpecsDefined);
    }

    suiteStarted (result) {
        logger.warn('Suite started: ' + result.description);
    }

    specStarted (result) {
        logger.warn('Spec started: ' + result.description);
    }

    specDone(result) {
        logger.verbose('Spec: ' + result.description + ' was ' + result.status);
        for (let i = 0; i < result.failedExpectations.length; i++) {
            logger.error('Failure: ' + result.failedExpectations[i].message);
            logger.error(result.failedExpectations[i].stack);
        }
    }

    suiteDone (result) {
        logger.verbose('Suite: ' + result.description + ' was ' + result.status);
        for (let i = 0; i < result.failedExpectations.length; i++) {
            logger.error('AfterAll ' + result.failedExpectations[i].message);
            logger.error(result.failedExpectations[i].stack);
        }
    }

    jasmineDone() {
        logger.warn('Finished suite');
    }
}

module.exports = myReporter;