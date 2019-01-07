import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryID } = this.props;

    if (library.item.id === selectedLibraryID) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
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
  }
};

const mapStateToProps = state => {
  return { selectedLibraryID: state.selectedLibraryID };
};
/* 
mapStateToProps function will be called with our application state
and return a plain JS object which will show up as props to our component. 
so we'll return selectedLibraryID and that is going to be state.selectedLibraryID
state.selectedLibraryID was defined in reducers/index.js when we wire up the reducer
to the application. because this property was assigned to the reducer, we now have a
selected libraryID piece of state.

the last thing to do is too pass this mapStateToProps function as the first argument 
to our connect helper
 */

export default connect(mapStateToProps, actions)(ListItem);
