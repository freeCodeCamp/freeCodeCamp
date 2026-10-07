import { copyConfig } from '../moment/constructor';
import { configFromStringAndFormat } from './from-string-and-format';
import getParsingFlags from './parsing-flags';
import { isValid } from './valid';
import extend from '../utils/extend';

// date from string and array of format strings
export function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false,
        configfLen = config._f.length;

    if (configfLen === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < configfLen; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (isValid(tempConfig)) {
            validFormatFound = true;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
            if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
            ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                    bestFormatIsValid = true;
                }
            }
        } else {
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
    }

    extend(config, bestMoment || tempConfig);
}
