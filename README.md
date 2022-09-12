# Bookshelf-APP API

bookshelf application is a book data management system. This application is made to fulfill my submission task in dicoding. The application is made only on the backend side.

## Built With

[Hapi.js](https://hapi.dev/) - Backend Framework

## How to Use

These instructions will get this project up and running on your local machine.

### Prerequisites

You will need to install Node.js and its package manager, NPM. You can also install [nodemon](https://nodemon.io/) to run scripts automatically **(Optinal)**

### Installing

#### First you need to clone the repository. Run the following command :

```bash
git clone https://github.com/abilsabili50/
```

#### Enter the repository :

```bash
cd Bookshelf-Api
```

#### Install dependecies using :

```bash
npm install
```

#### Run project command

if you have installed nodemon, use the following command :

```bash
npm run dev
```

if you don't have installed nodemon then use the following command :

```bash
npm run start
```

# API Specs

## **A. Add Book**

This route serves as the endpoint for adding book data.

- Method : POST
- Endpoint : "/books"
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
	"name": "string",
	"year": "number",
	"author": "string",
	"summary": "string",
	"publisher": "string",
	"pageCount": "number",
	"readPage": "number",
	"reading": "boolean"
}
```

- Response :

```json
{
	"status": "success",
	"message": "Buku berhasil ditambahkan",
	"data": {
		"bookId": "string"
	}
}
```

## **B. Get All Books**

This route serves as the endpoint for retrieving all book data.

- Method : GET
- Endpoint : `/books`
- Header :
  - Accept : application/json
- Response :

```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "string",
        "name": "string",
        "publisher": "string"
      }
    ],
}
```

## **C. Get Detail Book**

This route serves as the endpoint for retrieving book details.

- Method : GET
- Endpoint : `/books/:bookId`
- Header :
  - Accept : application/json
- Response :

```json
{
	"status": "success",
	"data": {
		"book": {
			"id": "string",
			"name": "string",
			"year": "number",
			"author": "string",
			"summary": "string",
			"publisher": "string",
			"pageCount": "number",
			"readPage": "number",
			"reading": "boolean",
			"finished": "boolean",
			"insertedAt": "date",
			"updatedAt": "date"
		}
	}
}
```

## **D. Update Book**

This route serves as the endpoint for updating book data.

- Method : PUT
- Endpoint : `/books/:bookId`
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```json
{
	"name": "string",
	"year": "number",
	"author": "string",
	"summary": "string",
	"publisher": "string",
	"pageCount": "number",
	"readPage": "number",
	"reading": "boolean"
}
```

- Response :

```json
{
	"status": "success",
	"message": "Buku berhasil diperbarui"
}
```

## **E. Delete Book**

This route serves as the endpoint for deleting book data.

- Method : DELETE
- Endpoint : `/books/:bookId`
- Header :
  - Accept : application/json
- Response :

```json
{
	"status": "success",
	"message": "Buku berhasil dihapus"
}
```

# Learn More

Click [here](https://hapi.dev/tutorials/?lang=en_US) to read more complete documentation of hapi framework
