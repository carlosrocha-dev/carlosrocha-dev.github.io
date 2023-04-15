function copyText() {
	const outputTextarea = document.getElementById('output');
	const tempTextarea = document.createElement('textarea');
	tempTextarea.value = outputTextarea.value;
	document.body.appendChild(tempTextarea);
	tempTextarea.select();
	tempTextarea.setSelectionRange(0, 99999);
	document.execCommand('copy');
	document.body.removeChild(tempTextarea);
}

document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
	  const textarea = document.getElementById('output');
	  textarea.value = '';
	}
  });
