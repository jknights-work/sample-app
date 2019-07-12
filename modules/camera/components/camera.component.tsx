import React, { Component } from 'react';
/* Common */
import { CommonComponent } from '@common/component/common.component';
import { State } from '@common/component/common.state';
import { Props } from '@common/component/common.props';
import {
  StyleSheet, ScrollView, View
} from 'react-native';

export class Camera extends React.Component<State, Props> implements CommonComponent {

    props : any;
    state : any;
    camera : any;
    gallery : any;

    constructor (props: any) {
        super(props);
        this.props = props;
        this.state = {
            dialogVisible : false
        }
    }


    public setComponentState(state: any) {
        super.setState(state);
    }

    public takePicture = async() => {
        if (this.camera) {
          let images = await this.camera.capture(true);
        } 
    };

    public render () {
        return (
        <View>
               {this.renderGallery()}
        </View>
        );
        
    }

    private renderCamera () {
        return (
            <View>
                    
            </View>
        )
    }

    private renderGallery () {
        return (
            <View/>
        )
    }

    private renderItems () {
        return (
           <View/>
        )
    }
   
  
}
