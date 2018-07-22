
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputfieldN from '../components/form/Inputfield_N';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import NavBarButton from '../components/buttons/NavBarButton';
import iPhoneSize from '../helpers/utils';

const size = iPhoneSize();
const headingTextSize = 30;

if (size === 'small') {
  headingTextSize = 26;
}
class RegisterName extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton
      handleButtonPress={() =>   navigation.navigate('LoggedOut')}
      location='left'
      icon={<Icon name="angle-right" color={colors.white} size={30} />}
    />,
     headerLeft: <NavBarButton
       location='right'
      color={colors.white}
     />,

    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
  });

  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validNameF: false,
      namef: '',
      names: '',
      validNameS: false,
      loadingVisible: false,
    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleNameFChange = this.handleNameFChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleNameSChange = this.handleNameSChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
   this.props.navigation.navigate('RegisterEmail');
  	//this.setState({ loadingVisible: true });
  //  const { navigate } = this.props.navigation;
/*
  	setTimeout(() => {
      const { namef, names } = this.state;
      if (this.props.logIn(namef, names)) {
        this.setState({ formValid: true, loadingVisible: false });
        navigate('TurnOnNotifications');
      } else {
        this.setState({ formValid: false, loadingVisible: false });
      }
    }, 2000);
    */
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }


  handleNameSChange(name) {
    this.setState({ name });


      if (name.length > 4) {
      	this.setState({ validNameS: true });
    } else if (name <= 4) {
      this.setState({ validNameS: false });
    }
  }

  handleNameFChange(name) {
    this.setState({ name });


      if (name.length > 4) {

      	this.setState({ validNameF: true });

    } else if (name <= 4) {
      this.setState({ validNameF: false });
    }
  }

  toggleNextButtonState() {
    const { validNameF, validNameS } = this.state;
    if (validNameF && validNameS) {
      return false;
    }
    return true;
  }

  render() {
  	const { formValid, loadingVisible, validNameF, validNameS } = this.state;
  	const showNotification = formValid ? false : true;
  	const background = formValid ? colors.green01 : colors.darkOrange;
  	const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[{backgroundColor: background}, styles.wrapper]}
        behavior="padding"
       >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}> ماهــو اسمك ؟ </Text>
            <InputfieldN
              labelText="الاسم الاول "
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="nameF"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handleNameFChange}
              showCheckmark={validNameF}
              autoFocus={true}
            />
            <InputfieldN
              labelText="الاسم الاخير "
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="NameS"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handleNameSChange}
              showCheckmark={validNameS}
            />
          </ScrollView>
          <NextArrowButton
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
        </View>
        <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        />
        <View style={[styles.notificationWrapper, {marginTop: notificationMarginTop}]}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type=" هذه البيانات غير صحيح ارجو التحقق "
            firstLine=" خطاء "
            secondLine="واعادة المحاولة"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    padding: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontFamily: 'Geeza Pro',
    fontSize: headingTextSize,
    fontWeight: 'bold',
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
    textAlign: 'right',
  },
  notificationWrapper: {
  	position: 'absolute',
    textAlign: 'right',
  	bottom: 0,
    left: 0,
    right: 0,
  }
});

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.loggedInStatus,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterName);
