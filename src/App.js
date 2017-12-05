import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';


/*
    This list of ponies that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const ponies = [
  {name: "Apple Bloom", kind: "Earth pony", group: "Cutie Mark Crusaders", year:2010, image:"images/applebloom.png"},  
  {name: "Applejack", kind: "Earth pony", group: "Mane Six", year:1983, image:"./images/applejack.jpg"},
  {name: "Fluttershy", kind: "Pegasus", group: "Mane Six", year:2003, image:"./images/fluttershy.png"},  
  {name: "Pinkie Pie", kind: "Earth pony", group: "Mane Six", year:2003, image:"./images/pinkiepie.jpg"},
  {name: "Princess Celestia", kind: "Alicorn", group: "Royalty", year:2010, image:"./images/celestia.png"},
  {name: "Princess Luna", kind: "Alicorn", group: "Royalty", year:2011, image:"./images/luna.png"},
  {name: "Rainbow Dash", kind: "Pegasus", group: "Mane Six", year:2003, image:"./images/rainbowdash.jpg"},
  {name: "Rarity", kind: "Unicorn", group: "Mane Six", year:2006, image:"./images/rarity.png"},
  {name: "Scootaloo", kind: "Pegasus", group: "Cutie Mark Crusaders", year:2005, image:"./images/scootaloo.png"},
  {name: "Starlight Glimmer", kind: "Unicorn", group: "Antagonists", year:2015, image:"./images/starlight.png"},
  {name: "Sweetie Belle", kind: "Unicorn", group: "Cutie Mark Crusaders", year:2008, image:"./images/sweetiebelle.png"}, 
  {name: "Twilight Sparkle", kind: "Alicorn", group: "Mane Six", year:1983, image:"./images/twilight.png"}
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* 
                  The list of ponies will be passed into the FilteredList
                  component the items property.
                */}
                <FilteredList items={ponies} />
            </div>
        );
    }
}

export default App;