import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate = () => {
    // call animation when component updates
    LayoutAnimation.spring();
  };

  renderDescription = () => {
    const { description } = this.props.data;
    const { expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>{description}</Text>
        </CardSection>
      );
    }
  };
  render() {
    const { title, id } = this.props.data;
    const { selectLibrary } = this.props;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
};

ListItem.PropTypes = {
  data: PropTypes.object.isRequired,
  selectLibrary: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
};

function mapStateToProps({ selectedLibraryId }, ownProps) {
  const expanded = selectedLibraryId === ownProps.data.id;
  return { expanded };
}

export default connect(mapStateToProps, {
  selectLibrary: actions.selectLibrary
})(ListItem);
