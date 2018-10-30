export class User {
    id: number;
    userName: string;
    password: string;
    admin: boolean;
    email: string;
    phoneNumber: string;
    reviewer: boolean;
    firstName: string;
    lastName: string;

    constructor() {
        this.id = 0;
        this.reviewer = false;
        this.admin = false;
    }

}