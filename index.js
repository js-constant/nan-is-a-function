const GetIntrinsic = require('es-intrinsic-cache')
const one = require('@positive-numbers/one')
const literally = require('literally')
const countingup = require("countingup")
const log = GetIntrinsic("%Math.log%")
const NOT_A_NUMBER = log(countingup.convert.toNegative(one))

module.exports = literally(NOT_A_NUMBER)