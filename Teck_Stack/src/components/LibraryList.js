import React, { Component } from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount = () => {
    // standard ListView component setup.
    // to tell the ListView what data to use in render
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  };
  renderRow = library => <ListItem data={library} />;
  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

LibraryList.PropTypes = {
  libraries: PropTypes.array.isRequired
};

function mapStateToProps({ libraries }) {
  return { libraries };
}

export default connect(mapStateToProps)(LibraryList);
