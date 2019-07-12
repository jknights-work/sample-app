import { CommonModel } from '../../../common/model/model';


export class UserModel implements CommonModel {

    private email : string;
    private name : string;
    private password : string;

    constructor (email : string, name : string, password : string) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public get (property : string | null) {
        return {
            "emailAddress" : this.email,
            "password" : this.password,
            "name" : this.name
        };
    }

    public getAll () {
           return  "?emailAddress=" + this.email +
            "&password=" + this.password +
            "&forename=" + this.name +
            "&lastname=" + this.name;
    }

    public set (property : string, value : any) {

    }


}