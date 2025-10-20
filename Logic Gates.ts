/**
 * Logic gates and more.
 */
//% color=#10C298 weight=107 icon="\uf1e6"
//% groups='["Logic gates", "Other"]'
//% block="Logic Gates"
namespace logicGates {
    export function FullAdderToSum(a: boolean, b: boolean, carryIn: boolean) {
        return xor(xor(a, b), carryIn)
    }
}
/**
 * NIMPLY gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a and not $b" weight=0
//% group="Logic gates"
function nimply(a: boolean, b: boolean) {
    return a && !b
}
/**
 * IMPLY gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a only if $b" weight=1
//% group="Logic gates"
function imply(a: boolean, b: boolean) {
    return !a || b
}
/**
 * XNOR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a if and only if $b" weight=2
//% group="Logic gates"
function xnor(a: boolean, b: boolean) {
    return a === b
}
/**
 * XOR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a or $b but not both" weight=3
//% group="Logic gates"
function xor(a: boolean, b: boolean) {
    return a !== b
}
/**
 * NOR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="not $a or $b" weight=4
function nor(a: boolean, b: boolean) {
    return !a && !b
}
/**
 * OR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a or $b" weight=5
//% group="Logic gates"
function or(a: boolean, b: boolean) {
    return a || b
}
/**
 * NAND gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="not $a and $b" weight=6
//% group="Logic gates"
function nand(a: boolean, b: boolean) {
    return !a || !b
}
/**
 * AND gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a and $b" weight=7
//% group="Logic gates"
function and(a: boolean, b: boolean) {
    return a && b
}
/**
 * NOT gate as a boolean function.
 * @param a input one
 */
//% blockNamespace=logicGates
//% block="not $a" weight=8
//% group="Logic gates"
function not(a: boolean) {
    return !a
}
