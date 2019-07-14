let getNumbers = (string) => {


    let arr = string.split('')
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '1':
                arr2.push(arr[i])
                break;
            case '2':
                arr2.push(arr[i])
                break;
            case '3':
                arr2.push(arr[i])
                break;
            case '4':
                arr2.push(arr[i])
                break;
            case '5':
                arr2.push(arr[i])
                break;
            case '6':
                arr2.push(arr[i])
                break;
            case '7':
                arr2.push(arr[i])
                break;
            case '8':
                arr2.push(arr[i])
                break;
            case '9':
                arr2.push(arr[i])
                break;
                default: 
                [];
        }
    }
    return arr2;
}