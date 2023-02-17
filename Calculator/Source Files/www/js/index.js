let A = [];
let B = [];
let numbers = [];
let nm = '';
let out = 0;

function add() {
    B.push('+')
    console.log(B)
    for (var i = 0; i<numbers.length; i++) {
        nm = nm + numbers[i]
        console.log(nm)
    }
    A.push(Number(nm))
    console.log(A)
    numbers = []
    nm = ''
    show_eq()
}
function remove() {
    B.push('-')
    console.log(B)
    for (var i = 0; i<numbers.length; i++) {
        nm = nm + numbers[i];
        console.log(nm)
    }
    A.push(Number(nm))
    console.log(A)
    numbers = []
    nm = ''
    show_eq()
}
function multiply() {
    B.push('*')
    console.log(B)
    for (var i = 0; i<numbers.length; i++) {
        nm = nm + numbers[i]
        console.log(nm)
    }
    A.push(Number(nm))
    console.log(A)
    numbers = []
    nm = ''
    show_eq()
}
function divide() {
    B.push('/')
    console.log(B)
    for (var i = 0; i<numbers.length; i++) {
        nm = nm + numbers[i]
        console.log(nm)
    }
    A.push(Number(nm))
    console.log(A)
    numbers = []
    nm = ''
    show_eq()
}
function number(id) {
    numbers.push(String(id))
    show_eq()
}
function cl() {
    console.log('clearing')
    A = [];
    B = [];
    numbers = [];
    nm = '';
    document.getElementById('eq').innerText = '';
    document.getElementById('-1').innerText = '';
    console.log('cleared')
}
function show_eq() {
    var eq = document.getElementById('eq')
    eq.innerText = '';
    for (var i = 0; i<numbers.length; i++) {
        nm = nm + numbers[i]
        console.log(nm)
    }
    for (var j = 0; j<A.length; j++) {
        eq.innerText += A[j];
        eq.innerText += B[j];
    }
    numbers = [];
    eq.innerText += nm
}
function calc() {
    A.push(Number(nm))
    for (var k = 0; k < 5; k++) {
        switch (B[k]) {
            case '*': A[k]=A[k]*A[k+1];
                    console.log(A)
                    for (var i = k+1; i < A.length; i++) {
                        A[i] = A[i+1];
                    }
                     
                    for (var i = k; i < B.length; i++) {
                        B[i] = B[i+1];
                    }
                    k--
                    break;
            
            case '/': A[k]=A[k]/A[k+1];
                    for (var i = k+1; i < A.length; i++) {
                        A[i] = A[i+1];
                    }
                    
                    for (var i = k; i < B.length; i++) {
                        B[i] = B[i+1];
                    }
                    k--
                    break;
        }

    }
    out = A[0];
    for (var j = 0; j < 6; j++) {
        switch (B[j]) {
            case '+': out = out + A[j+1]; break;
            case '-': out = out - A[j+1]; break;
       }
    }
    console.log(out)
    console.log(A)
    console.log(B)
    document.getElementById('-1').innerText = document.getElementById('eq').innerText
    document.getElementById('eq').innerText = out;
    A = [];
    B = [];
    numbers = [];
    nm = '';
}