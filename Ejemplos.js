/*
cd "/mnt/c/Users/Edward/OneDrive/Documents/Cursos Online/M101x Introduction to MongoDB using the MEAN Stack/Introduction to MongoDB and Node.js/chapter-1"
*/

db.collection('movies').find({ director: 'George Lucas' }).toArray(function(error, docs) {
  console.log(docs);
});



db.collection('test').find().toArray(console.log);


module.exports = function() { };



./node_modules/.bin/mocha -g "works"

describe('my feature', function() {
  it('works', function() {});
  it('fails gracefully', function() {});
});
describe('my other feature', function() {
  it('sorta works', function() {});
  });

/*
Mongoose

Schema ---------|
                |----> Model ---> Document
Connection -----|


Schema design principle: principle of least cardinality
Schema design principle: store what you query for


MongoDB indexes 
Ayuda a realizar busquedas mas rapido

db.users.createIndex({name:1});
*/




/* Para encontrar todos los productos que están en la categoría 'Laptops'*/
db.products.find({ 'category.ancestors': 'laptops' });