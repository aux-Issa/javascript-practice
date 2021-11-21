/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
// class Calculator{
// 	constructor(num){
// 		this.num = null;
// 		this._operater;
// 	}
// 	set(num){
// 		if(this.num === null){
// 			this.num = num
// 		}else{
// 			this._operater(this.num, num)
// 		}
// 		return this
// 	}
// 	minus(){
// 		this._operater = function(num1, num2){
// 			const result = num1 - num2
// 			this._equal(result)
// 		} 
// 		return this
// 	}
// 	_equal(result){
// 		this.num = result
// 		console.log(result)
// 	}
// }
// const calc = new Calculator();

// calc.set(10)
// 	.minus()
// 	.set(3)
// 	// .mutiply()
// 	// .set(6)
// 	// .divide()
// 	// .set(2)
// 	// .plus()
// 	// .set(2)
class Calculator {
	constructor(){
		this.num = null;
		this._calculate;
	}
	set(num){
		if(this.num === null){
			this.num = num
		}else{
			this._calculate(this.num,  num);
		}
		return this;
	}
	multiply(){
		this._calculate = function(initialNum, num){
			const result = initialNum * num;
        	this._outPutandSet(result)
		}
		return this;
	}
	divide(){
		this._calculate = function(initialNum, num){
			const result = initialNum / num;
			this._outPutandSet(result)
		}
		return this;
	}
	_outPutandSet(result){
		console.log(result)
		this.num = result
	}
}
const calc = new Calculator()

calc.set(10).multiply().set(100).divide().set(100000)