import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentPosts";

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarSubmit(query) {
    // console.log('trying to handle submit query', query);
    // navigate to a new route
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
  }

  render() {
    return (
      <div className="home">
        <Logo />
        <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);