const books = require("./books");
const { nanoid } = require("nanoid");

const tambahBuku = (request, h) => {
	const data = request.payload;

	if (!data.name) {
		const response = h.response({
			status: "fail",
			message: "Gagal menambahkan buku. Mohon isi nama buku",
		});
		response.code(400);
		return response;
	}

	if (data.readPage > data.pageCount) {
		const response = h.response({
			status: "fail",
			message:
				"Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
		});
		response.code(400);
		return response;
	}

	const id = nanoid(16);

	// const finished = data.pageCount === data.readPage ? true : false;
	const finished = data.pageCount === data.readPage;

	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;

	const newBook = { id, ...data, finished, insertedAt, updatedAt };

	books.push(newBook);

	const isSuccess = books.filter((book) => book.id === id).length > 0;

	if (isSuccess) {
		const response = h.response({
			status: "success",
			message: "Buku berhasil ditambahkan",
			data: {
				bookId: id,
			},
		});
		response.code(201);
		return response;
	}

	const response = h.response({
		status: "error",
		message: "Buku gagal ditambahkan",
	});
	response.code(500);
	return response;
};

const tampilSemuaBuku = (request, h) => {
	const { name, reading, finished } = request.query;
	// return request.query;  // {"name": "Dicoding"}

	const showBooks = [];

	// if (books.length > 0) {
	if (name || reading || finished) {
		if (name) {
			checker = name.toLowerCase();

			const names = books.map((book) => book.name.toLowerCase());

			for (let i = 0; i < names.length; i++) {
				if (names[i].includes(checker)) {
					showBooks.push({
						id: books[i].id,
						name: books[i].name,
						publisher: books[i].publisher,
					});
				}
			}
		}
		if (reading) {
			checker = reading == 1 ? true : false;

			const filteredBooks = books.filter((book) => book.reading == checker);

			filteredBooks.forEach((book) => {
				showBooks.push({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				});
			});
		}
		if (finished) {
			checker = finished == 1 ? true : false;

			const filteredBooks = books.filter((book) => book.finished == checker);

			filteredBooks.forEach((book) => {
				showBooks.push({
					id: book.id,
					name: book.name,
					publisher: book.publisher,
				});
			});
		}
	} else {
		books.forEach((book) => {
			let pushBook = {
				id: book.id,
				name: book.name,
				publisher: book.publisher,
			};

			showBooks.push(pushBook);
		});
	}
	// }

	return {
		status: "success",
		data: {
			books: showBooks,
		},
	};
};

const tampilDetailBuku = (request, h) => {
	const { bookId } = request.params;

	const book = books.filter((book) => book.id === bookId)[0];

	if (book !== undefined) {
		return {
			status: "success",
			data: {
				book,
			},
		};
	}

	const response = h.response({
		status: "fail",
		message: "Buku tidak ditemukan",
	});
	response.code(404);
	return response;
};

const ubahBuku = (request, h) => {
	const { bookId } = request.params;

	const data = request.payload;

	const updatedAt = new Date().toISOString();

	const index = books.findIndex((book) => book.id === bookId);

	if (!data.name) {
		const response = h.response({
			status: "fail",
			message: "Gagal memperbarui buku. Mohon isi nama buku",
		});
		response.code(400);
		return response;
	}

	if (data.readPage > data.pageCount) {
		const response = h.response({
			status: "fail",
			message:
				"Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
		});
		response.code(400);
		return response;
	}

	if (index !== -1) {
		books[index] = {
			...books[index],
			...data,
			updatedAt,
		};

		const response = h.response({
			status: "success",
			message: "Buku berhasil diperbarui",
		});
		response.code(200);
		return response;
	}

	const response = h.response({
		status: "fail",
		message: "Gagal memperbarui buku. Id tidak ditemukan",
	});
	response.code(404);
	return response;
};

const hapusBuku = (request, h) => {
	const { bookId } = request.params;

	const index = books.findIndex((book) => book.id === bookId);

	if (index !== -1) {
		books.splice(index, 1);
		const response = h.response({
			status: "success",
			message: "Buku berhasil dihapus",
		});
		response.code(200);
		return response;
	}

	const response = h.response({
		status: "fail",
		message: "Buku gagal dihapus. Id tidak ditemukan",
	});
	response.code(404);
	return response;
};

module.exports = {
	tambahBuku,
	tampilSemuaBuku,
	tampilDetailBuku,
	ubahBuku,
	hapusBuku,
};
