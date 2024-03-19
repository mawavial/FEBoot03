"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Contact = /** @class */ (function () {
    function Contact() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.phone = '';
    }
    Contact.prototype.print = function () {
        console.log(this.name);
    };
    return Contact;
}());
var primaryContact = {
    id: 1,
    name: 'John Doe',
    birthDate: new Date('16-09-1989'),
    phoneNumber: '123-456-7890',
};
