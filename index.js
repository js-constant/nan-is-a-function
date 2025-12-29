const GetIntrinsic = require('es-intrinsic-cache')
const PosInf = require('infinities').positiveInfinity()
const one = require('@positive-numbers/one')
const literally = require('literally')
const random = GetIntrinsic("%Math.random%")
const pow = GetIntrinsic("%Math.pow%")
const NOT_A_NUMBER = pow(random() + one, PosInf)

module.exports = literally(NOT_A_NUMBER)