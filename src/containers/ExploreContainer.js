
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import DateBar from '../components/DateBar';
import TypePlace from '../components/TypePlace';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import colors from '../styles/colors';
import categoriesList from '../data/categories';
import RoundedButton from '../components/buttons/RoundedButton';
import listings from '../data/listings';
import Search from '../containers/Search';
//InboxContainer

 class ExploreContainer extends Component {

  static navigationOptions = {
    header: null,
    tabBarLabel: 'استكشف',
   tabBarIcon: ({ tintColor ,focused }) => (
    <Icon  name="ios-search" size={26} color={ tintColor } />
   ),
  };

  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }


  handleAddToFav(listing) {
    const { navigate } = this.props.navigation;
    let { favouriteListings } = this.state;

    var index = favouriteListings.indexOf(listing.id);
    if (index > -1) {
      favouriteListings = favouriteListings.filter(item => item !== listing.id);
      this.setState({favouriteListings});
    } else {
      navigate('CreateList', {listing, onCreateListClose: this.onCreateListClose});
    }
  }

  onCreateListClose(listingId, listCreated) {
    let { favouriteListings } = this.state;
    if (listCreated) {
      favouriteListings.push(listingId);
    } else {
      favouriteListings = favouriteListings.filter(item => item !== listingId);
    }
    this.setState({favouriteListings});
  }

  renderListings() {
    return listings.map((listing, index) => {
      return (
        <View
          key={`listing-${index}`}
        >
          <Listings
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={this.handleAddToFav}
            favouriteListings={this.state.favouriteListings}
          />

        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>

         <SearchBar
          handleButtonPress={() => this.props.navigation.navigate('Search')}
        />

        <DateBar
         handleButtonPress={() => this.props.navigation.navigate('ExploreContainer')}
       />
       <TypePlace
        handleButtonPress={() => this.props.navigation.navigate('TypeList')}
      />

        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >

        <RoundedButton
          text="حساب جديد"
          textColor={colors.gray04}
          handleOnPress={() => this.props.navigation.navigate('ViewBuilding')}
        />

          <Text style={styles.heading}> استكشف </Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.gray07,
  },
  scrollview: {
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
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

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
