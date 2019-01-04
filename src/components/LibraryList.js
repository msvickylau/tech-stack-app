import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return (
      <ListItem library={library} />
    )
  }

  render() {
    return (
      <FlatList // for all the items that will fit on the screen it will call renderItem
        data={this.props.libraries}
        renderItem={this.renderItem} //render item which we created a helper method above for.. is in charge of creating new widget for the screen.
        keyExtractor={library => library.id}  // Flatlist requires key too, but a little different, instead of actually assigning a key to each component we give it a function to create the key
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
