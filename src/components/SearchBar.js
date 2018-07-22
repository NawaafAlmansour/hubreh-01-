

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { transparentHeaderStyle } from '../styles/navigation';
import Notification from '../components/Notification';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';


export default class SearchBar extends Component {
  render() {
      const {  handleButtonPress } = this.props;
  	return (
  	  <View style={styles.wrapper}>

     <TouchableOpacity
       onPress={handleButtonPress}>
  	     <View style={styles.searchContainer}>

	        <Icon
	          name="ios-search"
	          size={22}
	          color={colors.gray02}
            style={styles.searchIcon}
	        />
         <Text style={styles.textInput}>" بحث " اكتب هنا </Text>
  	    </View>
      </TouchableOpacity>
  	  </View>
  	);
  }
}

 SearchBar.propTypes = {
  handleButtonPress: PropTypes.func.isRequired,
  };

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(242,242,242,.7)',
    width: '100%',
    height: 80,
    zIndex: 99,
  },
  searchContainer: {
  	display: 'flex',
  	borderWidth: 1,
  	borderColor: colors.gray07,
  	backgroundColor: colors.white,
  	shadowColor: 'rgba(0,0,0,.25)',
  	shadowOffset: { width: 0, height: 5 },
  	shadowOpacity: 0.7,
  	shadowRadius: 10,
  	borderRadius: 3,
  	height: 40,
  	marginTop: 28,
  	marginLeft: 21,
  	marginRight: 21,
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
