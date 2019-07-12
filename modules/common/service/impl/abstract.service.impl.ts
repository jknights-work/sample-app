import { Service } from '@common/service/service';
import { HTTPOptions } from '@common/service/http.options'

export abstract class AbstractService implements Service {

    private serviceName : string;
    private isRunning : boolean;

    constructor (serviceName : string) {
        this.serviceName = serviceName;
        this.isRunning = true;
    }

    public async get (options : HTTPOptions) {
       
        await fetch (
            options.url,
            {
                method : options.method,
                headers : options.headers
            }
        )
        .then((response : Response) => {
            if (response.ok) {
                try {
                    return response.json();
                } catch (e) {
                    throw new TypeError (e);
                }
            } else {
                console.log("error with response");
            }
        })
        .catch(function(error) {
            console.error(error);   
        }); 
        
    }

    public async post (options : HTTPOptions) {
        let result = null;
        console.log(options.getData());
        await fetch (
            options.url,
            {
                method : options.method,
                headers : options.headers,
                body : options.getData()
            }
        )
        .then((response) => {
            if (response.ok) {
                try {
                    return response.json();
                } catch (e) {
                    throw new TypeError (e);
                }
                
            } else {
                console.log("error with response", response.text());
            }
        })
        .catch(function(error) {
            console.error(error);   
        }); 
        return result;
    }

    public async delete (options : HTTPOptions) {}

    public async put (options : HTTPOptions) {}


}