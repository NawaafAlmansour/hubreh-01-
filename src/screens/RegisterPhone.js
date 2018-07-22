
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
class RegisterPhone extends Component {

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
      validPhone: false,
      Phone: '',
      key: '',
      validKey: false,
      loadingVisible: false,
    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlekeyChange = this.handlekeyChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }

  handleNextButton() {
   this.props.navigation.navigate('RegisterEmail');

  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }


  handlekeyChange(name) {
    this.setState({ name });


      if (name.length > 4) {
      	this.setState({ validKey: true });
    } else if (name <= 4) {
      this.setState({ validKey: false });
    }
  }

  handlePhoneChange(name) {
    this.setState({ name });


      if (name.length > 4) {

      	this.setState({ validPhone: true });

    } else if (name <= 4) {
      this.setState({ validPhone: false });
    }
  }

  toggleNextButtonState() {
    const { validPhone, validKey } = this.state;
    if (validPhone && validKey) {
      return false;
    }
    return true;
  }

  render() {
  	const { formValid, loadingVisible, validPhone, validKey } = this.state;
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
            <Text style={styles.loginHeader}>رقم الهاتف الخاص بك </Text>
            <Text style={styles.HeaderText}> يجب ان يحتوي على رقم 0987654321  </Text>
              <Text style={styles.HeaderText}> يجب ان يحتوي على رقم 0987654321  </Text>
            <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
            <InputfieldN
              labelText=" رمز  "
              labelTextSize={16}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="key"
              customStyle={{marginBottom: 10 , width: 60}}
              onChangeText={this.handlekeyChange}
              showCheckmark={validKey}
            />
            <InputfieldN
              labelText="رقم الهاتف "
              labelTextSize={16}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="Phone"
              customStyle={{ marginBottom: 10 ,marginLeft: 0 , width: 170  }}
              onChangeText={this.handlePhoneChange}
              showCheckmark={validPhone}
              autoFocus={true}
            />

            </View>
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
    marginBottom: 20,
    textAlign: 'right',
  },
  HeaderText: {
    fontFamily: 'Geeza Pro',
    fontSize: 15,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 30,
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPhone);
