import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log('trying to handle submit query', query);
    // navigate to a new route
    this.props.history.push('/results');
  }

  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
