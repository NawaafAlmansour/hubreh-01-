
import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LoggedIn from '../screens/LoggedIn';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';
import TermsConditions from '../screens/TermsConditions';
import RegisterName from '../screens/RegisterName';
import RegisterEmail from '../screens/RegisterEmail';
import RegisterPhone from '../screens/RegisterPhone';
import OtherOptions from '../screens/OtherOptions';
import Search  from '../containers/Search';
import ExploreContainer from '../containers/ExploreContainer';
import SavedContainer from '../containers/SavedContainer';




export const AppNavigator = StackNavigator({
  LoggedOut: { screen: LoggedOut },
  LoggedIn: { screen: LoggedIn },
  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword },
  TurnOnNotifications: { screen: TurnOnNotifications },
  TermsConditions: { screen: TermsConditions },
  RegisterName: { screen: RegisterName },
  RegisterEmail: { screen: RegisterEmail },
  RegisterPhone: { screen: RegisterPhone },
  ExploreContainer: {screen: ExploreContainer},
  SavedContainer : {screen: SavedContainer},
  OtherOptions: { screen : OtherOptions },
  Search : { screen : Search },
});

const AppWithNavigationState = ({ dispatch, nav, listener }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener: listener })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
