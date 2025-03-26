// El objeto con el que jugarás será este:

const towerData = {
  levelOne: {
    vowels: [] // Vocales extraídas
  },
  levelTwo: {
    consonants: [] // Consonantes extraídas
  },
  levelThree: {
    words: [] // Palabras extraídas en orden normal
  },
  levelFour: {
    wordLengths: [] // Longitud de cada palabra
  },
  levelFive: {
    uppercasedWords: [], // Palabras en mayúsculas
    lowercasedWords: [] // Palabras en minúsculas
  },
  levelSix: {
    secretMessage: '' // Mensaje codificado usando reglas especiales
  },
  levelSeven: {
    totalLength: 0 // Suma total de la longitud de todas las palabras
  },
  levelEight: {
    reversedWords: [] // Palabras invertidas de la frase original
  },
  levelNine: {
    randomCode: '' // Código aleatorio generado en base a toda la información
  },
  levelTen: {
    finalMessage: '' // Código final calculado usando todos los niveles
  }
};
console.log(towerData);

// 🎯 Objetivo General:
// Procesar una frase introducida por el usuario y transformarla siguiendo reglas específicas en cada nivel.

// 🏰 Niveles y Reglas:

// 1️⃣ Nivel Uno: La Cámara de las Voces Perdidas
// Extrae todas las vocales de la frase introducida y almacénalas en towerData.levelOne.vowels.
vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';

const getVowels = sentence => {
  const allVowels = [];
  for (letter of sentence) {
    if (vowels.includes(letter)) {
      allVowels.push(letter);
    }
  }
  towerData.levelOne.vowels = allVowels;
};

// 2️⃣ Nivel Dos: La Biblioteca de Consonantes Prohibidas
// Extrae todas las consonantes de la frase y almacénalas en towerData.levelTwo.consonants.

const getConsonants = sentence => {
  const allConsonants = [];
  for (letter of sentence) {
    if (!vowels.includes(letter) && letter !== ' ') {
      allConsonants.push(letter);
    }
  }
  towerData.levelTwo.consonants = allConsonants;
};

// 3️⃣ Nivel Tres: El Salón de las Palabras Fragmentadas
// Divide la frase en palabras y guárdalas en towerData.levelThree.words.

const splitWordsOfSentence = sentence => {
  const splitSentence = sentence.split(' ');
  towerData.levelThree.words = splitSentence;
  return splitSentence;
};

// 4️⃣ Nivel Cuatro: La Sala de la Longitud Eterna
// Calcula la longitud de cada palabra de towerData.levelThree.words y guárdalas en towerData.levelFour.wordLengths.
const calculateWordsLength = splitWords => {
  const allWordsLength = [];
  for (const word of splitWords) {
    allWordsLength.push(word.length);
  }
  towerData.levelFour.wordLengths = allWordsLength;
};

// 5️⃣ Nivel Cinco: El Espejo Dual
// Convierte cada palabra de towerData.levelThree.words a mayúsculas y guárdalas en towerData.levelFive.uppercasedWords.

const fillTower = sentence => {
  const levelOne = getVowels(sentence);
  const levelTwo = getConsonants(sentence);
  const levelThree = splitWordsOfSentence(sentence);
  const levelFour = calculateWordsLength(levelThree);
};
fillTower('Me cago en to');

// Convierte cada palabra de towerData.levelThree.words a minúsculas y guárdalas en towerData.levelFive.lowercasedWords.

// 6️⃣ Nivel Seis: El Encriptador de Secretos
// Crea un mensaje secreto aplicando las siguientes reglas:

// Vocales se reemplazan por números:

// a → 1, e → 2, i → 3, o → 4, u → 5

// Investiga la función replaceAll y las expresiones regulares

// Consonantes se reemplazan por la consonante anterior en el alfabeto (excepto b -> z).

// Espacios se reemplazan por una letra aleatoria del alfabeto.

// Guarda el resultado en towerData.levelSix.secretMessage.

// 7️⃣ Nivel Siete: El Oráculo de la Suma
// Calcula la suma total de las longitudes de todas las palabras obtenidas en el nivel 4 y almacénalo en towerData.levelSeven.totalLength.

// 8️⃣ Nivel Ocho: El Reflejo Invertido
// Invierte cada palabra del array towerData.levelThree.words y guárdalas en towerData.levelEight.reversedWords.

// 9️⃣ Nivel Nueve: La Cámara del Códex Aleatorio
// Genera un código único combinando:

// La primera letra de cada palabra invertida (nivel 8).

// Los suma de los números generados en towerData.levelSeven.totalLength dividido entre 2.

// Un número aleatorio entre 1000 y 9999.

// Almacena el código generado en towerData.levelNine.randomCode.

// 🔟 Nivel Diez: La Prueba Suprema - El Guardián del Código Final
// Usa TODOS los valores obtenidos en los niveles anteriores para generar un código maestro único.

// La fórmula del código maestro será la siguiente:

// finalMessage = (Total de vocales _ Longitud total obtenida en el nivel 7) + (Cantidad de consonantes _ Número aleatorio generado en Nivel 9) - (Número de palabras * Número de caracteres en el mensaje secreto)
