async function loadData(url) {
	const response = await fetch(url);
	return await response.json();
	}

	function loadContent(data, lang) {
		if (data.hasOwnProperty(lang)) {
			const item = data[lang];

			// Selecting HTML elements
			const inputContent = document.getElementById('inputContent');
			const cryptBtn = document.getElementById('encrypt');
			const decryptBtn = document.getElementById('decrypt');
			const copyBtn = document.getElementById('copy');
			const hintInfo = document.querySelector('.info');
			const messageElement = document.querySelector('.message p');
			const hintElement = document.querySelector('.message span');

			// Injecting content into HTML elements
			inputContent.placeholder = item.inputContent;
			cryptBtn.value = item.cryptBtn;
			decryptBtn.value = item.decryptBtn;
			copyBtn.value = item.copyBtn;
			hintInfo.textContent = item.info;
			messageElement.textContent = item.message;
			hintElement.textContent = item.hint;
		}
	  }

	const url = '../content.json';

	(async function () {
	const jsonData = await loadData(url);

	// Select language buttons
	const languageButtons = document.querySelectorAll('.round-btn');

	// Add click event listeners
	languageButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const lang = button.value;
			loadContent(jsonData, lang);
		});
	});

	// Load initial content
	loadContent(jsonData, 'pt-br');
	})();
