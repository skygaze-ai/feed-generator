"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuth = void 0;
const xrpc_server_1 = require("@atproto/xrpc-server");
const validateAuth = async (req, serviceDid, didResolver) => {
    const { authorization = '' } = req.headers;
    if (!authorization.startsWith('Bearer ')) {
        throw new xrpc_server_1.AuthRequiredError();
    }
    const jwt = authorization.replace('Bearer ', '').trim();
    return (0, xrpc_server_1.verifyJwt)(jwt, serviceDid, async (did) => {
        return didResolver.resolveAtprotoKey(did);
    });
};
exports.validateAuth = validateAuth;
