import { User } from "../user/user.class";

export class Request {

    id: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    submittedDate: string;
    status: string;
    total: number;
    user: User;

    constructor() {
        this.id = 0;
        this.total = 0;
        this.submittedDate = (new Date()).toLocaleDateString();
        this.status = "NEW";
    }
}