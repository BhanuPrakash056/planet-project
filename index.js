const { parse } = require('csv-parse');
const fs = require('fs')
const result = []

function isHabitablePlanet(planet){
    return planet['koi_disposition'] ===  "CONFIRMED" && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
}
fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment : '#',
    columns : true,
}))
.on ('data',(data)=>{
    if (isHabitablePlanet(data)){
    result.push(data);
    }
})
.on('end',()=>{
    console.log(result)
})
.on('error' ,(err)=>{
    console.log(err)
})
parse()
