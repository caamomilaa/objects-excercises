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
const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
const consonants = 'bcdfghjklmnñpqrstuvwxyz';
const alphabet = 'abcdefghijklmnñopqrstuvwxyz';

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

	return allWordsLength;
};

// 5️⃣ Nivel Cinco: El Espejo Dual
// Convierte cada palabra de towerData.levelThree.words a mayúsculas y guárdalas en towerData.levelFive.uppercasedWords.

const transformWordsToUpperCase = words => {
	const wordsToUpperCase = [];
	for (const word of words) {
		wordsToUpperCase.push(word.toUpperCase());
	}
	towerData.levelFive.uppercasedWords = wordsToUpperCase;
};

// Convierte cada palabra de towerData.levelThree.words a minúsculas y guárdalas en towerData.levelFive.lowercasedWords.

const transformWordsToLowerCase = words => {
	const wordsToLowerCase = [];
	for (const word of words) {
		wordsToLowerCase.push(word.toLowerCase());
	}
	towerData.levelFive.lowercasedWords = wordsToLowerCase;
};

// 6️⃣ Nivel Seis: El Encriptador de Secretos
// Crea un mensaje secreto aplicando las siguientes reglas:

// Vocales se reemplazan por números:
// a → 1, e → 2, i → 3, o → 4, u → 5
// Investiga la función replaceAll y las expresiones regulares
// Consonantes se reemplazan por la consonante anterior en el alfabeto (excepto b -> z).
// Espacios se reemplazan por una letra aleatoria del alfabeto.
// Guarda el resultado en towerData.levelSix.secretMessage.

const getEncriptedMessage = sentence => {
	let secretMessage = '';
	let finalMessage = '';
	secretMessage = sentence
		.replaceAll(/a/gi, 1)
		.replaceAll(/e/gi, 2)
		.replaceAll(/i/gi, 3)
		.replaceAll(/o/gi, 4)
		.replaceAll(/u/gi, 5);

	for (const letter of secretMessage.toLowerCase()) {
		if (letter === 'b' || letter === 'B') {
			finalMessage += 'z';
		} else if (consonants.includes(letter)) {
			finalMessage += consonants.charAt(consonants.indexOf(letter) - 1);
		} else if (letter === ' ') {
			finalMessage += alphabet.charAt(
				Math.floor(Math.random() * alphabet.length)
			);
		} else {
			finalMessage += letter;
		}
	}
	towerData.levelSix.secretMessage = finalMessage;

	return finalMessage;
};

// 7️⃣ Nivel Siete: El Oráculo de la Suma
// Calcula la suma total de las longitudes de todas las palabras obtenidas en el nivel 4 y almacénalo en towerData.levelSeven.totalLength.

const calculateWordLength = words => {
	let totalLength = 0;
	for (const wordLength of words) {
		totalLength += wordLength;
	}
	towerData.levelSeven.totalLength = totalLength;
};

// 8️⃣ Nivel Ocho: El Reflejo Invertido
// Invierte cada palabra del array towerData.levelThree.words y guárdalas en towerData.levelEight.reversedWords.

const reversedWords = words => {
	const reversedWordList = [];
	for (const word of words) {
		const reversedWord = word.split('').reverse().join('');
		reversedWordList.push(reversedWord);
	}
	towerData.levelEight.reversedWords = reversedWordList;
};

// 9️⃣ Nivel Nueve: La Cámara del Códex Aleatorio
// Genera un código único combinando:

// La primera letra de cada palabra invertida (nivel 8).

// Los suma de los números generados en towerData.levelSeven.totalLength dividido entre 2.

// Un número aleatorio entre 1000 y 9999.

// Almacena el código generado en towerData.levelNine.randomCode.

const randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);

const uniqueRandomCode = (reversedWords, numbersLength) => {
	let lettersCode = '';
	let numbersCode = numbersLength / 2;

	for (const word of reversedWords) {
		lettersCode += word.charAt(0);
	}
	const randomCode = lettersCode + numbersCode + randomNumber;
	towerData.levelNine.randomCode = randomCode;
};

// 🔟 Nivel Diez: La Prueba Suprema - El Guardián del Código Final
// Usa TODOS los valores obtenidos en los niveles anteriores para generar un código maestro único.

// La fórmula del código maestro será la siguiente:

// finalMessage = (Total de vocales _ Longitud total obtenida en el nivel 7) + (Cantidad de consonantes _ Número aleatorio generado en Nivel 9) - (Número de palabras * Número de caracteres en el mensaje secreto)

const getFinalMessage = (
	vowels,
	totalNumbersLenght,
	consonants,
	aleatoryNumber,
	words,
	sentence
) => {
	const totalVowels = vowels.length;
	const totalConsonants = consonants.length;

	const totalWords = words.length;
	const totalCharacters = sentence.length;

	const getFinalMessage =
		totalVowels -
		totalNumbersLenght +
		(totalConsonants - aleatoryNumber) -
		totalWords * totalCharacters;

	towerData.levelTen.finalMessage = getFinalMessage;
};

const fillTower = sentence => {
	const levelOne = getVowels(sentence);
	const levelTwo = getConsonants(sentence);
	const levelThree = splitWordsOfSentence(sentence);
	const levelFour = calculateWordsLength(levelThree);
	const levelFivePartOne = transformWordsToUpperCase(levelThree);
	const levelFivePartTwo = transformWordsToLowerCase(levelThree);
	const levelSix = getEncriptedMessage(sentence);
	const levelSeven = calculateWordLength(levelFour);
	const levelEight = reversedWords(levelThree);
	const levelNine = uniqueRandomCode(levelEight, levelSeven);
	const levelTen = getFinalMessage(
		levelOne,
		levelSeven,
		levelTwo,
		aleatoryNumber,
		levelThree,
		sentence
	);
};
fillTower('Me cago en to');
