enum ContactStatusEnum { 
    Active = 'Active',
    Inactive = 'Inactive',
    Deleted = 'Deleted'
}

class Contact {
    id: number;
    name: string;
    birthDate: Date;
    phone: string;
    status: ContactStatusEnum;

    constructor(id: number, name: string, birthDate: Date, phone: string, status: ContactStatusEnum) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.phone = phone;
        this.status = status;
    }
}

function clone(source: Contact): Contact {
    return {...source};
}


const contact = new Contact(1, 'John Doe', new Date(), '1234567890', ContactStatusEnum.Active);
console.log('%c%s', 'color: #00e600', JSON.stringify(contact));
const cloned = clone(contact);
console.log('%c%s', 'color: #b508ff', JSON.stringify(cloned));
