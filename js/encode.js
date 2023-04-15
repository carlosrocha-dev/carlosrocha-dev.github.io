const keyMap = {
	'a': 'ai',
	'e': 'enter',
	'i': 'imes',
	'o': 'ober',
	'u': 'ufat'
};

const reverseKeyMap = {
	'ai': 'a',
	'enter': 'e',
	'imes': 'i',
	'ober': 'o',
	'ufat': 'u'
};

function textDecoder(text, mode) {
	if (mode === 'encode') {
		return text.replace(/[aeiou]/g, function (match) {
			return keyMap[match];
		});
	} else if (mode === 'decode') {
		var replacementPattern = new RegExp(Object.keys(reverseKeyMap).join('|'), 'g');
		return text.replace(replacementPattern, function (match) {
			return reverseKeyMap[match];
		});
	}
}

function updateUI(visible) {
	const imageContainer = document.querySelector('.image-container');
	const textarea = document.getElementById('output');

	if (visible) {
		imageContainer.classList.remove('hidden');
		textarea.classList.remove('hidden');
		imageContainer.classList.add('no-background');
	} else {
		imageContainer.classList.add('hidden');
		textarea.classList.add('hidden');
		imageContainer.classList.remove('no-background');
	}
	}

function encryptText() {
	const inputContent = document.getElementById('inputContent');
	const originalText = inputContent.value;
	const encryptedText = textDecoder(originalText, 'encode');
	const outputTextarea = document.getElementById('output');
	outputTextarea.value = encryptedText;

	const messageElement = document.querySelector('.message');
	messageElement.classList.add('hidden');

	updateUI(true);
	}

	function decryptText() {
	const inputContent = document.getElementById('inputContent');
	const encryptedText = inputContent.value;
	const decryptedText = textDecoder(encryptedText, 'decode');
	const outputTextarea = document.getElementById('output');
	outputTextarea.value = decryptedText;

	const messageElement = document.querySelector('.message');
	messageElement.classList.add('hidden');
	updateUI(true);
	}

