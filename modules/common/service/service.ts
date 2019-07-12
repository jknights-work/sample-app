import { HTTPOptions } from './http.options';

export interface Service {
    
    get (options : HTTPOptions) : any

    post (options : HTTPOptions) : any

    delete (options : HTTPOptions) : any

    put (options : HTTPOptions) : any
}