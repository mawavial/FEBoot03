"use strict";
var ContactStatusEnum;
(function (ContactStatusEnum) {
    ContactStatusEnum["Active"] = "Active";
    ContactStatusEnum["Inactive"] = "Inactive";
    ContactStatusEnum["Deleted"] = "Deleted";
})(ContactStatusEnum || (ContactStatusEnum = {}));
class Contact {
    constructor(id, name, birthDate, phone, status) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.phone = phone;
        this.status = status;
    }
}
// function clone(source){
//     return {...source};
// }
function clone(source) {
    return Object.apply({}, [source]);
}
const contact = new Contact(1, 'John Doe', new Date(), '1234567890', ContactStatusEnum.Active);
console.log('%c%s', 'color: #00e600', JSON.stringify(contact));
const cloned = clone(contact);
console.log('%c%s', 'color: #b508ff', JSON.stringify(cloned));
