// ==UserScript==
// @name        Wykopowy agent zerowy
// @description Ukrywa zera(głosy) na wykopie
// @include     http://www.wykop.pl/*
// @version     0.2
// ==/UserScript==

if (typeof $ == 'undefined') {
	if (typeof unsafeWindow !== 'undefined' && unsafeWindow.jQuery) {
		// Firefox
		var $ = unsafeWindow.jQuery;
		main();
	} else {
		// Chrome
		addJQuery(main);
	}
} else {
	// Opera
	main();
}

function addJQuery(callback) {
	var script = document.createElement("script");
	script.textContent = "(" + callback.toString() + ")();";
	document.body.appendChild(script);
}

function main(){
	$('p.vC span:contains(0)').filter(function() {
		return $(this).text() === "0";
	}).hide();
}
