const data = document.querySelector('.data')
function prng (a,x,c,m){
    let calc = ( a * x + c) % m
    x = calc
    data.textContent=calc
  }
setInterval(() => {
  prng(5, 6,8,5) 
}, 1000);
