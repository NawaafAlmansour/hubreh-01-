
import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import NavBarButton from '../components/buttons/NavBarButton';
import Loader from '../components/Loader';
import iPhoneSize from '../helpers/utils';

const size = iPhoneSize();
let termsTextSize = 13;
let headingTextSize = 30;

if (size === 'small') {
  headingTextSize = 26;
}

export default class TermsConditions extends Component {

  static navigationOptions = ({ navigation }) => ({
     headerRight: <NavBarButton
       handleButtonPress={() =>  navigation.navigate('LoggedOut')}
       location="left"
       icon={<Icon name="times" color={colors.black}  size={30} />}
     />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.black,
  });

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.TWrapper}>

          <Text style={styles.AText}>الشروط والاحكام </Text>
          <Text style={styles.BText}>
يمكن لهذه البنود والشروط، أن تعدل من وقت لآخر. وهي
تنطبق بشكل مباشر أو غير مباشر(عن طريق الموزعين)
 على جميع خدماتنا المتاحة على شبكة الإنترنت أو من
 خلال أي جهاز محمول ومن خلال البريد الإلكتروني
والهاتف. بدخولكم وتصفحكم واستخدامكم لموقعنا
(موقع الهاتف المحمول) أو أي من تطبيقاتنا من خلال
 أي منصة (والمشار إليها مجتمعة بـ "الموقع")، و/ أو من
خلال استكمال الحجز، فإنكم تقرّون وتوافقون على أنكم
 قد قرأتم وفهمتم ووافقتم على الشروط والبنود المبيّنة أدناه
 (بما في ذلك بيان الخصوصية). تمتلك  (Hubrih.com ) هذه
 الصفحات، والمحتوى والبنية التحتية لهذه الصفحات،
وخدمة حجز أماكن الإقامة الإلكترونية المقدمة عبر هذه
الصفحات وعبر الموقع الإلكتروني("الخدمة")، كما أنها
 تشغّلها وتدعمها. وهي مقدّمة لاستخدامكم الشخصي
غير التجاري فقط ، وتخضع لشروط وأحكام مبينة
أدناه.ب رمز التحقق SMS. </Text>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.white

    },

  TWrapper: {
    marginTop: 20,
    padding: 20,
  },
    AText:{
        color:colors.black,
        fontSize: headingTextSize,
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
        marginBottom: 20,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',

    },
    BText:{
      color: colors.black,
      fontSize: 14,
      fontWeight: '600',
      lineHeight:25,
      textAlign: 'justify',
      padding: 10,
    },

  });
