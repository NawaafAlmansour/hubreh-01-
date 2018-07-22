
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

} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import RoundedButton from '../components/buttons/RoundedButton';
import AnimatedSwitch from '../components/buttons/AnimatedSwitch';




export default class TypeList extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    headerLeft: <TouchableOpacity
      style={styles.closeButton}
      onPress={() =>  navigation.navigate('ExploreContainer')}
    >
      <Icon
        name="md-close"
        size={30}
        color={colors.white}
      />
    </TouchableOpacity>,
    headerStyle: styles.headerStyle,
  });

  constructor(props) {
    super(props);

    this.state = {
      privacyOption: 'private',
      loading: false,
    };
        this.listCreated = false;
        this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleCreateList = this.handleCreateList.bind(this);
      }

      componentWillUnmount() {
        const { navigation } = this.props;
        navigation.state.params.onCreateListClose(navigation.state.params.listing.id, this.listCreated);
      }

      selectPrivacyOption(privacyOption) {
        this.setState({privacyOption});
      }

      handleLocationChange(location) {
        this.setState({location});
      }

      handleCreateList() {
        const { goBack } = this.props.navigation;
        this.setState({loading: true});
        this.listCreated = true;

        // Faking slow server
        setTimeout(() => {
          this.setState({loading: false}, () => {
            goBack();
          });
        }, 2000);
      }

      render() {
        const { privacyOption, location } = this.state;

        return (
          <View style={styles.wrapper}>
           <View style={styles.scrollViewWrappe}>
            <ScrollView style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContent}>



              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  استراحة  </Text>
              </View>
              </View>

              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between' , marginTop: 10,}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  شالية  </Text>
              </View>
              </View>

              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  مزرعة  </Text>
              </View>
              </View>

              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  بيت   </Text>
              </View>
              </View>

              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  شقة  </Text>
              </View>
              </View>

              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  مخيم  </Text>
              </View>
              </View>

              <View style={styles.linkButton}>
              <View style={{ flex: 1, flexDirection: 'row' ,  justifyContent: 'space-between'}}>
              <AnimatedSwitch
               style={styles.IconStylx}
               />
              <Text style={styles.TButton}>  قصر  </Text>
              </View>
              </View>

            </ScrollView>
           </View>
          </View>
        );
      }
    };

    const styles = StyleSheet.create({
       wrapper: {
        backgroundColor: colors.green01,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
       content: {
        paddingTop: 5,
      },

       inputWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
      },

      createButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        width: 110,
      },
      buttonIcon: {
        position: 'absolute',
        right: 0,
        top: '50%',
        marginTop: -16,
      },
      closeButton: {
        position: 'absolute',
        left: 20,
        zIndex: 9999,
      },
      headerStyle: {
        backgroundColor: colors.green01,
        borderBottomWidth: 0,
      },
      linkButton: {
    //backgroundColor: colors.green01,
        borderBottomWidth: 1,
      //  marginLeft: 5,
        marginBottom: 5,
        shadowColor: 'rgba(0,0,0,.25)',
        borderBottomColor: colors.gray10,
        textAlign: 'right',
      },
      IconStylx:{
        padding: 5,
        marginTop: 5,
      },
      TButton: {
        color: colors.white,
        fontSize: 22,
        //  backgroundColor: 'rgb(94,255,96)',
        fontFamily: 'Geeza Pro',
        fontWeight: '300',
        textAlign: 'right',
        fontWeight: 'bold',
        paddingTop: 5,
        marginBottom: 25,
        //marginTop: 10,
      },
      scrollViewContent: {
        marginTop: 70,
        //position: 'absolute',
        paddingBottom: 70,
        width: 95 + '%',
        left: 10,

      },
      scrollViewWrapper: {
        flex: 1,
        padding: 5,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    });
