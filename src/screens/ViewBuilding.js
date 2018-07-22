import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import RoundedButton from '../components/buttons/RoundedButton';
import Rounded2Button  from '../components/buttons/Rounded2Button';
import Stars from '../components/Stars';




export default class ViewBuilding extends Component {

  static navigationOptions = {
    tabBarVisible: false,
    header: null,
    //headerStyle: styles.headerStyle,
  };

  render() {

    return (
      <View style={styles.wrapper}>

        <View style={styles.headerButton}>

          headerLeft: <TouchableOpacity
            style={styles.closeButton}
            onPress={() =>  this.props.navigation.navigate('ExploreContainer')}
          >
            <IconF
              name="angle-left"
              size={30}
              color={colors.white}
            />
          </TouchableOpacity>,

          headerRight: <TouchableOpacity
            style={styles.closeButton2}
            onPress={() =>  this.props.navigation.navigate('ExploreContainer')}
          >
            <IconF
              name="retweet"
              size={25}
              color={colors.white}
            />
          </TouchableOpacity>,

          headerRight: <TouchableOpacity
            style={styles.closeButton3 }
            onPress={() =>  this.props.navigation.navigate('ExploreContainer')}
          >
            <IconF
              name="heart"
              size={25}
              color={colors.white}
            />
          </TouchableOpacity>,
        </View>



        <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        >


        <View style={styles.content}>
            <Image
            source={require('../data/photos/listing1.png')}
            style={{width: 100 + "%", height: 100 + "%"}} />
         </View>
         <View style={styles.ContentSnter}>

          <View style={styles.Buildingcontent}>
           <Text style={styles.BuildingName}> شاليهات الخليج </Text>
          </View>

           <View style={styles.AmenitiesContent}>
           <View>
           <Icon
             name="md-close"
             size={45}
             color={colors.lightBlack}
           />
           <Text > حجر </Text>
           </View>
           <View>
           <Icon
             name="md-close"
             size={45}
             color={colors.lightBlack}
           />
           <Text > حجر </Text>
           </View>
           <View>
           <Icon
             name="md-close"
             size={45}
             color={colors.lightBlack}
           />
           <Text > حجر </Text>
           </View>
           <View>
           <Icon
             name="md-close"
             size={45}
             color={colors.lightBlack}
           />
           <Text > حجر </Text>
           </View>


            </View>

            <View style={styles.AmenitiesContent}>
            <View>
            <Icon
              name="md-close"
              size={45}
              color={colors.lightBlack}
            />
            <Text > حجر </Text>
            </View>
            <View>
            <Icon
              name="md-close"
              size={45}
              color={colors.lightBlack}
            />
            <Text > حجر </Text>
            </View>
            <View>
            <Icon
              name="md-close"
              size={45}
              color={colors.lightBlack}
            />
            <Text > حجر </Text>
            </View>
            <View>
            <Icon
              name="md-close"
              size={45}
              color={colors.lightBlack}
            />
            <Text > حجر </Text>
            </View>


            </View>

            </View>

            <View style={styles.BuildingMap}>
            <Image
            source={require('../img/map.jpg')}
            style={{width: 100 + "%", height: 100 + "%"}} />
             </View>
             <View style={styles.ContentSnter}>
            <View style={styles.Buildingcontent}>
               <Text style={styles.BuildingMessage}> رسالة المالك ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</Text>
           </View>

           <View style={styles.Buildingcontent}>
             <View style={styles.Buildingcontent2}>
               <Text style={styles.BuildingENamber}> 8.7</Text>
               <Text style={styles.BuildingEvaluation}>  تقييم  </Text>

             </View>
          </View>

          <View style={styles.Buildingcontent}>


              <TouchableOpacity style={styles.linkButton}
               onPress={() => this.props.navigation.navigate('LoggedOut')}
              >
             <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
             <IconF style={styles.IconStylx} name="angle-left" color={colors.gray04} size={30}    />
             <Text style={styles.TButton}> شروط الإستخدام </Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity style={styles.linkButton}
              onPress={() => this.props.navigation.navigate('LoggedOut')}
             >
            <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
            <IconF style={styles.IconStylx} name="angle-left" color={colors.gray04} size={30}    />
            <Text style={styles.TButton}> شروط الإلغاء </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton}
             onPress={() => this.props.navigation.navigate('LoggedOut')}
            >
           <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
           <IconF style={styles.IconStylx} name="angle-left" color={colors.gray04} size={30}    />
           <Text style={styles.TButton}> تواصل مع المالك </Text>
           </View>
           </TouchableOpacity>

           <TouchableOpacity style={styles.linkButton}
            onPress={() => this.props.navigation.navigate('LoggedOut')}
           >
          <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
          <IconF style={styles.IconStylx} name="angle-left" color={colors.gray04} size={30}    />
          <Text style={styles.TButton}> شكاوي </Text>
          </View>
          </TouchableOpacity>

           <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoggedOut')}
           >
          <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
          <IconF style={styles.IconStylx} name="angle-left" color={colors.gray04} size={30}    />
          <Text style={styles.TButton}> تقويم </Text>
          </View>
          </TouchableOpacity>
          </View>

          </View>

        </ScrollView>
        <View style={styles.BookingButton}  >
          <Rounded2Button
            text=" حجز "
            textColor={colors.white}
            background={colors.tomato}
            borderColor="transparent"
          />
        <View  style={styles.BookingView} >
            <Text style={styles.BButton}> 890 ريال </Text>
              <Stars
                votes={2}
                size={15}
                color={colors.green02}
              />
          </View>
        </View>

      </View>

    );
  }

};

    const styles = StyleSheet.create({
       wrapper: {
        backgroundColor: colors.white,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      //  paddingLeft: 25,
      //  paddingRight: 25,
      },



      headerStyle: {
        //backgroundColor: colors.white,
        borderBottomWidth: 0,

      },
      headerButton:{
        zIndex: 99,
        width: 400,
        backgroundColor: 'rgba(255,10,10,1)',
      },
      closeButton: {
       position: 'absolute',
        left: 20,
        marginTop: 20,
        marginLeft: 20,
        // zIndex: 99,
      },
      closeButton2: {
       position: 'absolute',
        right: 20,
        marginTop: 20,
        marginRight: 20,
        // zIndex: 99,
      },
      closeButton3: {
       position: 'absolute',
        right: 20,
        marginTop: 20,
        marginRight: 70,
        // zIndex: 99,
      },

       content: {
         flex: 1,
      //  paddingTop: 5,
        height: 350,
        width: 400,

      },
      image: {
        width: undefined,
        flex: 1,
        height: 200,
        borderRadius: 8,
        marginBottom: 7
      },
      BookingButton:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        //width: 110,
        backgroundColor: colors.gray07,
        width: 100 + "%",

      },
      BookingView:{
        position: 'absolute',
      //  flexDirection: 'column',
        justifyContent: 'space-evenly',
       marginBottom: 30,
        marginLeft: 25,
      },
      Buttonstyle:{
        padding: 20,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,.25)',
        backgroundColor: colors.pink,
        borderBottomColor: colors.gray08,
        shadowOpacity: 0.7,

      },
      Buildingcontent:{
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 5,
        shadowColor: 'rgba(0,0,0,.25)',
        borderBottomColor: colors.gray08,
        textAlign: 'right',
      //  paddingLeft: 25,
      //  paddingRight: 25,
        //right: 25,
        //left: 25,
      },
      Buildingcontent2:{
        borderBottomColor: colors.gray08,
        textAlign: 'right',
        flexDirection: 'row',
        alignSelf: 'flex-end',
      },
      BuildingMap:{
        borderBottomWidth: 1,
        //padding: 5,
        //marginBottom: 5,
        shadowColor: 'rgba(0,0,0,.25)',
        borderBottomColor: colors.gray08,
        textAlign: 'right',
        //paddingTop: 5,
        height: 300,
        width: 400,
      },
      AmenitiesContent:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        //marginBottom: 5,
        padding: 15,
        shadowColor: 'rgba(0,0,0,.25)',
        borderBottomColor: colors.gray08,
        textAlign: 'right',
      },

      BuildingName: {
        fontSize: 30,
        color: colors.gray04,
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
        marginBottom: 30,
        marginTop: 20,
        fontWeight: 'bold',
        //right: 40,
        textAlign: 'right',
      },
      BuildingMessage: {
        fontSize: 14,
        color: colors.gray04,
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
        marginTop: 20,
        padding: 10,
        marginBottom: 40,
        textAlign: 'right',
      },
      BuildingEvaluation:{
        fontSize: 23,
        color: colors.gray04,
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
        marginTop: 8,
        //  padding: 5,
        marginBottom: 8,
       fontWeight: 'bold',
    //  marginLeft:20,
        //right: 20,
      //  left:10,
        textAlign: 'right',
      },
      BuildingENamber:{
        fontSize: 23,
        color: colors.green01,
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
        marginTop: 8,
        marginRight: 20,
        marginBottom: 8,
       fontWeight: 'bold',
        textAlign: 'right',
      },
      ButtonText: {
        fontSize: 24,
        color: colors.gray04,
        fontWeight: '300',
        fontFamily: 'Geeza Pro',
        fontWeight: 'bold',
        right: 20,
        marginBottom: 1,
        marginTop: 1,
        textAlign: 'right',
      },
      scrollViewContent: {
        paddingBottom: 80,
      },
      scrollView: {
        marginTop: 0,
        flex: 1,
        padding: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

      },

      ContentSnter:{
        paddingLeft: 25,
        paddingRight: 25,
     },
      IconStylx:{
        padding: 5,
        marginTop: 5,
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
      BButton: {
        color: colors.gray09,
        fontSize: 17,
        //  backgroundColor: 'rgb(94,255,96)',
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
    //    textAlign: 'right',
        marginBottom: 5,
        marginTop: 15,
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
