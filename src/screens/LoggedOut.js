

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
// Icon  https://fontawesome.com/
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import Notification from '../components/Notification';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import iPhoneSize from '../helpers/utils';
import { Button } from 'react-native';


const size = iPhoneSize();
let termsTextSize = 13;
let headingTextSize = 30;

if (size === 'small') {
  termsTextSize = 12;
  headingTextSize = 26;
}

export default class LoggedOut extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton handleButtonPress={() =>
      navigation.navigate('LogIn')} location="left" color={colors.white} text=" تسجيل الدخول   " />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
  });

  onFacebookPress() {
    alert('Facebook button pressed');
  }

  onCreateAccountPress() {
    alert('Create Account button pressed');
  }

  onMoreOptionsPress() {
    alert('More options button pressed');
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require('../img/airbnb-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>مرحبا بكم في هبريح</Text>
          <RoundedButton
            text="Continue with Google"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="google" size={20} style={styles.facebookButtonIcon}/>}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="انشاء حساب جديد"
            textColor={colors.white}
            handleOnPress={() => this.props.navigation.navigate('RegisterName')}
          />
          <RoundedButton
            text="تخطى التسجيل"
            textColor={colors.white}
            handleOnPress={() => this.props.navigation.navigate('ExploreContainer')}
          />

          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>خيارات اخرى</Text>
          </TouchableHighlight>

         <View style={styles.termsAndConditions}>
           <Text style={styles.termsText}> يمكنك اختيار المتابعة أو إنشاء حساب أو المزيد </Text>
           <TouchableHighlight style={styles.linkButton}>
             <Button style={styles.TButton}
               title="الشروط ولاحكام "
               onPress={() => this.props.navigation.navigate('TermsConditions')}
             />
           </TouchableHighlight>
           <Text style={styles.termsText}> أوافق على جميع </Text>
           <Text style={styles.termsText}> من الخيارات ,  </Text>
           <Text style={styles.termsText}>ويمكنك الاطلاع عليها </Text>

         </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 20,
    padding: 20,
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: 30,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.white,
    fontFamily: 'Geeza Pro',
    fontWeight: '300',
    marginBottom: 40,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: colors.white,
    textAlign: 'right',
    fontSize: 16,
    padding: 10,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 65,
    marginTop: 30,
    textAlign: 'right',
      alignItems: 'center',
  },
  termsText: {
    color: colors.white,
    fontSize: termsTextSize,
    fontWeight: '600',
    textAlign: 'right',
  },
  TButton: {
    color: colors.white,
    fontSize: termsTextSize,
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    textAlign: 'right',
  }
});
