// These font metrics are extracted from TeX
var sigma1 = 0.025;
var sigma2 = 0;
var sigma3 = 0;
var sigma4 = 0;
var sigma5 = 0.431;
var sigma6 = 1;
var sigma7 = 0;
var sigma8 = 0.677;
var sigma9 = 0.394;
var sigma10 = 0.444;
var sigma11 = 0.686;
var sigma12 = 0.345;
var sigma13 = 0.413;
var sigma14 = 0.363;
var sigma15 = 0.289;
var sigma16 = 0.150;
var sigma17 = 0.247;
var sigma18 = 0.386;
var sigma19 = 0.050;
var sigma20 = 2.390;
var sigma21 = 0.101;
var sigma22 = 0.250;

var xi1 = 0;
var xi2 = 0;
var xi3 = 0;
var xi4 = 0;
var xi5 = .431;
var xi6 = 1;
var xi7 = 0;
var xi8 = .04;
var xi9 = .111;
var xi10 = .166;
var xi11 = .2;
var xi12 = .6;
var xi13 = .1;

// This is just a mapping from common names to real metrics
var metrics = {
    xHeight: sigma5,
    quad: sigma6,
    num1: sigma8,
    num2: sigma9,
    num3: sigma10,
    denom1: sigma11,
    denom2: sigma12,
    sup1: sigma13,
    sup2: sigma14,
    sup3: sigma15,
    sub1: sigma16,
    sub2: sigma17,
    supDrop: sigma18,
    subDrop: sigma19,
    delim1: sigma20,
    delim2: sigma21,
    axisHeight: sigma22,
    defaultRuleThickness: xi8,
    bigOpSpacing1: xi9,
    bigOpSpacing2: xi10,
    bigOpSpacing3: xi11,
    bigOpSpacing4: xi12,
    bigOpSpacing5: xi13
};

// This map is generated by metrics/metric_parse.py
var metricMap = {
    "roman": {
        "depth": {
            "\u2218": 0.0, 
            "\u03a5": 0.0, 
            "$": 0.056, 
            "\u03a9": 0.0, 
            "(": 0.25, 
            ",": 0.193, 
            "0": 0.022, 
            "4": 0.0, 
            "8": 0.022, 
            "<": 0.04, 
            "@": 0.011, 
            "D": 0.0, 
            "H": 0.0, 
            "L": 0.0, 
            "P": 0.0, 
            "T": 0.0, 
            "\u00d7": 0.0, 
            "X": 0.0, 
            "\u2264": 0.137, 
            "`": 0.0, 
            "d": 0.011, 
            "h": 0.0, 
            "l": 0.0, 
            "p": 0.194, 
            "t": 0.011, 
            "\u00f7": 0.029, 
            "x": 0.0, 
            "|": 0.25, 
            "\u2192": 0.011, 
            "\u2217": 0.0, 
            "\u039e": 0.0, 
            "\u00a0": 0.0, 
            "\u03a6": 0.0, 
            "+": 0.083, 
            "/": 0.25, 
            "3": 0.022, 
            "7": 0.022, 
            ";": 0.193, 
            "?": 0.0, 
            "C": 0.022, 
            "G": 0.022, 
            "K": 0.0, 
            "O": 0.022, 
            "S": 0.022, 
            "W": 0.022, 
            "[": 0.25, 
            "c": 0.011, 
            "g": 0.206, 
            "\u2032": 0.0, 
            "k": 0.0, 
            "o": 0.011, 
            "s": 0.011, 
            "w": 0.011, 
            "\u0393": 0.0, 
            "\u2212": 0.0, 
            "\u039b": 0.0, 
            "\u221e": 0.011, 
            "\u03a3": 0.0, 
            "\"": 0.0, 
            ".": 0.0, 
            "\u00b1": 0.0, 
            "2": 0.0, 
            "6": 0.022, 
            ":": 0.0, 
            ">": 0.04, 
            "B": 0.0, 
            "\u22c5": 0.0, 
            "F": 0.0, 
            "J": 0.022, 
            "N": 0.0, 
            "R": 0.022, 
            "V": 0.022, 
            "\u2265": 0.137, 
            "Z": 0.0, 
            "b": 0.011, 
            "f": 0.0, 
            "j": 0.205, 
            "n": 0.0, 
            "r": 0.0, 
            "v": 0.011, 
            "z": 0.0, 
            "\u2190": 0.011, 
            "\u0394": 0.0, 
            "\u0398": 0.022, 
            "!": 0.0, 
            "\u03a0": 0.0, 
            ")": 0.25, 
            "\u03a8": 0.0, 
            "1": 0.0, 
            "5": 0.022, 
            "9": 0.022, 
            "=": 0.0, 
            "A": 0.0, 
            "E": 0.0, 
            "I": 0.0, 
            "M": 0.0, 
            "Q": 0.194, 
            "U": 0.022, 
            "Y": 0.0, 
            "]": 0.25, 
            "a": 0.011, 
            "e": 0.011, 
            "i": 0.0, 
            "m": 0.0, 
            "q": 0.194, 
            "u": 0.011, 
            "y": 0.205
        }, 
        "height": {
            "\u2218": 0.444, 
            "\u03a5": 0.705, 
            "$": 0.75, 
            "\u03a9": 0.705, 
            "(": 0.75, 
            ",": 0.106, 
            "0": 0.666, 
            "4": 0.677, 
            "8": 0.666, 
            "<": 0.54, 
            "@": 0.705, 
            "D": 0.683, 
            "H": 0.683, 
            "L": 0.683, 
            "P": 0.683, 
            "T": 0.677, 
            "\u00d7": 0.491, 
            "X": 0.683, 
            "\u2264": 0.636, 
            "`": 0.693, 
            "d": 0.694, 
            "h": 0.694, 
            "l": 0.694, 
            "p": 0.442, 
            "t": 0.615, 
            "\u00f7": 0.529, 
            "x": 0.431, 
            "|": 0.75, 
            "\u2192": 0.511, 
            "\u2217": 0.465, 
            "\u039e": 0.677, 
            "\u00a0": 0.0, 
            "\u03a6": 0.683, 
            "+": 0.583, 
            "/": 0.75, 
            "3": 0.666, 
            "7": 0.676, 
            ";": 0.431, 
            "?": 0.705, 
            "C": 0.705, 
            "G": 0.705, 
            "K": 0.683, 
            "O": 0.705, 
            "S": 0.705, 
            "W": 0.683, 
            "[": 0.75, 
            "c": 0.448, 
            "g": 0.453, 
            "\u2032": 0.559, 
            "k": 0.694, 
            "o": 0.448, 
            "s": 0.448, 
            "w": 0.431, 
            "\u0393": 0.68, 
            "\u2212": 0.27, 
            "\u039b": 0.716, 
            "\u221e": 0.442, 
            "\u03a3": 0.683, 
            "\"": 0.694, 
            ".": 0.106, 
            "\u00b1": 0.666, 
            "2": 0.666, 
            "6": 0.666, 
            ":": 0.431, 
            ">": 0.54, 
            "B": 0.683, 
            "\u22c5": 0.303, 
            "F": 0.68, 
            "J": 0.683, 
            "N": 0.683, 
            "R": 0.683, 
            "V": 0.683, 
            "\u2265": 0.636, 
            "Z": 0.683, 
            "b": 0.694, 
            "f": 0.705, 
            "j": 0.669, 
            "n": 0.442, 
            "r": 0.442, 
            "v": 0.431, 
            "z": 0.431, 
            "\u2190": 0.511, 
            "\u0394": 0.716, 
            "\u0398": 0.705, 
            "!": 0.716, 
            "\u03a0": 0.68, 
            ")": 0.75, 
            "\u03a8": 0.683, 
            "1": 0.666, 
            "5": 0.666, 
            "9": 0.666, 
            "=": 0.367, 
            "A": 0.716, 
            "E": 0.68, 
            "I": 0.683, 
            "M": 0.683, 
            "Q": 0.705, 
            "U": 0.683, 
            "Y": 0.683, 
            "]": 0.75, 
            "a": 0.448, 
            "e": 0.448, 
            "i": 0.669, 
            "m": 0.442, 
            "q": 0.442, 
            "u": 0.442, 
            "y": 0.431
        }
    }, 
    "slanted": {
        "depth": {}, 
        "height": {}
    }, 
    "bold": {
        "depth": {}, 
        "height": {}
    }, 
    "italic": {
        "depth": {
            "A": 0.0, 
            "V": 0.022, 
            "C": 0.022, 
            "B": 0.0, 
            "x": 0.011, 
            "E": 0.0, 
            "D": 0.0, 
            "q": 0.194, 
            "G": 0.022, 
            "F": 0.0, 
            "\u03b1": 0.011, 
            "I": 0.0, 
            "\u03b3": 0.215, 
            "\u03b2": 0.194, 
            "\u03b5": 0.022, 
            "\u03b4": 0.012, 
            "\u03b7": 0.216, 
            "\u03b6": 0.205, 
            "\u03b9": 0.011, 
            "\u03b8": 0.011, 
            "\u03bb": 0.013, 
            "\u03ba": 0.011, 
            "\u03bd": 0.0, 
            "\u03bc": 0.216, 
            "\u03be": 0.205, 
            "\u03c1": 0.216, 
            "\u03c0": 0.011, 
            "\u03c3": 0.011, 
            "\u03c2": 0.108, 
            "\u03c5": 0.011, 
            "\u03c4": 0.012, 
            "\u03c7": 0.205, 
            "\u03c6": 0.218, 
            "\u03c9": 0.011, 
            "\u03c8": 0.205, 
            "K": 0.0, 
            "J": 0.022, 
            "M": 0.0, 
            "L": 0.0, 
            "O": 0.022, 
            "N": 0.0, 
            "\u03d1": 0.011, 
            "P": 0.0, 
            "S": 0.022, 
            "R": 0.022, 
            "\u03d5": 0.205, 
            "T": 0.0, 
            "W": 0.022, 
            "\u03d6": 0.011, 
            "Y": 0.0, 
            "X": 0.0, 
            "w": 0.011, 
            "Z": 0.0, 
            "a": 0.011, 
            "Q": 0.194, 
            "c": 0.011, 
            "b": 0.011, 
            "e": 0.011, 
            "d": 0.011, 
            "g": 0.205, 
            "f": 0.205, 
            "i": 0.011, 
            "h": 0.011, 
            "k": 0.011, 
            "j": 0.205, 
            "m": 0.011, 
            "l": 0.011, 
            "o": 0.011, 
            "n": 0.011, 
            "\u03f1": 0.194, 
            "p": 0.194, 
            "s": 0.011, 
            "r": 0.011, 
            "u": 0.011, 
            "t": 0.011, 
            "H": 0.0, 
            "v": 0.011, 
            "y": 0.205, 
            "U": 0.022, 
            "z": 0.011
        }, 
        "height": {
            "A": 0.716, 
            "V": 0.683, 
            "C": 0.705, 
            "B": 0.683, 
            "x": 0.442, 
            "E": 0.68, 
            "D": 0.683, 
            "q": 0.442, 
            "G": 0.705, 
            "F": 0.68, 
            "\u03b1": 0.442, 
            "I": 0.683, 
            "\u03b3": 0.442, 
            "\u03b2": 0.706, 
            "\u03b5": 0.453, 
            "\u03b4": 0.711, 
            "\u03b7": 0.442, 
            "\u03b6": 0.697, 
            "\u03b9": 0.442, 
            "\u03b8": 0.705, 
            "\u03bb": 0.694, 
            "\u03ba": 0.442, 
            "\u03bd": 0.442, 
            "\u03bc": 0.442, 
            "\u03be": 0.697, 
            "\u03c1": 0.442, 
            "\u03c0": 0.431, 
            "\u03c3": 0.431, 
            "\u03c2": 0.442, 
            "\u03c5": 0.442, 
            "\u03c4": 0.431, 
            "\u03c7": 0.442, 
            "\u03c6": 0.442, 
            "\u03c9": 0.442, 
            "\u03c8": 0.694, 
            "K": 0.683, 
            "J": 0.683, 
            "M": 0.683, 
            "L": 0.683, 
            "O": 0.705, 
            "N": 0.683, 
            "\u03d1": 0.705, 
            "P": 0.683, 
            "S": 0.705, 
            "R": 0.683, 
            "\u03d5": 0.694, 
            "T": 0.677, 
            "W": 0.683, 
            "\u03d6": 0.431, 
            "Y": 0.683, 
            "X": 0.683, 
            "w": 0.442, 
            "Z": 0.683, 
            "a": 0.442, 
            "Q": 0.705, 
            "c": 0.442, 
            "b": 0.694, 
            "e": 0.442, 
            "d": 0.694, 
            "g": 0.442, 
            "f": 0.705, 
            "i": 0.661, 
            "h": 0.694, 
            "k": 0.694, 
            "j": 0.661, 
            "m": 0.442, 
            "l": 0.694, 
            "o": 0.442, 
            "n": 0.442, 
            "\u03f1": 0.442, 
            "p": 0.442, 
            "s": 0.442, 
            "r": 0.442, 
            "u": 0.442, 
            "t": 0.626, 
            "H": 0.683, 
            "v": 0.442, 
            "y": 0.442, 
            "U": 0.683, 
            "z": 0.442
        }
    }, 
    "typewriter": {
        "depth": {}, 
        "height": {}
    }
};

var getCharacterMetrics = function(character, style) {
    if (character in metricMap[style].height) {
        return {
            height: metricMap[style].height[character],
            depth: metricMap[style].depth[character]
        };
    } else {
        return null;
    }
};

module.exports = {
    metrics: metrics,
    getCharacterMetrics: getCharacterMetrics
};