function combination(n, r) {
    let answer = 0;
    if (n == r || r == 0) {
        return 1;
    }else{
        answer = combination(n-1, r - 1) + combination(n - 1, r);
    }
    return answer;
}

let answer = combination(100, 2);
console.log(answer);