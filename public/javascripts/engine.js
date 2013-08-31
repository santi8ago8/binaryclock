var BinaryClock = function() {
	var init = function() {
		var inteval = setInterval(setPoints, 1000);
		window.addEventListener('load', setPoints);
	};

	var setPoints = function() {
		var strDate = getFormatedDate();

		var general = [];
		for (var i = 0; i < 6; i++) {
			var c = getFormatByNumber(strDate[i]);
			for (var j = 0; j < c.length; j++) {
				general.push(c[j])
			};
		};

		for (var i = 0; i < 24; i++) {
			var elem = document.getElementsByClassName('pointLigth' + i)[0];
			if (general[i]) {
				elem.classList.add('pointOnOpen');
				elem.classList.remove('pointOnClose');
			} else {
				elem.classList.add('pointOnClose');
				elem.classList.remove('pointOnOpen');
			}
		};
	}

	var getFormatedDate = function() {
		var a = new Date();
		var horas = a.getHours();
		horas = horas <= 9 ? '0' + horas : horas;
		var minutos = a.getMinutes();
		minutos = minutos <= 9 ? '0' + minutos : minutos;
		var segundos = a.getSeconds();
		segundos = segundos <= 9 ? '0' + segundos : segundos;

		return horas.toString() + minutos.toString() + segundos.toString();
	}

	var getFormatByNumber = function(n) {
		var res;

		if (n == 0) res = [false, false, false, false];
		else if (n == 1) res = [false, false, false, true];
		else if (n == 2) res = [false, false, true, false];
		else if (n == 3) res = [false, false, true, true];
		else if (n == 4) res = [false, true, false, false];
		else if (n == 5) res = [false, true, false, true];
		else if (n == 6) res = [false, true, true, false];
		else if (n == 7) res = [false, true, true, true];
		else if (n == 8) res = [true, false, false, false];
		else if (n == 9) res = [true, false, false, true];

		return res
	};



	init();
}


new BinaryClock();