const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse(this.response)
		document.getElementById("p").innerHTML = resultado.percentage +"%"
		console.log(resultado);
		if(parseInt(resultado.percentage)<20){
			document.getElementById("foto").src = "../img/pngwing.com.png"
		}if(parseInt(resultado.percentage)>20 && resultado.percentage<50){
				document.getElementById("foto").src = "./"
		}if(parseInt(resultado.percentage)<50){
			document.getElementById("foto").src = "./"
		}if(parseInt(resultado.percentage)>50 && resultado.percentage<75){
			document.getElementById("foto").src = "./"
		}if(parseInt(resultado.percentage)>75){
			document.getElementById("foto").src = "./"
		}
	}
});

document.getElementById("calc").addEventListener("click", function(){
	let nom1 = document.getElementById("n1").value
	let nom2 = document.getElementById("n2").value

	xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+nom1+'&fname='+nom2);
xhr.setRequestHeader('x-rapidapi-key', '4c0c7ed9aamsh944bfc8cb9a880fp10ca0ajsn88819979db0d');
xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

xhr.send();

})
