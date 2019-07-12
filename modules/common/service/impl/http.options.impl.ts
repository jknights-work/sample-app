import { HTTPOptions } from '../http.options';


export class Options implements HTTPOptions {

    headers : Headers;
    method : string;
    url : string;
    data : any

    constructor (headers : Object, method : string, url : string, data : any | null) {
        this.method = method;
        this.url = url;
        this.headers = this.setHeaders(headers);
        this.data = data;
    }

    public setHeaders (headers : any) : Headers {
        let result = new Headers(headers);
        return result;
    }

    public getData () {
        return JSON.stringify(this.data);
    }

}