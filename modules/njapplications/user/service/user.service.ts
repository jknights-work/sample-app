import { AbstractService } from '../../../common/service/impl/abstract.service.impl';
import { Options } from '../../../common/service/impl/http.options.impl';
import { Helper } from '../../../util/helper';
import { UserModel } from '@app_modules/jamesknights/user/model/user.model';
import { Config } from '../config/user.service.config';

export class UserService extends AbstractService {
    
    constructor (serviceName : string) {
        super (serviceName);
    }

    public async registerUser (data : any) {
        let result = null;
        let model = new UserModel(data.email, data.name, data.password);
        console.log(model);
        if (!Helper.isNull(model)) {
            let options = new Options(Config.headers(), Config.registerUserMethod(), 
                                            Config.registerUserUrl() + model.getAll(), model.getAll());
            if (!Helper.isNull(options)) {
                super.post(options).then((response) => {
                    result = response;
                })
            }   
                        
        }
        return result;
    }

    public async getUser (userModel : UserModel | null) {
        let result = null;
        let options = new Options(Config.headers(), Config.getUserMethod(), 
                                            Config.getUserUrl(), null);
        if (!Helper.isNull(options)) {
            super.get(options).then((response) => {
                result = response;
                console.log(response);
            })
        }   
        return result;
    }

    public async deleteUser (userId : string) {} 

}