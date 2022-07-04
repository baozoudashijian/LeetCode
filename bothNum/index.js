const numbers = [2, 7, 11, 15]
const target = 9

function bothNum(numbers, target) {
    const obj = {}
    let result

    for (let i = 0; i < numbers.length; i++) {
        if (obj[target - numbers[i]] || obj[target - numbers[i]] == 0) {
            result = [obj[target - numbers[i]], i]
            break;
        } else {
            obj[numbers[i]] = i
        }
    }
    return result
}

console.log(bothNum(numbers, target))

// 出题者保证
// 1. numbers中的数字不会重复
// 2. 只会存在一个有效答案