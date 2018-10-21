Basic MongoDB CRUD Operations - I
=================================
As it is with any database, you can create, read, update or delete documents. These operations are what is meant by CRUD operations. This guide contains basic mongodb CRUD operations.<br>

In mongodb, documents are simply objects with keys and values which are called fields and values respectively. For example, this object,`{"name":"Ama Doe"}`, is a document in mongodb. The key, `name` is a field. The value, `Ama Doe`, is a value.<br>

With this understanding, we can perform basic crud operations.

Create (C-RUD)
---------------
Documents can be created in mongodb with two methods. They are below.

1.` db.collection.insertOne(document);` <br>
  This method is used to insert or create one document in mongodb. <br> For instance, if we want to create this document, `{"name": "Ama Doe"}` in mongodb, we would simply type the following in the mongo shell: `db.collection.insertOne({"name":"Ama Doe"});`

2.`db.collection.insertMany([document,document]);` <br>
This method is used to insert or create many documents in mongodb. <br> For instance, if we want to create these documents, `{"name": "Ama Doe"}` and `{"age":"23"}` in mongodb, we would simply type the following in the mongo shell: `db.collection.insertOne([{"name":"Ama Doe"}, {"age": "23"}]);`<br>
