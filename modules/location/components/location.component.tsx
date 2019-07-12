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

/* Services/Config */
import { LocationService } from '../service/location.service';
import { Helper } from '../../util/helper';
import { AppStore } from '../../common/event/store/app.store';

/* Other Components */
import  { mainStyles }  from '../../../src/main/main.styles'

/* Third Party Modules */
import { View, Button, Text, Spinner, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

/**
 * 2. Class Declarations 
 */

/** All Component classes extend from React Component, which accepts two Type parameters, State and Props */

export default class LocationComponent extends React.Component<any, Props> implements CommonComponent {

    /* 
        Minimum variable declartion, props and state
            - Props: Static properties and data passed between components
            - State: Fluid data (non static values), such as values which update after a certain time/event
    */

    props: any;
    state : any;

    /** Example Service Implementation */
    private locationService : LocationService;

    /** Always called, calls super (React.Component) */

    constructor (props: any) {
        super(props);
        this.props = props;
        this.state = {
            /*Local State here*/
            locationLoading : false,
            locationOnInit : false
        }

        this.props.locationLoading = false;
        
        /* Services */
        this.locationService = new LocationService(null);

        /* Always use the helper util class */

        /* State */
        
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
        if (!Helper.isNull(this.props.locationOnInit)) {
            this.setComponentState({onLocationInit : this.props.locationOnInit});
            if (this.props.locationOnInit) {
                this.onLocationRequest();
            }
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

    /** Custom Component Methods */
    private async onLocationRequest () {
        await this.setComponentState({locationLoading : true});
        console.log("this state", this.state);
        this.props.locationLoading = true;
        await this.locationService.getLocation();
        this.onLocationReceieved();
    }

    public componentWillReceiveProps (nextProps : any) {
        if (Helper.isNull(nextProps.location)) {
            this.onLocationError();
        }
        this.setComponentState({locationLoading : false});
    }

    private onLocationError () {
        alert("LOCATION ERROR");  
    }

    private onLocationReceieved () {
        console.log(this.props);
        if (Helper.isNull(this.props.location)) {
           // this.onLocationError();
        }
    }

    private parseLocation (type : string) {
        let result = "";
        let model = this.props.location
        if (!Helper.isNull(model)) {
            if (type === 'lon') {
                result = model.get("longitude");
            } else {
                result = model.get("latitude");
            }
        } 
        return result;
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
        if (this.props.locationOnInit) { 
           return (
                <View>
                    {this.renderLocation()}    
                </View>
            );
        } else {
            return ( 
            <View style={{position : 'absolute', bottom : 0}}> 
                { this.renderLocation() }  
                { this.renderButton() }
            </View>
            );
        }
    }

    private renderLocation () {
        return (
            
            <View>
                { this.props.location ? 
                    <View>
                        {this.renderLocationModel()}
                    </View>
                    :
                    <View/>
                }
                
            </View>
        )
    }

    private renderLocationModel () {
        return (
            <View>
               
                        <Text numberOfLines={1}>{this.parseLocation("lat")}</Text>
   
                        <Text numberOfLines={1}>{this.parseLocation("lon")}</Text>

            </View>
        )
    }

    private renderButton () {
        return (
            <View>
                {this.renderSpinner()}
                <Button onPress={() => this.onLocationRequest()} iconLeft dark>
                    {this.renderLocationIcon()}
                    <Text>Get Location</Text> 
                </Button>
            </View>
        )
    }

    private renderLocationIcon () {
        return Helper.isNull(this.props.location) ? <Icon name="pin" /> : <Icon name="pin" />
    }

    private renderSpinner () {
        console.log("render", this.state);
        return ( 
        <View>
            {this.state.locationLoading ? 
                <Spinner animating={this.state.locationLoading} size="small" color="#ffffff"/>
                    :
                <View/>
            }
        </View>
        );
    }


}
