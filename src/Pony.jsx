import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/
class Pony extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTooltipActive: false,
            name: props.item.name,
            image: props.item.image,
            category: props.item.category,
            kind:props.item.kind,
            year: props.item.year,
            quote: props.item.quote,
            parent: props.item.parent
        };
    }

    showTooltip() {
        this.setState({isTooltipActive: true})
    }

    hideTooltip() {
        this.setState({isTooltipActive: false})
    }

    render() {
        return (
            <div>
            <p id={this.parent} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
                <li class="name">{this.state.name}</li>
                <li class="image"><img src={this.state.image} alt="Pony"></img></li>
                <li class="category">{this.state.category}</li>
                <li class="kind">{this.state.kind}</li>
                <li class="year">{this.state.year}</li>
            </p>
            <ToolTip active={this.state.isTooltipActive} position="bottom" arrow="center" parent={"#" + this.state.parent} tooltipTimeout="200" group={this.state.parent}>
            <p>
                {this.state.quote}
            </p>
            </ToolTip>
          </div>
        );
    }
}

export default Pony;