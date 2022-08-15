function esPalindromo(letraAverificar) {

    function InvertirLetra(letraAinvertir) {


        let caracteres = letraAinvertir.split(''),
            indiceInicial = 0,
            indiceFinal = caracteres.length - 1;

        while (indiceInicial < indiceFinal) {
            let izquierda = caracteres[indiceInicial];
            caracteres[indiceInicial] = caracteres[indiceFinal];
            caracteres[indiceFinal] = izquierda;

            indiceInicial++;
            indiceFinal--;
        }
        return caracteres.join('');
    }

    return (letraAverificar === InvertirLetra(letraAverificar));
}

function mostrarListaDePalindromos(texto) {
    let subLetras = []
    let palindromos = []
    let indiceInicial = 0
    let acomuladorDeLetras = ''


    function palindromosConTamanoMayorA3(palindromos) {
        return palindromos.filter(palindromo => palindromo.length > 3)
    }

    function mostrarPalindromos(palindromos) {

        console.log('las cadenas de texto palíndromos con más de 3 letras son: ', palindromosConTamanoMayorA3(palindromos).join())
    }

    function agregarPalindromo(palindromo) {
        palindromos.push(palindromo)
    }

    function limpiarAcomuladorDeLetras() {
        acomuladorDeLetras = ''
    }

    function obtenerPalindromos(texto) {
        for (let indiceFinal = texto.length - 1; indiceFinal >= indiceInicial; indiceFinal--) {

            subLetras.push(texto[indiceFinal])


            for (let indiceSubLetras = subLetras.length - 1; indiceSubLetras >= 0; indiceSubLetras--) {
                acomuladorDeLetras = acomuladorDeLetras.concat(subLetras[indiceSubLetras])


                if (esPalindromo(acomuladorDeLetras)) {

                    agregarPalindromo(acomuladorDeLetras)

                }

            }

            limpiarAcomuladorDeLetras()

        }
        mostrarPalindromos(palindromos)

    }
    
    obtenerPalindromos(texto)

}

let texto = `anulalalunapaisajemontanaguamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosoportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero`
mostrarListaDePalindromos(texto)