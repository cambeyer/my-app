import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';


/*
    This list of ponies that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const ponies = [
  {name: "Apple Bloom", kind: "Earth pony", group: "Cutie Mark Crusaders", year:2010, image:"images/applebloom.png"},  
  {name: "Applejack", kind: "Earth pony", group: "Main Characters", year:1983, image:"./images/applejack.jpg"},
  {name: "Fluttershy", kind: "Pegasus", group: "Main Characters", year:2003, image:"./images/fluttershy.png"},  
  {name: "Pinkie Pie", kind: "Earth pony", group: "Main Characters", year:2003, image:"./images/pinkiepie.jpg"},
  {name: "Princess Celestia", kind: "Alicorn", group: "Royalty", year:2010, image:"./images/celestia.png"},
  {name: "Princess Luna", kind: "Alicorn", group: "Royalty", year:2011, image:"./images/luna.png"},
  {name: "Rainbow Dash", kind: "Pegasus", group: "Main Characters", year:2003, image:"./images/rainbowdash.jpg"},
  {name: "Rarity", kind: "Unicorn", group: "Main Characters", year:2006, image:"./images/rarity.png"},
  {name: "Scootaloo", kind: "Pegasus", group: "Cutie Mark Crusaders", year:2005, image:"./images/scootaloo.png"},
  {name: "Starlight Glimmer", kind: "Unicorn", group: "Antagonists (reformed)", year:2015, image:"./images/starlight.png"},
  {name: "Sweetie Belle", kind: "Unicorn", group: "Cutie Mark Crusaders", year:2008, image:"./images/sweetiebelle.png"}, 
  {name: "Twilight Sparkle", kind: "Alicorn", group: "Main Characters", year:1983, image:"./images/twilight.png"},
  {name: "Spike", kind: "Dragon", group: "Main Characters", year:2010, image:"./images/spike.jpg"},
  {name: "Babs Seed", kind: "Earth pony", group: "Cutie Mark Crusaders", year:2012, image:"./images/babs.png"},
  {name: "Gabby", kind: "Griffon", group: "Cutie Mark Crusaders", year:2016, image:"./images/gabby.png"},
  {name: "Shining Armor", kind: "Unicorn", group: "Royalty", year:2012, image:"./images/shining.png"},
  {name: "Princess Cadence", kind: "Alicorn", group: "Royalty", year:2012, image:"./images/cadence.png"},
  {name: "Ember", kind: "Dragon", group: "Royalty", year:2016, image:"./images/ember.png"},
  {name: "Thorax", kind: "Changeling", group: "Royalty", year:2016, image:"./images/thorax.png"},
  {name: "Flurry Heart", kind: "Alicorn", group: "Royalty", year:2016, image:"./images/flurry.png"},
  {name: "Prince Rutherford", kind: "Yak", group: "Royalty", year:2015, image:"./images/rutherford.png"},
  {name: "Queen Chrysalis", kind: "Changeling", group: "Antagonists", year:2012, image:"./images/chrysalis.png"}, 
  {name: "Lord Tirek", kind: "Centaur", group: "Antagonists", year:2014, image:"./images/tirek.png"},
  {name: "Nightmare Moon", kind: "Alicorn", group: "Antagonists", year:2010, image:"./images/nightmare.png"},
  {name: "Discord", kind: "Draconequus", group: "Antagonists (reformed)", year:2011, image:"./images/discord.png"},
  {name: "King Sombra", kind: "Unicorn", group: "Antagonists (reformed)", year:2012, image:"./images/sombra.png"},
  {name: "Trixie", kind: "Unicorn", group: "Antagonists (reformed)", year:2010, image:"./images/trixie.png"}, 
  {name: "Gilda", kind: "Griffon", group: "Antagonists (reformed)", year:2010, image:"./images/gilda.png"},
  {name: "Countess Coloratura", kind: "Earth pony", group: "Celebrities", year:2015, image:"./images/coloratura.png"},
  {name: "Photo Finish", kind: "Earth pony", group: "Celebrities", year:2011, image:"./images/photo.png"},
  {name: "Hoity Toity", kind: "Earth pony", group: "Celebrities", year:2011, image:"./images/hoity.png"},
  {name: "Sapphire Shores", kind: "Earth pony", group: "Celebrities", year:2011, image:"./images/sapphire.png"},
  {name: "Fancy Pants", kind: "Unicorn", group: "Celebrities", year:2011, image:"./images/fancy.png"},
  {name: "Daring Do", kind: "Pegasus", group: "Celebrities", year:2012, image:"./images/daring.png"},
  {name: "Prim Hemline", kind: "Earth pony", group: "Celebrities", year:2014, image:"./images/prim.png"},
  {name: "Trenderhoof", kind: "Unicorn", group: "Celebrities", year:2014, image:"./images/trenderhoof.png"},
  {name: "Spitfire", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/spitfire.png"},
  {name: "Soarin", kind: "Pegasus", group: "Wonderbolts", year:2010, image:"./images/soarin.png"},
  {name: "Blaze", kind: "Pegasus", group: "Wonderbolts", year:2010, image:"./images/blaze.png"},
  {name: "Surprise", kind: "Pegasus", group: "Wonderbolts", year:1984, image:"./images/surprise.jpg"},
  {name: "Fire Streak", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/fire.png"},
  {name: "Misty Fly", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/misty.png"},
  {name: "Silver Zoom", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/silver.png"},
  {name: "Fleetfoot", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/fleetfoot.png"},
  {name: "High Winds", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/high.png"},
  {name: "Mage Meadowbrook", kind: "Earth pony", group: "Pillars of Old Equestria", year:2003, image:"./images/mage.png"},
  {name: "Flash Magnus", kind: "Pegasus", group: "Pillars of Old Equestria", year:2017, image:"./images/flash.png"},
  {name: "Mistmane", kind: "Unicorn", group: "Pillars of Old Equestria", year:2016, image:"./images/mistmane.png"},
  {name: "Rockhoof", kind: "Earth pony", group: "Pillars of Old Equestria", year:2016, image:"./images/rockhoof.png"},
  {name: "Somnambula", kind: "Pegasus", group: "Pillars of Old Equestria", year:2016, image:"./images/somnambula.png"},
  {name: "Star Swirl the Bearded", kind: "Unicorn", group: "Pillars of Old Equestria", year:2017, image:"./images/star.png"}
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