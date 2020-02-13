const parseNumber = function(paramName, param) {
    if (!param) {
        return param;
    }
    if (isNaN(param)){
        throw `Error parsing ${paramName}: ${param} is not a number`;
    }
    return Number(param);
}

module.exports = {
    parseNumber
}