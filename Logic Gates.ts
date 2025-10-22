//% color=#10C298 weight=107 icon="\uf1e6"
//% groups='["Logic gates", "Other"]'
//% block="Logic Gates"
namespace logicGates {
    /**
     * Full Adder as a boolean function, but it only returns carry-out.
     * @param a addend one
     * @param b addend two
     * @param cIn carry-in
     */
    //% block="add $a to $b with $cIn as carry-in to carry-out" weight=0
    //% group="Other"
    export function FullAdderToCarryOut(a: boolean, b: boolean, cIn: boolean): boolean {
        return a !== b && cIn || a && b;
    }
    /**
     * Full Adder as a boolean function, but it only returns sum.
     * @param a addend one
     * @param b addend two
     * @param cIn carry-in
     */
    //% block="add $a to $b with $cIn as carry-in to sum" weight=1
    //% group="Other"
    export function FullAdderToSum(a: boolean, b: boolean, cIn: boolean): boolean {
        return a !== b !== cIn;
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
function nimply(a: boolean, b: boolean): boolean {
    return a && !b;
}
/**
 * IMPLY gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a only if $b" weight=1
//% group="Logic gates"
function imply(a: boolean, b: boolean): boolean {
    return !a || b;
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
    return a === b;
}
/**
 * XOR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a or $b but not both" weight=3
//% group="Logic gates"
function xor(a: boolean, b: boolean): boolean {
    return a !== b;
}
/**
 * NOR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="not $a or $b" weight=4
//% group="Logic gates"
function nor(a: boolean, b: boolean): boolean {
    return !(a || b);
}
/**
 * OR gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a or $b" weight=5
//% group="Logic gates"
function or(a: boolean, b: boolean): boolean {
    return a || b;
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
    return !(a && b);
}
/**
 * AND gate as a boolean function.
 * @param a input one
 * @param b input two
 */
//% blockNamespace=logicGates
//% block="$a and $b" weight=7
//% group="Logic gates"
function and(a: boolean, b: boolean): boolean {
    return a && b;
}
/**
 * NOT gate as a boolean function.
 * @param a input one
 */
//% blockNamespace=logicGates
//% block="not $a" weight=8
//% group="Logic gates"
function not(a: boolean): boolean {
    return !a;
}
