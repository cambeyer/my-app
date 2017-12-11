import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

/*
    This list of ponies that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const ponies = [
  {name: "Apple Bloom", kind: "Earth pony", category: "Cutie Mark Crusaders", year:2010, image:"images/applebloom.png", parent:"applebloom", quote:"Well, one thing is for sure. The Cutie Mark Crusaders will never be the same. We'll be better!"},  
  {name: "Applejack", kind: "Earth pony", category: "Main Characters", year:1983, image:"./images/applejack.jpg", parent:"applejack", quote:"What I'm telling you is the honest truth. Let go, and you'll be safe"},
  {name: "Fluttershy", kind: "Pegasus", category: "Main Characters", year:2003, image:"./images/fluttershy.png", parent:"fluttershy"},  
  {name: "Pinkie Pie", kind: "Earth pony", category: "Main Characters", year:2003, image:"./images/pinkiepie.jpg", parent:"pinkiepie"},
  {name: "Princess Celestia", kind: "Alicorn", category: "Royalty", year:2010, image:"./images/celestia.png", parent:"celestia"},
  {name: "Princess Luna", kind: "Alicorn", category: "Royalty", year:2011, image:"./images/luna.png", parent:"luna"},
  {name: "Rainbow Dash", kind: "Pegasus", category: "Main Characters", year:2003, image:"./images/rainbowdash.jpg", parent:"rainbowdash"},
  {name: "Rarity", kind: "Unicorn", category: "Main Characters", year:2006, image:"./images/rarity.png", parent:"rarity"},
  {name: "Scootaloo", kind: "Pegasus", category: "Cutie Mark Crusaders", year:2005, image:"./images/scootaloo.png", parent:"scootaloo"},
  {name: "Starlight Glimmer", kind: "Unicorn", category: "Antagonists (reformed)", year:2015, image:"./images/starlight.png", parent:"starlight"},
  {name: "Sweetie Belle", kind: "Unicorn", category: "Cutie Mark Crusaders", year:2008, image:"./images/sweetiebelle.png", parent:"sweetiebelle"}, 
  {name: "Twilight Sparkle", kind: "Alicorn", category: "Main Characters", year:1983, image:"./images/twilight.png", parent:"twilight"},
  {name: "Spike", kind: "Dragon", category: "Main Characters", year:2010, image:"./images/spike.jpg", parent:"spike"},
  {name: "Babs Seed", kind: "Earth pony", category: "Cutie Mark Crusaders", year:2012, image:"./images/babs.png", parent:"babs"},
  {name: "Gabby", kind: "Griffon", category: "Cutie Mark Crusaders", year:2016, image:"./images/gabby.png", parent:"gabby"},
  {name: "Shining Armor", kind: "Unicorn", category: "Royalty", year:2012, image:"./images/shining.png", parent:"shining"},
  {name: "Princess Cadence", kind: "Alicorn", category: "Royalty", year:2012, image:"./images/cadence.png", parent:"cadence"},
  {name: "Ember", kind: "Dragon", category: "Royalty", year:2016, image:"./images/ember.png", parent:"ember"},
  {name: "Thorax", kind: "Changeling", category: "Royalty", year:2016, image:"./images/thorax.png", parent:"thorax"},
  {name: "Flurry Heart", kind: "Alicorn", category: "Royalty", year:2016, image:"./images/flurry.png", parent:"flurry"},
  {name: "Prince Rutherford", kind: "Yak", category: "Royalty", year:2015, image:"./images/rutherford.png", parent:"rutherford"},
  {name: "Queen Chrysalis", kind: "Changeling", category: "Antagonists", year:2012, image:"./images/chrysalis.png", parent:"chrysalis"}, 
  {name: "Lord Tirek", kind: "Centaur", category: "Antagonists", year:2014, image:"./images/tirek.png", parent:"tirek"},
  {name: "Nightmare Moon", kind: "Alicorn", category: "Antagonists", year:2010, image:"./images/nightmare.png", parent:"nightmare"},
  {name: "Discord", kind: "Draconequus", category: "Antagonists (reformed)", year:2011, image:"./images/discord.png", parent:"discord"},
  {name: "King Sombra", kind: "Unicorn", category: "Antagonists (reformed)", year:2012, image:"./images/sombra.png", parent:"sombra"},
  {name: "Trixie", kind: "Unicorn", category: "Antagonists (reformed)", year:2010, image:"./images/trixie.png", parent:"trixie"}, 
  {name: "Gilda", kind: "Griffon", category: "Antagonists (reformed)", year:2010, image:"./images/gilda.png", parent:"gilda"},
  {name: "Countess Coloratura", kind: "Earth pony", category: "Celebrities", year:2015, image:"./images/coloratura.png", parent:"coloratura"},
  {name: "Photo Finish", kind: "Earth pony", category: "Celebrities", year:2011, image:"./images/photo.png", parent:"photo"},
  {name: "Hoity Toity", kind: "Earth pony", category: "Celebrities", year:2011, image:"./images/hoity.png", parent:"hoity"},
  {name: "Sapphire Shores", kind: "Earth pony", category: "Celebrities", year:2011, image:"./images/sapphire.png", parent:"sapphire"},
  {name: "Fancy Pants", kind: "Unicorn", category: "Celebrities", year:2011, image:"./images/fancy.png", parent:"fancy"},
  {name: "Daring Do", kind: "Pegasus", category: "Celebrities", year:2012, image:"./images/daring.png", parent:"daring"},
  {name: "Prim Hemline", kind: "Earth pony", category: "Celebrities", year:2014, image:"./images/prim.png", parent:"prim"},
  {name: "Trenderhoof", kind: "Unicorn", category: "Celebrities", year:2014, image:"./images/trenderhoof.png", parent:"trenderhoof"},
  {name: "Spitfire", kind: "Pegasus", category: "Wonderbolts", year:2011, image:"./images/spitfire.png", parent:"spitfire"},
  {name: "Soarin", kind: "Pegasus", category: "Wonderbolts", year:2010, image:"./images/soarin.png", parent:"soarin"},
  {name: "Blaze", kind: "Pegasus", category: "Wonderbolts", year:2010, image:"./images/blaze.png", parent:"blaze"},
  {name: "Surprise", kind: "Pegasus", category: "Wonderbolts", year:1984, image:"./images/surprise.jpg", parent:"surprise"},
  {name: "Fire Streak", kind: "Pegasus", category: "Wonderbolts", year:2011, image:"./images/fire.png", parent:"fire"},
  {name: "Misty Fly", kind: "Pegasus", category: "Wonderbolts", year:2011, image:"./images/misty.png", parent:"misty"},
  {name: "Silver Zoom", kind: "Pegasus", category: "Wonderbolts", year:2011, image:"./images/silver.png", parent:"silver"},
  {name: "Fleetfoot", kind: "Pegasus", category: "Wonderbolts", year:2011, image:"./images/fleetfoot.png", parent:"fleetfoot"},
  {name: "High Winds", kind: "Pegasus", category: "Wonderbolts", year:2011, image:"./images/high.png", parent:"high"},
  {name: "Mage Meadowbrook", kind: "Earth pony", category: "Pillars of Old Equestria", year:2003, image:"./images/mage.png", parent:"mage"},
  {name: "Flash Magnus", kind: "Pegasus", category: "Pillars of Old Equestria", year:2017, image:"./images/flash.png", parent:"flash"},
  {name: "Mistmane", kind: "Unicorn", category: "Pillars of Old Equestria", year:2016, image:"./images/mistmane.png", parent:"mistmane"},
  {name: "Rockhoof", kind: "Earth pony", category: "Pillars of Old Equestria", year:2016, image:"./images/rockhoof.png", parent:"rockhoof"},
  {name: "Somnambula", kind: "Pegasus", category: "Pillars of Old Equestria", year:2016, image:"./images/somnambula.png", parent:"somnambula"},
  {name: "Star Swirl the Bearded", kind: "Unicorn", category: "Pillars of Old Equestria", year:2017, image:"./images/star.png", parent:"star"}
];



class App extends Component {
    render() {
        return (
            <div className="App">
              {/* 
                    The list of ponies will be passed into the FilteredList
                    component the items property.
              */}
                <FilteredList items={ponies}/>
            </div>
        );
    }
}

export default App;