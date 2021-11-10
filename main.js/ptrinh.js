let a = + prompt('Nhập số a');
let b = + prompt('Nhập số b');
let c = + prompt('Nhập số c');

// delta
let d = b*b - 4*a*c;

let x1, x2;
if (a == 0 && b == 0 && c == 0) {
    alert('pt có vô số nghiệm');
} else if (a == 0 && b!= 0) {
    x1 = -c / b
    alert(`pt co nghiệm ${x1}`)
}
else {
    if (d < 0) {
        alert('pt có vô nghiêm ')
    } else if ( d == 0) {
        x1 = x2 = -b/(2*a);
        alert(`pt có nghiệm kép ${x1}`)
    } else {
        x1 = (-b - Math.sqrt(d))/(2*a);
        x2 = (-b + Math.sqrt(d))/(2*a);
        alert(`pt có nghiệm kép ${x1} và ${x2}`);
    }
}