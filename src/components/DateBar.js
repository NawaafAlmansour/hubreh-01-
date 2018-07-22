

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import { transparentHeaderStyle } from '../styles/navigation';
import Notification from '../components/Notification';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


export default class DateBar extends Component {
  render() {
      const {  handleButtonPress } = this.props;
  	return (
  	  <View style={styles.wrapper}>

     <TouchableOpacity
       onPress={handleButtonPress}>
  	     <View style={styles.searchContainer}>

	        <IconF
	          name="calendar"
	          size={22}
	          color={colors.gray02}
            style={styles.searchIcon}
	        />
         <Text style={styles.textInput}>"Daet" </Text>
  	    </View>
      </TouchableOpacity>
  	  </View>
  	);
  }
}

 DateBar.propTypes = {
  handleButtonPress: PropTypes.func.isRequired,
  };

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 70,
    left: 0,
    backgroundColor: 'rgba(242,242,242,.7)',
    width: '40%',
    //height: 50,
    zIndex: 99,
  },
  searchContainer: {
  	display: 'flex',
    width: '98%',
  	borderWidth: 1,
  	borderColor: colors.gray07,
  	backgroundColor: colors.white,
  	shadowColor: 'rgba(0,0,0,.25)',
  	shadowOffset: { width: 0, height: 5 },
  	shadowOpacity: 0.7,
  	shadowRadius: 5,
    borderRadius: 5,
  	height: 40,
//  	marginTop:  5,
  	marginLeft: 21,
  	marginRight: 11,
  },
  searchIcon: {
  	position: 'absolute',
  	left: 18,
  	top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 11,
    marginLeft: 44,
    color: colors.gray02,
  },
});
