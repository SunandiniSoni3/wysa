
// `````````````````````````````````````````````` valid data``````````````````````````````````````````````
const isValid= function (value) {
    console.log(value)
    if (typeof value == "undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    if (typeof value === "Number" && value.trim().length === 0) return false
    if(Array.isArray(value)&& value.length==0) return false
    return true
};

// ``````````````````````````````````````````````````enum value check`````````````````````````````````````
const isValidValue = function(value,a){
    if(a) return ["I would go to sleep easily","I will sleep through the night","i'd wake up on time"].includes(value)
    
    else return ["Less than 2 weeks","2 to 8 Weeks","More than 8 Weeks"].includes(value)
}

// ``````````````````````````````````````````````````minute Conversion````````````````````````````````````````
const convertMin = function(value){
    value = value.toLowerCase()
    let x= value.split(" ")
    let hour =Number(x[0].slice(0,2))
    let min = Number(x[0].slice(3))
    if(x[1]=="am"){ 
        if(hour==12) hour=0
        value=hour*60+min
    }
    else  value = (12+hour)*60 + min
    return value
    
}

// ```````````````````````````````````````````````password`````````````````````````````````````

module.exports ={isValid,convertMin,isValidValue}