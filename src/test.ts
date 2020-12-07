let num :number = 0;
num = 1;

function add (a :number, b :number){
  console.log(a+b);
  
  return a + b ;
}

const add2 = ( a:number, b:string) => {
  console.log( a + b );
}

add(5, 3);
add2(1, 'hello')