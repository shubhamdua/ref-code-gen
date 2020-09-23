export class User{

    constructor(
    public id: string,
    public name: string,
    public role: string,
    public city: string,
    public state: string,
    public contactNo: string,
    public emailId: string,
    public linkedTo: string,
    public createdOn: Date,
    public referralCode: string){}
    
}