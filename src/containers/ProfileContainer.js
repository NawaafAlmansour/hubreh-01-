import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// Icon  https://fontawesome.com/
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconx from 'react-native-vector-icons/Ionicons';
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


export default class ProfileContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'ملفي',
       tabBarIcon: ({ tintColor }) => (
      <Iconx  name="ios-contact-outline" size={26} color={tintColor}  />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.wrapper}>

        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcomeText}>مرحبا  نواف </Text>
          <Text style={styles.welxText}>  يمكنك المشاهد و التعدل    </Text>



           <TouchableOpacity style={styles.linkButton}
            onPress={() => this.props.navigation.navigate('LoggedOut')}
           >
           <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
             <Icon style={styles.IconStyl} name="bell" color={colors.gray04} size={25}  />
             <Text style={styles.TButton}> تنبيهاتة  </Text>
           </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkButton}
           onPress={() => this.props.navigation.navigate('LoggedOut')}
          >
          <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
            <Icon style={styles.IconStyl} name="building" color={colors.gray04} size={25}  />
            <Text style={styles.TButton}> اضافة منشاة  </Text>
          </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.linkButton}
          onPress={() => this.props.navigation.navigate('LoggedOut')}
         >
         <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
           <Icon style={styles.IconStyl} name="cog" color={colors.gray04} size={25} />
           <Text style={styles.TButton}> عدادات  </Text>
         </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}
         onPress={() => this.props.navigation.navigate('LoggedOut')}
        >
        <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
          <Icon style={styles.IconStyl} name="question" color={colors.gray04} size={25} />
          <Text style={styles.TButton}> مساعدة </Text>
        </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.linkButton}
        onPress={() => this.props.navigation.navigate('LoggedOut')}
       >
       <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
         <Icon style={styles.IconStyl} name="phone" color={colors.gray04} size={25}   />
         <Text style={styles.TButton}> توصل </Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => this.props.navigation.navigate('LoggedOut')}
      >
      <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
        <Icon style={styles.IconStylx} name="angle-left" color={colors.gray04} size={30}    />
        <Text style={styles.TButton}> شروط الإستخدام </Text>
      </View>
     </TouchableOpacity>



      </View>
    </ScrollView>

    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  IconStyl:{
    padding: 5,
    marginTop: 10,
  },
  IconStylx:{
    padding: 5,
    marginTop: 5,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    padding: 30,
    marginTop: 40,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.gray09,
    fontFamily: 'Geeza Pro',
    fontWeight: '300',
    marginBottom: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'right',
  },
  welxText: {
    fontSize: 16,
    color: colors.gray09,
    fontFamily: 'Geeza Pro',
    fontWeight: '300',
    marginBottom: 30,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'right',
  },
  TButton: {
    color: colors.gray09,
    fontSize: 17,
    //  backgroundColor: 'rgb(94,255,96)',
    fontFamily: 'Geeza Pro',
    fontWeight: '300',
    textAlign: 'right',
    paddingTop: 5,
    marginBottom: 25,
    marginTop: 10,
  },
  linkButton: {
//backgroundColor: colors.green01,
    borderBottomWidth: 1,
  //  marginLeft: 5,
    marginBottom: 5,
    shadowColor: 'rgba(0,0,0,.25)',
    borderBottomColor: colors.gray08,
    textAlign: 'right',
  },

});
