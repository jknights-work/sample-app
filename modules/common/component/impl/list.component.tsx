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

/* Services/Config */
import { Helper } from '@app_modules/util/helper';

/* Other Components */
import  { mainStyles }  from '../../../../src/main/main.styles';

/* Third Party Modules */
import { View, Container, Button, Text, List, ListItem, Right, Left, Icon, Content  } from 'native-base';
import { Actions } from 'react-native-router-flux';


/**
 * 2. Class Declarations 
 */

/** All Component classes extend from React Component, which accepts two Type parameters, State and Props */

export default class ListComponent extends React.Component<State, Props> implements CommonComponent {

    /* 
        Minimum variable declartion, props and state
            - Props: Static properties and data passed between components
            - State: Fluid data (non static values), such as values which update after a certain time/event
    */

    props: any;
    state : any;

    /** Example Service Implementation */

    /** Always called, calls super (React.Component) */

    constructor (props: any) {
        super(props);
        this.props = props;
        this.state = {
            /*Local State here*/
            isRunning : false,
            items : []
        }
       
        /* Services */

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
        if (!Helper.isNull(this.props.items)) {
            this.setComponentState({items : this.props.items})
        }
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

    private onItemPress () {

    }

    

    /**
     * render is part of the React LifeCycle, rendering UI
            * Params : 
                * None
     * 
            * Returns : 
                * void
     */

    public render () {
        console.log("here");
        return (
            <View>
                    <List>
                        <ListItem>
                        <Left>
                            <Text>Setting 1</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                        </ListItem>
                        <ListItem>
                        <Left>
                            <Text>Setting 2</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                        </ListItem>
                        <ListItem>
                        <Left>
                            <Text>Setting 3</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                        </ListItem>
                    </List>
            </View>
        )
    }


}
