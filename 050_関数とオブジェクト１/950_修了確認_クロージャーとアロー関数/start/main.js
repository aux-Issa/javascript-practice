/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 * 
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */
const addNumberFactory = num => value => num + value
// function addNumberFactory(num) {
//     function addNumber(value) {
//         return num + value;
//     }
//     return addNumber;
// }


const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */
const incrementFactory = () => {
    let num = 0;
    return () => {
        num = num + 1
        console.log(num)
    }
}
// function incrementFactory() {
    
//     let num = 0;

//     function a() {
//         num = num + 1;
//         console.log(num);
//     }

//     return a;
// }

const increment = incrementFactory();

increment();
increment();
increment();
increment();
///////////incrementFactoryの中でnumがセットされた関数がincrementに代入される//////
