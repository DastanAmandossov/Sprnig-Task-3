	function check() {
		let summa = document.getElementById("summa").value; // let summa = 50000
		let x = document.getElementById("convert").value; // let x = "EUR";

		let dollar = 429;
		let euro = 507;
        let dollars = 431;
        let euros =509;
		let resultDollar;
		let resultEuro;
		let resultTenge;

		if(qwerty.value==="b"){
            if (x==="KZT") {
			resultDollar = (summa/dollar).toFixed(2);
			resultEuro = (summa/euro).toFixed(2);
			document.getElementById("USD").value=resultDollar;
			document.getElementById("EUR").value=resultEuro;
			document.getElementById("KZT").value="-";
		    }else if (x==="EUR") {
			resultTenge = (summa*euro);
			resultDollar = (resultTenge/dollar).toFixed(2);
			document.getElementById("KZT").value=resultTenge;
			document.getElementById("USD").value=resultDollar;
			document.getElementById("EUR").value="-";
		    }else if(x==="USD"){
			resultTenge = (summa*dollar);
			resultEuro = (resultTenge/euro).toFixed(2);
			document.getElementById("KZT").value=resultTenge;
			document.getElementById("USD").value="-";
			document.getElementById("EUR").value=resultEuro;
		    }
        }
        if(qwerty.value==="s"){
            if (x==="KZT") {
            resultDollar = (summa/dollars).toFixed(2);
            resultEuro = (summa/euros).toFixed(2);
            document.getElementById("USD").value=resultDollar;
            document.getElementById("EUR").value=resultEuro;
            document.getElementById("KZT").value="-";
            }else if (x==="EUR") {
            resultTenge = (summa*euros);
            resultDollar = (resultTenge/dollars).toFixed(2);
            document.getElementById("KZT").value=resultTenge;
            document.getElementById("USD").value=resultDollar;
            document.getElementById("EUR").value="-";
            }else if(x==="USD"){
            resultTenge = (summa*dollars);
            resultEuro = (resultTenge/euros).toFixed(2);
            document.getElementById("KZT").value=resultTenge;
            document.getElementById("USD").value="-";
            document.getElementById("EUR").value=resultEuro;
            }
        }
}
