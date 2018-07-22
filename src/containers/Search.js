
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


export default class Search extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    headerLeft: <TouchableOpacity
      style={styles.closeButton}
      onPress={() =>  navigation.navigate('ExploreContainer')}
    >
      <Icon
        name="md-close"
        size={30}
        color={colors.lightBlack}
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
            <ScrollView style={styles.scrollView}>

              <View style={styles.content}>
                <View style={styles.inputWrapper}>
                  <InputField
                    text="Search"
                    label=' Search'
                    placeholder="Search"
                    placeholderSize={16}
                    labelTextSize={18}
                    labelTextWeight="400"
                    labelColor={colors.lightBlack}
                    textColor={colors.lightBlack}
                    placeholder={location}
                    value={location}
                    borderBottomColor={colors.gray06}
                    inputType="email"
                    inputStyle={{fontSize: 18, fontWeight: '400', paddingBottom:0}}
                    onChangeText={this.handleLocationChange}
                    showCheckmark={false}
                    autoFocus={true}
                  />
                </View>

              </View>
            </ScrollView>
            <View style={styles.createButton}>
              <RoundedButton
                text="Search"
                textColor={colors.white}
                textAlign="left"
                background={colors.green01}
                borderColor="transparent"
                iconPosition="left"
                disabled={!location}
                loading={this.state.loading}
                icon={<View style={styles.buttonIcon}><FontAwesomeIcon name="angle-right" color={colors.white} size={30} /></View>}
                handleOnPress={this.handleCreateList}
              />
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
        backgroundColor: colors.white,
        borderBottomWidth: 0,
      },
    });
