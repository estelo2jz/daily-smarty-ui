import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recentPosts";
import Results from "./results";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar />
          <RecentPosts />
        </div>
      </div>
    );
  }
}