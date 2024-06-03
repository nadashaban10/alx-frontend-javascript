<<<<<<< HEAD
java script
=======
some Notes 

Constructor function: A special function within a class that's called automatically when you create a new object (or instance) of that class.
Role:
Initializes the object's state by assigning values to its properties.
Can perform any other setup tasks necessary before the object is used.
Prototype: A concept in object-oriented programming that serves as a blueprint for objects.
in JavaScript:
Every object has a hidden property called [[Prototype]] (internal slot) that links it to another object (its prototype).
When you try to access a property or method on an object, JavaScript first looks for it within the object itself. If not found, it follows the prototype chain, checking the prototype's properties and methods, and so on, until it finds the property or method or reaches the end of the chain.
This mechanism allows objects to inherit properties and methods from their prototypes, promoting code reuse and organization.

When you use new before a function call:

Creates a new empty object: This object will hold the properties and methods of the new instance.
Sets the object's prototype: The prototype is linked to the constructor function's prototype property. This establishes the inheritance chain, allowing the new object to access properties and methods defined in the constructor's prototype (and potentially further up the prototype chain).
Binds this: Inside the constructor function, the this keyword refers to the newly created object. This allows you to assign properties and call methods on the object being constructed.
Executes the constructor function: The constructor function's code is run, typically performing initialization tasks like setting initial property values or custom logic for the new object.
Returns the object (usually): By default, the new operator returns the newly created object after the constructor function finishes execution. However, the constructor can explicitly return a different object if needed.
>>>>>>> 485602b2f27796bf1e7b556cbd94e754db19d010
