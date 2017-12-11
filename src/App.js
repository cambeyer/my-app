import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';


/*
    This list of ponies that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const ponies = [
  {name: "Apple Bloom", kind: "Earth pony", group: "Cutie Mark Crusaders", year:2010, image:"images/applebloom.png", quote:"Well, one thing is for sure. The Cutie Mark Crusaders will never be the same. We'll be better!"},  
  {name: "Applejack", kind: "Earth pony", group: "Main Characters", year:1983, image:"./images/applejack.jpg", quote:"Listen here, you rabid rhododendrons! You mess with one of us, you mess with all of us!"},
  {name: "Fluttershy", kind: "Pegasus", group: "Main Characters", year:2003, image:"./images/fluttershy.png", quote:"Well, guess what, Sassafras? I'm Opposite Fluttershy, and I'm sick of being nice and quiet all the time!"},  
  {name: "Pinkie Pie", kind: "Earth pony", group: "Main Characters", year:2003, image:"./images/pinkiepie.jpg", quote:"Laughs don't come in barrels. They come from inside you as your body's response to delight."},
  {name: "Princess Celestia", kind: "Alicorn", group: "Royalty", year:2010, image:"./images/celestia.png", quote:"Luna, I will not fight you. You must lower the moon, it is your duty."},
  {name: "Princess Luna", kind: "Alicorn", group: "Royalty", year:2011, image:"./images/luna.png", quote:"Sometimes we can worry about a thing so much, the fear can make us feel we're trapped in a nightmare."},
  {name: "Rainbow Dash", kind: "Pegasus", group: "Main Characters", year:2003, image:"./images/rainbowdash.jpg", quote:"Duh! Because I'm a Wonderbolt."},
  {name: "Rarity", kind: "Unicorn", group: "Main Characters", year:2006, image:"./images/rarity.png", quote:"Of all the worst things that could happen, this is the. Worst. Possible. Thing."},
  {name: "Scootaloo", kind: "Pegasus", group: "Cutie Mark Crusaders", year:2005, image:"./images/scootaloo.png", quote:"Winners or not, we still have the chance to be awesome."},
  {name: "Starlight Glimmer", kind: "Unicorn", group: "Antagonists (reformed)", year:2015, image:"./images/starlight.png", quote:"I know there's no excuse for what I did, but I want you all to know that I'm ready for whatever punishment you think is fair."},
  {name: "Sweetie Belle", kind: "Unicorn", group: "Cutie Mark Crusaders", year:2008, image:"./images/sweetiebelle.png", quote:"She could be a great scientist, or an amazing artist, or a famous writer. She could even be mayor of Ponyville some day."}, 
  {name: "Twilight Sparkle", kind: "Alicorn", group: "Main Characters", year:1983, image:"./images/twilight.png", quote:"Reading is something everypony can enjoy, if they just give it a try."},
  {name: "Spike", kind: "Dragon", group: "Main Characters", year:2010, image:"./images/spike.jpg", quote:"He's not a 'thing'. His name is Thorax, and he's my friend."},
  {name: "Babs Seed", kind: "Earth pony", group: "Cutie Mark Crusaders", year:2012, image:"./images/babs.png", quote:"What am I, gonna miss out on spendin' time with my favorite cousin? Forget about it!"},
  {name: "Gabby", kind: "Griffon", group: "Cutie Mark Crusaders", year:2016, image:"./images/gabby.png", quote:"Crusaders forever!"},
  {name: "Shining Armor", kind: "Unicorn", group: "Royalty", year:2012, image:"./images/shining.png", quote:"The burden of keeping Canterlot safe and secure rests squarely on my shoulders."},
  {name: "Princess Cadence", kind: "Alicorn", group: "Royalty", year:2012, image:"./images/cadence.png", quote:"Being around other people isn't a bad thing. Sometimes it's how you learn the most about yourself."},
  {name: "Ember", kind: "Dragon", group: "Royalty", year:2016, image:"./images/ember.png", quote:"I'm smarter than most of these boulderheads, and you know it."},
  {name: "Thorax", kind: "Changeling", group: "Royalty", year:2016, image:"./images/thorax.png", quote:"Once I made a few friends, I guess I just sort of forgot about the whole feeding thing."},
  {name: "Flurry Heart", kind: "Alicorn", group: "Royalty", year:2016, image:"./images/flurry.png", quote:"coo"},
  {name: "Prince Rutherford", kind: "Yak", group: "Royalty", year:2015, image:"./images/rutherford.png", quote:"Pink pony work hard to make yaks feel at home. Now yaks happy. No declare war."},
  {name: "Queen Chrysalis", kind: "Changeling", group: "Antagonists", year:2012, image:"./images/chrysalis.png", quote:"You three have spent almost three days with me and you haven't figured out how powerful I am? I'm hurt. Really"}, 
  {name: "Lord Tirek", kind: "Centaur", group: "Antagonists", year:2014, image:"./images/tirek.png", quote:"I can assure you I am no friend. I am Lord Tirek, and I will take what should have been mine long ago."},
  {name: "Nightmare Moon", kind: "Alicorn", group: "Antagonists", year:2010, image:"./images/nightmare.png", quote:"Luna? I am Nightmare Moon. I have but one royal duty now: to destroy you!"},
  {name: "Discord", kind: "Draconequus", group: "Antagonists (reformed)", year:2011, image:"./images/discord.png", quote:"Oh. Well, I've... never really had a friend before."},
  {name: "King Sombra", kind: "Unicorn", group: "Antagonists (reformed)", year:2012, image:"./images/sombra.png", quote:"Crystals..."},
  {name: "Trixie", kind: "Unicorn", group: "Antagonists (reformed)", year:2010, image:"./images/trixie.png", quote:"Behold, the geat and prowerful Trixie!"}, 
  {name: "Gilda", kind: "Griffon", group: "Antagonists (reformed)", year:2010, image:"./images/gilda.png", quote:"Right on, Princess Twilight! You always know what's best."},
  {name: "Countess Coloratura", kind: "Earth pony", group: "Celebrities", year:2015, image:"./images/coloratura.png", quote:"Hoofsies!"},
  {name: "Photo Finish", kind: "Earth pony", group: "Celebrities", year:2011, image:"./images/photo.png", quote:"I, Photo Finish, have arrived."},
  {name: "Hoity Toity", kind: "Earth pony", group: "Celebrities", year:2011, image:"./images/hoity.png", quote:"Oh, this can't be the same designer."},
  {name: "Sapphire Shores", kind: "Earth pony", group: "Celebrities", year:2011, image:"./images/sapphire.png", quote:"One more time, from the top. Let's not embarrass me in front of my favorite designer this time."},
  {name: "Fancy Pants", kind: "Unicorn", group: "Celebrities", year:2011, image:"./images/fancy.png", quote:"Three cheers for Rarity, my new favorite party guest!"},
  {name: "Daring Do", kind: "Pegasus", group: "Celebrities", year:2012, image:"./images/daring.png", quote:"Another day, another dungeon."},
  {name: "Prim Hemline", kind: "Earth pony", group: "Celebrities", year:2014, image:"./images/prim.png", quote:"Rarity, they all adore you! Aren't you going to tell them about your fabulous pieces?"},
  {name: "Trenderhoof", kind: "Unicorn", group: "Celebrities", year:2014, image:"./images/trenderhoof.png", quote:"I once had an apple so rare, they thought it was extinct. I ate four of them."},
  {name: "Spitfire", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/spitfire.png", quote:"Will it be hard? Yes. Will you cry? Maybe. Will you fly so much your wings fall off? That has only happened once."},
  {name: "Soarin", kind: "Pegasus", group: "Wonderbolts", year:2010, image:"./images/soarin.png", quote:"My nickname's 'Clipper'. You know why they call me that? Because I clipped my wing on a flagpole as I was landing on my first day."},
  {name: "Blaze", kind: "Pegasus", group: "Wonderbolts", year:2010, image:"./images/blaze.png",quote:"Rainbow Dash is still gone!"},
  {name: "Surprise", kind: "Pegasus", group: "Wonderbolts", year:1984, image:"./images/surprise.jpg", quote:"Slowpoke"},
  {name: "Fire Streak", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/fire.png", quote:"I retired to become a teacher"},
  {name: "Misty Fly", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/misty.png", quote:"Whoa, most awesome entrance by a newbie ever."},
  {name: "Silver Zoom", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/silver.png", quote:"Hahaha"},
  {name: "Fleetfoot", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/fleetfoot.png", quote:"'Flatfoot'. My first day, I misjudged my landing and came down right on Spitfire's hoof."},
  {name: "High Winds", kind: "Pegasus", group: "Wonderbolts", year:2011, image:"./images/high.png", quote:"'Hoof-in-Mouth'"},
  {name: "Mage Meadowbrook", kind: "Earth pony", group: "Pillars of Old Equestria", year:2003, image:"./images/mage.png", quote:"We had no idea our small seed would bloom into the living spirit of the land. I am glad our mantles have passed to such capable ponies."},
  {name: "Flash Magnus", kind: "Pegasus", group: "Pillars of Old Equestria", year:2017, image:"./images/flash.png", quote:"Commander, we need to save our captured comrades."},
  {name: "Mistmane", kind: "Unicorn", group: "Pillars of Old Equestria", year:2016, image:"./images/mistmane.png", quote:"My friend would never work our families and friends to the bone for something as silly as a palace."},
  {name: "Rockhoof", kind: "Earth pony", group: "Pillars of Old Equestria", year:2016, image:"./images/rockhoof.png", quote:"Stygian was a pony like the rest of us."},
  {name: "Somnambula", kind: "Pegasus", group: "Pillars of Old Equestria", year:2016, image:"./images/somnambula.png", quote:"Each of us infused a crystal seed with our magic in hopes that it would grow into a force for good."},
  {name: "Star Swirl the Bearded", kind: "Unicorn", group: "Pillars of Old Equestria", year:2017, image:"./images/star.png", quote:"If it is wisdom you seek, look no further than your own pupil."}
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