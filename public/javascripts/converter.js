class Converter {
    constructor(baseCurrencyUs, baseCurrencyRu, baseCurrencyEu) {
        this.baseCurrencyUs = baseCurrencyUs;
        this.baseCurrencyRu = baseCurrencyRu;
        this.baseCurrencyEu = baseCurrencyEu;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100; 
    }

    convertUsToUa(currency) {
        return this.roundTwoDecimals(currency * this.baseCurrencyUs);
    }

    convertUaToUs(currency) {
        return this.roundTwoDecimals(currency / this.baseCurrencyUs);
    }

    convertRuToUa(currency) {
        return this.roundTwoDecimals(currency * this.baseCurrencyRu);
    }

    convertUaToRu(currency) {
        return this.roundTwoDecimals(currency / this.baseCurrencyRu);
    }

    convertEuToUa(currency) {
        return this.roundTwoDecimals(currency * this.baseCurrencyEu);
    }

    convertUaToEu(currency) {
        return this.roundTwoDecimals(currency / this.baseCurrencyEu);
    }
}

module.exports = Converter;