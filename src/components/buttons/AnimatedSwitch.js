

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

export default class AnimatedSwitch extends Component {
  state = {
    active: false
  }

  handleSwitchToggle = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
  	const styles = StyleSheet.create({
      container:{
        height: 30,
        width: 55,
        backgroundColor: '#ececec',
        borderRadius: 100,
        borderWidth: 1,
        borderBottomColor: colors.white,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(0,0,0,.25)',
      },
        toggle:{
          height: 30,
          width: 30,
          borderRadius: 100,
          borderWidth: 1,
          borderBottomColor: colors.white,
          backgroundColor:this.state.active ? '#086dad':'#e20000',
          alignItems: 'center',
          justifyContent: 'center',
          left: this.state.active ? 25 : 0,
        //  bottom: 5,
        },
        label:{
          fontSize: 17,
          color: '#FFF',
        },
    });


    return (
      <View style={styles.container}>
       <TouchableOpacity
       onPress={this.handleSwitchToggle}
       style={styles.toggle}
       >
    //     <View>
             <Text style={styles.label}>
             { this.state.active ? 'O' : 'I'}
             </Text>
      //   </View>
       </TouchableOpacity>
      </View>
    );
  }
}
