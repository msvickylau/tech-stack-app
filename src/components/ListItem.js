import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {  //called before the UI is painted
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { bodyStyle } = styles;
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={bodyStyle}>{library.item.description}</Text>
        </CardSection>
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
  },
  bodyStyle: {
    color: 'gray',
    paddingLeft: 15,
    paddingRight: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.library.item.id;

  // return { selectedLibraryID: state.selectedLibraryID };
  return { expanded };
};
/* 
mapStateToProps function will be called with our application state
and return a plain JS object which will show up as props to our component. 
so we'll return selectedLibraryID and that is going to be state.selectedLibraryID
state.selectedLibraryID was defined in reducers/index.js when we wire up the reducer
to the application. because this property was assigned to the reducer, we now have a
selected libraryID piece of state.

we are passing ownProps as a second argument. ownProps is === this.props in the component. 
so any props that we pass to the ListItem component will show up inside of mapStateToProps
as ownProps. So this allows us to do some caculation of what props we want to pass to
our component. We can create const expanded and return only if it is expanded.

the last thing to do is too pass this mapStateToProps function as the first argument 
to our connect helper
 */

export default connect(mapStateToProps, actions)(ListItem);
