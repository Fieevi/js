// albel语句 可以配合 break和continue使用
// 返回到标签地址
// 从无限嵌套的循环跳出

/* 
    语法
    label标签

    for() {
        break | continue  label标签
    }

 */

let num = 0;
outPoint:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 3 && j == 5) {
            break outPoint;
            // break直接跳出内外循环,强制执行循环外语句
        }
        num++; // 输出35
    }
}

console.log(num);
//

let sum = 0;
outPoint:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 3 && j == 5) {
            continue outPoint;
        }
        sum++; // 输出95
    }
}

console.log(sum); 