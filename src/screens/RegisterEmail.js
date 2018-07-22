
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
class RegisterEmail extends Component {

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
      validEmail: false,
      namef: '',
      loadingVisible: false,
    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
   this.props.navigation.navigate('RegisterPhone');

  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }



  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailCheckRegex.test(email)) {
      	this.setState({ validEmail: true });

    } else {
      if (!emailCheckRegex.test(email)) {
      	this.setState({ validEmail: false });
      }
    }
  }

  toggleNextButtonState() {
    const { validEmail } = this.state;
    if (validEmail ) {
      return false;
    }
    return true;
  }

  render() {
  	const { formValid, loadingVisible, validEmail } = this.state;
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
            <Text style={styles.loginHeader}> ما هــو البريد الالكتروني ؟ </Text>
            <InputfieldN
              labelText="عنوان البريد  "
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="nameF"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              autoFocus={true}
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterEmail);