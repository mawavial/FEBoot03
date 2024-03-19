enum Color {Red, Green, Blue}
class Contact{ 
    id!: number;
    name: string;
    email: string;
    phone: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.phone = '';
    }

    print() {
        console.log(this.name);
    }
    
}


interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface IContact{ 
    id: number;
    name: string;
    birthDate?: Date;
    phoneNumber: string;
    address?: IAddress | null;
}

type CrazyType = Array<string> | string | object | number | boolean | null | undefined;

type Animal = string | null | undefined;

interface IAnimal {
    name: Animal;
    age: crazyType;
    isPet: crazyType;
}

let primaryContact: IContact = { 
    id: 1,
    name: 'John Doe',
    birthDate: new Date('16-09-1989'),
    phoneNumber: '123-456-7890',

}
