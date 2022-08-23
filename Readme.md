//mini project to perform crud operations using mongodb and mongoose.

--- steps ----

1.Install mongodb on the system from official site of mongodb (version used - 4.8.1)

2. commands used for installation of express ,mongoose and nodemon
   --> npm install express (version- 4.18.1)
   -->npm install mongoose (version -6.5.2)
   --> npm install nodemon (version- 2.0.19)

3.made connection with database using mongoose in app.js.

4. created product.js file in models folder in which schema for the productDB database is created.

5. Created productController.js file in controllers folder
   --> created functions to getAllproducts , getProduct , updateProduct and deleteProduct
   -->used product.find() to get all products from the database
   --> used product.findById() to get a single product , update a single product and delete a product.

6. created products.js in routes folder for routing
   --> used get method to get produts from database
   --> post method to add data in the database
   --> patch to update data
   -->delete to delete data

--> Type npm start in terminal for starting project .
