function calc(num1, num2, op) {
    return new Promise((resolve, reject) => {
        if (['addition', 'subtraction', 'multiplication', 'division'].includes(op)) {
            let result;
            switch (op) {
                case 'addition':
                    result = num1 + num2;
                    break;
                case 'subtraction':
                    result = num1 - num2;
                    break;
                case 'multiplication':
                    result = num1 * num2;
                    break;
                case 'division':
                    if (num2 === 0) {
                        reject('Division by zero');
                        return;
                    }
                    result = num1 / num2;
                    break;
            }
            resolve(result);
        } else {
            reject('Invalid operation');
        }
    });
}

// Examples
calc(10, 5, 'multiplication')
    .then(result => console.log(result))
    .catch(error => console.error(error));

calc(10, 0, 'division')
    .then(result => console.log(result))
    .catch(error => console.error(error)); 

calc(10, 5, 'addition')
    .then(result => console.log(result))
    .catch(error => console.error(error)); 
