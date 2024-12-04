const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse(this.response)
		console.log(resultado)
	}
});

xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John');
xhr.setRequestHeader('x-rapidapi-key', '4c0c7ed9aamsh944bfc8cb9a880fp10ca0ajsn88819979db0d');
xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

xhr.send();