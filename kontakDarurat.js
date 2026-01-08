document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const nama = document.getElementById('nama').value;
		nomor = document.getElementById('nomor').value;
		if (nomor.startsWith('0')) {
			nomor = '+62' + nomor.slice(1);
		} else if (nomor.startsWith('62')) {
			nomor = '+' + nomor;
		}

		const contact = { nama, nomor };
		localStorage.setItem('kontakDarurat', JSON.stringify(contact));
		window.location.reload();
	});

	const savedContact = localStorage.getItem('kontakDarurat');
	if (savedContact) {
		const contact = JSON.parse(savedContact);
		document.getElementById('display-nama').textContent = contact.nama;
		document.getElementById('display-nomor').textContent = contact.nomor;
		document.getElementById('link').onclick = function () {
			window.open(
				'https://wa.me/' +
					contact.nomor.replace(/[^0-9]/g, '') +
					'?text=Darurat%20!%20Saya%20mengalami%20gejala%20serangan%20jantung.%20Mohon%20Bantu%20Segera%20!',
				'_blank'
			);
		};

		document
			.getElementById('delete-contact')
			.addEventListener('click', function () {
				localStorage.removeItem('kontakDarurat');
				window.location.reload();
			});

		document.getElementById('contact-display').classList.remove('hidden');
	} else {
		document.getElementById('display-nama').textContent = '-';
		document.getElementById('display-nomor').textContent = '-';
	}
});
