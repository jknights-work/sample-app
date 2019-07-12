export class Config {

    public static headers () {
        return {
            "Content-Type": "application/json",
            "Accept" : "*/*"
        }
    }

    public static registerUserUrl () {
        return "http://www.jamesknights.co.uk/user-api/createUser"
    }

    public static registerUserMethod () {
        return "POST";
    }

    public static getUserUrl () {
        return "https://l9y9zunxka.execute-api.us-east-1.amazonaws.com/default/userService"
    }

    public static getUserMethod () {
        return "GET";
    }

}