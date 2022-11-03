# book record management

This is a book record management API Backend for the management of records and books.

# Routes and Endpoints

## /users

POSt: Create a new user
GET: Get all list of users

## /users{id}

GET: Get a user by Id
PUT: update a user by id
DELETE: Delete a user by id(check if he/she still has an issued book first)(is thbere any fine to be paid)

## /users/subscription-details{id}

GET:Get user subscription details

1. Date of subscription
2. Valid till
3. Fine if any

## /books

GET: Get all books
POST: Create/Add a new book

## /books{id}

GET: Get abook by id
POST: Update a book by id
PUT/PATCH

## /books/issued

GET: Get all issued books

## /books/issued/withFine

GET: Get all issued books with fine

## subsription types

Basic (3 months)
Standard(6 months)
Premium (9 months)

if the subscription date is 01/08/22
and subscription type is standard
the valid till date will be 01/02/22

if he has an issued book and the issued book is to be returned at 01/01/23
and the misses it, then he gets a fine of Rs. 100

if he has an issued book and the issued book is to be returned at 01/01/23

if he missed the date of return , and his subscrption also expris, then he will get a fine of Rs. 200/
