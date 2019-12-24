import {flag,sum,num1,height,mul,Person} from "./aaa.js";
 
if(flag){
	console.log("来自于mmm文件")
	console.log(sum(40,50));
	console.log(num1,height)
}

let p1 = new Person();
p1.run()

import addr from "./aaa.js"
console.log(addr)

// 统一全部导入,记得给别名
import * as aaa from "./aaa.js"
const p2 = new aaa.Person();
p2.run();