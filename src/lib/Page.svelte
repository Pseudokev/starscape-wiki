<script>

    import Divider from "./Divider.svelte";
    import svlogo from "../assets/placeholder.png";

    let props = $props();
</script>
<input type="search" class="search" name = "search" placeholder = "Search">
<div class="page">
    
    <h2 class="title">{props.title}</h2>
    
    
    <Divider/>
    <div class="overview_box">
        <div class = "overview">
            <h2 style="text-align:center; font-size:medium"><strong>Drone Battleship</strong> </h2>
            <img src={svlogo} alt="drone Battleship" class="overview-img">
            <br>
            <p class="overview-text" style="text-align:center; margin-top:10px; margin-bottom:0px;"><strong>Information</strong></p>
            <p class="overview-text">
                Type: <span style="float:right;">
                    Battleship
                </span><br>
                Manufacturer: <span style="float:right;">
                    Drones
                </span><br>
                Length: <span style="float:right;">
                    875m
                </span><br>
                Armament: <span style="float:right;">
                    10L 34M 28S
                </span><br>
                Obtainable: <span style="float:right;">
                    No
                </span><br>
                
            </p>
            <p class="overview-text" style="text-align:center; margin-top:10px; margin-bottom:0px;"><strong>Stats</strong></p>
            <p class="overview-text">
                Top Speed: <span style="float:right;">
                    Unknown
                </span><br>
                Accelleration: <span style="float:right;">
                    Unknown
                </span><br>
                Shield Regeneration: <span style="float:right;">
                    N/A
                </span><br>
                Shield Health: <span style="float:right;">
                    N/A
                </span><br><br>
            </p>
            
        </div>
    </div>
    <p class="paragraph">
        The Drone Battleship is an enormous drone ship that has a 10% (?) chance to appear after defeating a Drone Armada. 
        It is currently the largest and most powerful enemy in the game, having unmatched durability and firepower. The Battleship is also unique
        in that it is defeated much like Drone Factories, where the ship itself cannot be destroyed and instead individual components of the ship must be destroyed in order to
        blow up it's internal reactor, at which point the entire ship explodes. It is currently the only boss fight in the game, however it is entirely optional and it doesn't drop any unique items when defeated.
        It always spawns with a formidable escort force of elite frigates and destroyers.
    </p>
    <p>
        The Drone Battleship consists of 8 different component types.
    </p>
    <ul>
        <li><strong>Central Battlements</strong><br>The Central Battlements are the most heavily armed on the ship, each having two large, four medium, and four small turrets. When destroyed, the central battlements break away and reveal the main reactor inside.</li>
        <li><strong>Frontal Battlements</strong><br>The Frontal Battlements are nearly as strong as the central battlements, housing two large, three medium, and four small turrets. When destroyed, the frontal battlements break away and reveal one of the reactor shield generators. </li>
        <li><strong>Engine Battlements</strong><br>The Engine Battlements do not have a formidable armament like the central and frontal. They each have four medium and three small turrets. When destroyed, the Battleship has its max speed reduced.</li>
        <li>Two External Shield Generators</li>
        <li>Two Reactor Shield Generators</li>
        <li>Communications Array</li>
        <li>Main Reactor</li>
        <li><strong>Superstructure</strong><br>The superstructure is the main hull of the ship, and is connected to all other components. It is impervious to all damage, even if damage indicators may appear on it when shot.</li>
    </ul>
    <p class="paragraph">
        All components can be destroyed except for the superstructure, which is the main part of the ship all the others are attached to. The superstructure is completely impervious to all damage, even though damage indicators may appear on it when shot. 
        The Battleship is defeated by destroying the main reactor at its center, hidden behind the central battlements.
    </p>
    
    
</div>

<style>
    .search{
        position: absolute;
        right: 0px;
        top:-35px;
        height: 25px;
        
    }
    .page{
        position: relative;
        width: 90%;
        left:5%;
        top:5%;
        line-height: 1.5;
        
    }
    .title{
        font-size: xx-large;
        text-wrap: balance;
        margin-top: 50px;
    }
    .paragraph{
        height: 500px auto;
        direction: ltr;
        
        text-wrap: wrap;
        text-indent: 50px;
        
    }
    .overview_box{
        background-color: #1f1f1f00;

        width: 350px;
        height:  auto;
        min-height: 600px;
        float:right;

        top: 500px;
        right:100px;
    }
    .overview{
        height: auto;
        width: 90%;
        min-height: 590px;
        top:5px;
        left:5%;
        background-color: #3c3c3c;
        position: relative;
        border-color: rgb(100, 100, 100);
        border-style: solid;
        border-width: 1px;
    }
    .overview-img{
        width: 70%;
        aspect-ratio: 1;
        position: relative;
        background-color: #2f2f2f;
        border-style: solid;
        border-width: 1px;
        border-color: rgb(100, 100, 100);
        left:15%;
    }
    .overview-text{
        font-size: small;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 0px;
    }
</style>