const math = require('./js/mathUtils.js')

console.log("Hello Webpack")
console.log(math.add(20,30))
console.log(math.mul(20,30))
console.log(math.div(10,20))


require('./css/normal.css')
require('./css/special.less')
document.writeln('<div> Hello World</div>')