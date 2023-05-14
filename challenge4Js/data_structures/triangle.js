  let n = 6;
 for(let i = n; i >= 1; i--) {
   let row = '';
   for(let j = 1; j <= n - i; j++) {
     row += ' ';
   }
   for(let k = 1; k <= 2 * i - 1; k++) {
     row += '*';
   }
   console.log(row);
 }

 for(let i = 2; i <= n; i++) {
   let row = '';
   for(let j = 1; j <= n - i; j++) {
     row += ' ';
   }
   for(let k = 1; k <= 2 * i - 1; k++) {
     row += '*';
   }
   console.log(row);
 }


 for (let i = 5; i >= 0; i--){
    let row = '';
    for (let j = 0; j <= i; j++){
        row += '*';
    }
    console.log(row);
}

isoscles

for (let i = 1; i <= 7; i++){
    let row = '';

    for (let j = 1; j <= 7- i; j++) { 
        row += ' ';
    }

    for (let k = 1; k <= 2* i-1; k++) { 
        row += '*';
    }

    console.log (row);
}