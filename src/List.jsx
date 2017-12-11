import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import Pony from './Pony.jsx';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/

class List extends Component {
    
    renderList() {
        const myponies = this.props.items.map(pony => {
            var html = <Pony item={pony} />
            return html
        });

        return myponies;
    }

    render() {
        return (
            <ul data-empty-message="No characters match these filters">
                {this.renderList()}
            </ul>
        );
    }
}

export default List;