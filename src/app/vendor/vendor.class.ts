export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    preapproved: boolean;

    constructor() {
        this.id = 0;
        this.preapproved = false;
    }
}