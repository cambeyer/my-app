import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kindChoice: "all",
            groupChoice: "all",
            sortChoice: "None"
        };
    }

    filterBy = (item) => {
        // Checks if the current search term is contained in this item
        if (this.state.kindChoice === "all") {
            if (this.state.groupChoice === "all") {
                return item.name.toLowerCase().search(this.state.search) !== -1;
            }

            if (this.state.groupChoice === item.group) {
                return item.name.toLowerCase().search(this.state.search) !== -1;
            }
        }

        if (this.state.kindChoice === item.kind) {
            if (this.state.groupChoice === "all") {
                return item.name.toLowerCase().search(this.state.search) !== -1;
            }

            if (this.state.groupChoice === item.group) {
                return item.name.toLowerCase().search(this.state.search) !== -1;
            }
        }
        
    }
    
    sortBy = (a,b) => {
        if (this.state.sortChoice === "year") {
            return parseInt(a.year, 10)  - parseInt(b.year, 10);
        }
        
        if (this.state.sortChoice === "None") {
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
            if(nameA < nameB) return -1;
            if(nameA > nameB) return 1;
            return 0;
        }
    }

    dropdownEvent = (eventKey) => {
        this.setState(
            {kindChoice: eventKey}
        );
    }
    
    dropdownEvent2 = (eventKey) => {
        this.setState(
            {groupChoice: eventKey}
        );
    }
    
    dropdownEvent3 = (eventKey) => {
        this.setState(
            {sortChoice: eventKey}
        );
    }

    render() {
        return (
            <div className="filter-list">
                <img src="https://fontmeme.com/permalink/171114/446feeecf5b41f5a3064b215bcd3f5d4.png" alt="My Little Pony Characters" class="title"></img>
                <div class="dropdown-menus">
                    <DropdownButton id="kindDropdown" title={"Kind"} class="dropdown-item">
                      <MenuItem eventKey="all" onSelect={this.dropdownEvent}>All</MenuItem>
                      <MenuItem eventKey="Unicorn" onSelect={this.dropdownEvent}>Unicorn</MenuItem>
                      <MenuItem eventKey="Alicorn" onSelect={this.dropdownEvent}>Alicorn</MenuItem>
                      <MenuItem eventKey="Earth pony" onSelect={this.dropdownEvent}>Earth pony</MenuItem>
                      <MenuItem eventKey="Dragon" onSelect={this.dropdownEvent}>Dragon</MenuItem>
                      <MenuItem eventKey="Griffon" onSelect={this.dropdownEvent}>Griffon</MenuItem>
                      <MenuItem eventKey="Changeling" onSelect={this.dropdownEvent}>Changeling</MenuItem>
                      <MenuItem eventKey="Yak" onSelect={this.dropdownEvent}>Yak</MenuItem>
                      <MenuItem eventKey="Centaur" onSelect={this.dropdownEvent}>Centaur</MenuItem>
                      <MenuItem eventKey="Draconequus" onSelect={this.dropdownEvent}>Draconequus</MenuItem>
                    </DropdownButton>
                    <DropdownButton id="groupDropdown" title={"Group"} class="dropdown">
                      <MenuItem eventKey="all" onSelect={this.dropdownEvent2}>All</MenuItem>
                      <MenuItem eventKey="Main Characters" onSelect={this.dropdownEvent2}>Main Characters</MenuItem>
                      <MenuItem eventKey="Royalty" onSelect={this.dropdownEvent2}>Royalty</MenuItem>
                      <MenuItem eventKey="Cutie Mark Crusaders" onSelect={this.dropdownEvent2}>Cutie Mark Crusaders</MenuItem>
                      <MenuItem eventKey="Antagonists" onSelect={this.dropdownEvent2}>Antagonists</MenuItem>
                      <MenuItem eventKey="Antagonists (reformed)" onSelect={this.dropdownEvent2}>Antagonists (reformed)</MenuItem>
                      <MenuItem eventKey="Celebrities" onSelect={this.dropdownEvent2}>Celebrities</MenuItem>
                      <MenuItem eventKey="Wonderbolts" onSelect={this.dropdownEvent2}>Wonderbolts</MenuItem>
                      <MenuItem eventKey="Pillars of Old Equestria" onSelect={this.dropdownEvent2}>Pillars of Old Equestria</MenuItem>
                    </DropdownButton>
                    <DropdownButton id="sortDropdown" title={"Sort by"} class="dropdown">
                      <MenuItem eventKey="None" onSelect={this.dropdownEvent3}>None</MenuItem>
                      <MenuItem eventKey="year" onSelect={this.dropdownEvent3}>Year Released (Increasing)</MenuItem>
                    </DropdownButton>
                </div>
                <div class="pony-list">
                    <List items={this.props.items.filter(this.filterBy).sort(this.sortBy)} /> 
                </div>
            </div>
        );
    }
}
export default FilteredList;