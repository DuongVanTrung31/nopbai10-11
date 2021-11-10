let so1 = + prompt('Nhập số 1');
let so2 = + prompt('Nhập số 2');
let so3 = + prompt('Nhập số 3');
if (so1 > so2) {
    if (so1 > so3) {
        alert('Số lớn nhất là: '+ so1);
    } else if (so1 === so3) {
        alert('Số lớn nhất là: '+ so1 +';'+ so3  );
    } else {
        alert('Số lớn nhất là: ' + so3);
    }
} else if (so1 === so2) {
    if (so2 > so3) {
        alert('Số lớn nhất là:' + so1 + ';' + so2);
    }
} else {
    if (so2 > so3) {
        alert('Số lớn nhất là: ' + so2);
    } else if (so2 === so3) {
        alert('Số lớn nhất là: ' + so2 + ';' + so3);
    } else {
        alert('Số lớn nhất là: ' + so3)
    }
}