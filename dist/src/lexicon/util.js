"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasProp = exports.isObj = void 0;
/**
 * GENERATED CODE - DO NOT MODIFY
 */
function isObj(v) {
    return typeof v === 'object' && v !== null;
}
exports.isObj = isObj;
function hasProp(data, prop) {
    return prop in data;
}
exports.hasProp = hasProp;
