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
        return "http://www.jamesknights.co.uk/user-api/getUser"
    }

}