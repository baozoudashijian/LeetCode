
// 正确答案：111111111011111110
function calculateNumber(strA, strB) {
    const maxLength = Math.max(strA.length, strB.length)
    let fullTen = false
    let result = ''

    for(let i=1; i<=maxLength; i++) {
        let numberA = strA[maxLength - i] || '0' 
        let numberB = strB[maxLength - i] || '0'
        
        let addNumber = parseInt(numberA) + parseInt(numberB)
        
        if(fullTen) {
            addNumber += 1
        }

        if(addNumber >= 10) {
            addNumber -= 10
            fullTen = true
        } else {
            fullTen = false
        }
        console.log(numberA, numberB, addNumber, 'addNumber')
        result += addNumber
    }
    if(fullTen) {
        result += 1
    }

    console.log(result)
    return result
}

calculateNumber('11111111101234567', '77777777707654321')