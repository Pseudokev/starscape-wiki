<script>

    let props = $props();
</script>

<div class="overview_box">
    <div class = "overview">
        <h2 style="text-align:center; font-size:medium"><strong>{props.title}</strong> </h2>
        <img src={props.image.src} alt={props.image.alt} class="overview-img">
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

<style>
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