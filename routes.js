const {
	tambahBuku,
	tampilSemuaBuku,
	tampilDetailBuku,
	ubahBuku,
	hapusBuku,
} = require("./handler");

const routes = [
	{
		path: "/books",
		method: "POST",
		handler: tambahBuku,
	},
	{
		path: "/books",
		method: "GET",
		handler: tampilSemuaBuku,
	},
	{
		path: "/books/{bookId}",
		method: "GET",
		handler: tampilDetailBuku,
	},
	{
		path: "/books/{bookId}",
		method: "PUT",
		handler: ubahBuku,
	},
	{
		path: "/books/{bookId}",
		method: "DELETE",
		handler: hapusBuku,
	},
];

module.exports = routes;
