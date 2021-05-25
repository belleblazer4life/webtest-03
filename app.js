const min=100
const max=150
function mkRnd(){
let rnd=Math.floor(Math.random()* (min+(max-min)))
return rnd
}

let str
let val=[]
for (let i=0; i<50;i++){
  val.push(mkRnd())
}

const obj={
  ETX:10,
  STX:11,
  SOH:12,
  SOT:14,
  EOH:13
}

const {ETX ,...EOH}=obj;

console.log(STX)

