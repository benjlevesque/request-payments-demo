"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios_1 = require("axios");
const defaultOptions = {
    apiUrl: "http://accounts.request.network/api"
};
class Request {
    constructor(apiKey, options) {
        this.getSignedTransaction = ({ amount, currency, data, expirationDate, paymentAddress }) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.post("/raw-broadcast-tx", {
                    expectedAmount: amount.toFixed(6).toString(),
                    currency,
                    data,
                    expirationDate,
                    paymentAddress
                });
                return response.data;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error while creating request: " + error);
            }
        });
        this.handler = (paymentAddress) => (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { amount, data, currency } = req.body;
            const tx = yield this.getSignedTransaction({
                amount,
                currency,
                data,
                paymentAddress
            });
            res.send(tx);
        });
        options = Object.assign({}, defaultOptions, options);
        this.client = axios_1.default.create({
            baseURL: options.apiUrl,
            headers: {
                authorization: apiKey
            }
        });
    }
}
module.exports = (apiKey, options) => new Request(apiKey, options);
