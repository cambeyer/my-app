import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';

\
class Pony extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTooltipActive: false
        };
    }

    showTooltip() {
        this.setState({isTooltipActive: true})
    }

    hideTooltip() {
        this.setState({isTooltipActive: false})
    }

    renderPony() {
      var html = 
          <div>
            <p id={item.parent} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
                <li class="name">{item.name}</li>
                <li class="image"><img src={item.image} alt="Pony"></img></li>
                <li class="category">{item.category}</li>
                <li class="kind">{item.kind}</li>
                <li class="year">{item.year}</li>
            </p>
            <ToolTip active={this.state.isTooltipActive} position="bottom" arrow="center" parent={"#" + item.parent} tooltipTimeout="200" group={item.parent}>
            <p>
                {item.quote}
            </p>
            </ToolTip>
          </div>
      return html;
    }

    render() {
        return (
          {this.renderPony()}
        );
    }
}