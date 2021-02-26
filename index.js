//Dado un arreglo de 9 enteros, tengo que crear una función que valide si puedo agrupuar 3 tuplas de 3 enteros que den el mismo resultado al sumar los números de cada tupla
//ejemplo: [0, -2, -1, 3, 0, 0, -3, 1, 2] -> true
//porque puedo armar 3 grupos que al sumar los numeros dan un mismo resultado
//(0, -1, 1) = 0; (0, -2, 2) = 0, (0, -3, 3) = 0

const pruebaArreglo_exito = [0, -2, -1, 3, 0, 0, -3, 1, 2];
const pruebaArreglo_exito_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const pruebaArreglo_error = [2, 3, 5, 7, 10, 51, 16, 7, 8];

const suma = (arr) => arr.reduce(function (a, b) { return a + b });
const verificarIguales = arr => arr.every(val => val === arr[0]);
const permutator = (arr) => {
    var set = [];
    function permute(arr, data) {
        var cur, memo = data || [];
        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1)[0];
            if (arr.length === 0)
                set.push(memo.concat([cur]));
            permute(arr.slice(), memo.concat([cur]));
            arr.splice(i, 0, cur);
        }
        return set;
    }
    return permute(arr);
}
const agrupar = (arr) => {
    let newArray = [];
    let auxArray1 = [];
    let auxArray2 = [];
    let auxArray3 = [];
    arr.forEach((v, i) => {
        if (i < 3) {
            auxArray1.push(v);
        }
        if (i >= 3 && i < 6) {
            auxArray2.push(v);
        }
        if (i >= 6 && i < 9) {
            auxArray3.push(v);
        }
        if (i === 8) {
            newArray.push(suma(auxArray1));
            newArray.push(suma(auxArray2));
            newArray.push(suma(auxArray3));
        }
    });
    return newArray;
}
const obtener = (arr) => {
    if (Array.isArray(arr) && arr.length == 9) {
        const combinaciones = permutator(arr);
        return combinaciones.some(function (el) {
            if (verificarIguales(agrupar(el))) console.log(el);
            return verificarIguales(agrupar(el));
        });
    }
}

console.log(obtener(pruebaArreglo_error));