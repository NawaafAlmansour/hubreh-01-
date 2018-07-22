
import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
} from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import CreateList from '../screens/CreateList';
import colors from '../styles/colors';
import Listings from '../components/explore/Listings';
import ViewBuilding from '../screens/ViewBuilding';
import TypeList from '../screens/TypeList';




import Search from '../containers/Search';


export const ExploreTab = StackNavigator({
  ExploreContainer: { screen: ExploreContainer },
  CreateList: { screen: CreateList },
  Search: { screen: Search },
  Listings: { screen: Listings },
  ViewBuilding : { screen: ViewBuilding },
  TypeList : { screen: TypeList},


},
{
  mode: 'modal',
});

const LoggedInTabNavigator = TabNavigator({
  Explore: ExploreTab,
  Saved: { screen: SavedContainer },
//  Trips: { screen: TripsContainer },
//  Inbox: { screen:  InboxContainer },
  Profile: { screen: ProfileContainer },
}, {
  tabBarOptions: {
  	labelStyle: {
  	  fontWeight: '400',
      fontSize: 13,
      fontFamily: 'Geeza Pro',
      fontWeight: 'bold',
  	  marginBottom: 3,


  	},
    inactiveTintColor: colors.gray04,
    activeTintColor: colors.pink,

  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});

export default LoggedInTabNavigator;
