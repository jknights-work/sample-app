/**
 * 
 * James Knights 2018
 * React Native (TypeScript) Boiler Plate template
 * 
 * Use this template as a guide to building components.
 * The goal is to create components that all share the same 
 * lifecycle and functionalty.
 * 
 * Where possible, use/create Common Components if the component is/will:
 * - Be used more than once
 * - Repeats code 
 * - Is a useful feature, which could be inherited by other modules
 * 
 * The outline for the app architecture can be found here:
 * https://docs.google.com/drawings/d/1UpMKRfAzVRM410zhgziZoxuqSkLVk39MLt0Dd775vb4/edit?usp=sharing
 * 
 */

/**
 * 1. Imports
 */

/* React Native */
import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

/* Common */
import { CommonComponent } from '@common/component/common.component';
import { State } from '@common/component/common.state';
import { Props } from '@common/component/common.props';
    
/** Redux */
import { connect } from 'react-redux';

/* Services/Config */
import { Helper } from '../../../util/helper';
import { UserService } from '../service/user.service';

/* Other Components */

/* Third Party Modules */
import { Grid, View, Button, Text, Form, Input, Item, Content  } from 'native-base';
import { userStyles } from '@app_modules/jamesknights/user/component/user.styles';

/**
 * 2. Class Declarations 
 */

/** All Component classes extend from React Component, which accepts two Type parameters, State and Props */

export default class User extends React.Component<State, Props> implements CommonComponent {

    /* 
        Minimum variable declartion, props and state
            - Props: Static properties and data passed between components
            - State: Fluid data (non static values), such as values which update after a certain time/event
    */

    props: any;
    state : any;

    private userService : UserService;

    /** Example Service Implementation */

    /** Always called, calls super (React.Component) */

    constructor (props: any) {
        super(props);
        this.props = props;
        this.state = {
            /*Local State here*/
            userLoading : false,
            isRunning : false,
            email : "",
            name : "",
            password : "",
            validation : true
        }
        
        /* Services */
        this.userService = new UserService("userService");
        /* Always use the helper util class */

        /* State */
        
    }

    public isRunning () : boolean {
        return this.state.isRunning;
    }

    /** 
     * Each Service has been given the component that called it as a handler
     * This essentially means, that whenever a service makes a call, the data
     * that comes back hits the 'hande_update' within the component that initalised 
     * the service. 
     * 
            * Params:
                * data of type any
                * action of type string
     * 
            * Returns:
                * void
     * 
     * Each service has a 'service name', for example the location service name is 
     * 'location_service'. This is set in the service's configuration. 
     * 
     * Service names can be retrieved by calling: 
     * service.get_service_name() => returns string
     * 
     * Below is an example update handle by the location service
     */

    public handle_update(data: any, action: string) {

    }

    /**
     * componentDidMount is part of React's LifeCycle - this is called
     * when the component has mounted. 
     * 
     * This function is useful for service calls on app ready etc
     * 
            * Params:
                * None
     * 
            * Returns:
                * void
     * 
     */
    public componentDidMount() {
    }

    /**
     * setComponentState is an override of the React's setState
     * instead of calling setState, call components should call
     * setComponentState - this let's the data flow be controlled
     * and if any override measures need to happen before the
     * views are refreshed, the code can be put here.
     * 
     * If you do not need to, then just use this method as is.
     * 
            * Params : 
                * state of type State
     * 
            * Returns : 
                * void
     * 
     */
    public setComponentState(state: any) {
        super.setState(state);
    }

    private handleEmail (email : string) {
        let result = false;
        if (!Helper.isEmpty(email) && Helper.validateEmail(email)) {
            result = true;
            this.setComponentState({
                validation : (this.state.validation && result),
                email : email
            });
        }
        return result;
    }

    private handleName (name : string) {
        let result = false;
        if (!Helper.isEmpty(name)) {
            result = true;
            this.setComponentState({
                validation : (this.state.validation && result),
                name : name
            });
        }
        return result;
    }

    private handlePassword (password : string) {
        let result = false;
        if (!Helper.isEmpty(password)) {
            result = true;
            this.setComponentState({
                validation : (this.state.validation && result),
                password : password
            });
        }
        return result;
    }

    private registerUser () {
        if (this.state.validation) {
            if (this.state.email && this.state.password && this.state.name) {
                this.userService.registerUser(this.state);
            }
        }
    }


    /**
     * render is part of the React LifeCycle, rendering UI
            * Params : 
                * None
     * 
            * Returns : 
                * void
     */

    public render() {
        return (
            <View style={userStyles.container}>
                    <Form>
                        <Item>
                            <Input  
                                placeholder={'Name'}
                                onChangeText={(name : string) => this.handleName(name)} 
                            />
                        </Item>
                        <Item last>
                            <Input 
                                placeholder={'Password'}
                                onChangeText={(password : string) => this.handlePassword(password)}
                            />
                            </Item>
                    </Form>
                    <Button onPress={() => this.registerUser()}><Text>Register</Text></Button>
            </View>
        )
    }


}
