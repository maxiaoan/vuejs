let name  = "小名"
let age = 18
let flag  = true

function sum(num1, num2){
	return num1 + num2
}

if (flag){
	console.log("来自于aaa文件")
	console.log(sum(10,20))
}
// 导出对象
export{
	flag,sum
	}
	
// 导出变量
export let num1 = 200;
export let height = 188;
// 导出函数和类
export function mul(num1,num2){
	return num1 * num2
}

export class Person{
	run(){
		console.log("Running")
	}
}
// export default 只能有一个
const address = "北京市"
export default address

