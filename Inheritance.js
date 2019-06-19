/* Inheritance */

function SuperClass () {
  this.name = 'SuperClass'
}

SuperClass.prototype.getName = function () {
  return this.name
}

function SubClass () {
  SuperClass.call(this)
  this.type = 1
}

/* A property defined at this point will be overwritten */
// SubClass.prototype.getType = function () {
//   return this.type
// }

SubClass.prototype = new SuperClass()

SubClass.prototype.getType = function () {
  return this.type
}

var obj = new SubClass()
console.log(obj.name)
console.log(obj.type)
console.log(obj.getName())
console.log(obj.getType())
