function retornaPares(x, y) {
    while (x <= y) {
        if (x % 2 == 0) {
            console.log(x);
        }
        x++
    }
}

retornaPares(1,100)