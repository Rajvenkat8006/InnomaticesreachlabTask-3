// Smart Traffic Light System.
//Write a function trafficLightControl(density) that returns how long the green signal will stay on.

function trafficLightControl(density){
    
    if(density === "HeavyTraffic"){
        return "Green for 60 Seconds"
    }
    else if(density === "ModernTraffic"){
        return "Green for 40 Seconds"
    }
    else if(density === "LightTraffic"){
        return "Green for 20 Seconds"
    }
    else{
        return 0;
    }
}
console.log(trafficLightControl("LightTraffic"));
console.log(trafficLightControl("HeavyTraffic"));
