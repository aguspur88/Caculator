const numbers=document.querySelectorAll(".number");
//console.log(numbers);

numbers.forEach((number) => {
  number.addEventListener("click",(event)=>{
    //console.log(event.target.value);
    //updateScreen(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentNumber);
    console.log(event.target.value);
  });
  //console.log(number);
});

//Tampilkan angka ke layar
const calculatorScreen=document.querySelector('.calculator-screen');

const updateScreen=(number)=>{
  calculatorScreen.value=number;
};

//menampilkan history screen

let prevNumber='';
let calculationOperator='';
let currentNumber='0';
let hasil='0'; //memperoleh angka setelah hasil % dan =

//kondisi isi angka 0
const inputNumber=(number)=>{
  //currentNumber=number;
  //currentNumber+=number;
  if (hasil==='1') {
      currentNumber=number; //menentukan angka awal setelah perhitungan
      hasil='0';
  } else if (currentNumber==='0'){
    currentNumber=number;
  }else {
    currentNumber+=number;
  }
};


//pengambilan operator
const operators=document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click",(event)=>{
    console.log(event.target.value);
    inputOperator(event.target.value);
  });
});

const inputOperator=(operator)=>{
  if(calculationOperator===''){
    prevNumber=currentNumber;
  }else { //utk menghitung ketikan menggunakan operator
    if (currentNumber==='0') {

    }else {
      calculate();
      prevNumber=currentNumber; //mengambil nilai dari currentNumber
      updateScreen(currentNumber);
    }
  }
  calculationOperator=operator;
  currentNumber='0';
};


const equaSign=document.querySelector('.equal-sign');

equaSign.addEventListener('click',()=>{
  //console.log('equal button is pressed');
  hasil='1';
  calculate();
  updateScreen(currentNumber);
});

const calculate=()=>{
  let result='';
  switch (calculationOperator) {
    case '+':
    // parseInt() merubah string menjadi integer
      //result=parseInt(prevNumber) + parseInt(currentNumber);
      //parseFloat() menghitung nilai pecahan
      result=parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result=parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result=parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result=parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      //break;
      return;
  }

  if (result === 0.30000000000000004) {
    currentNumber='0.3';
  }else if(result===0.09999999999999998){
    currentNumber='0.1';
  }else if (result===0.19999999999999998) {
    currentNumber='0.2';
  }else{
    currentNumber=result;
  }
  calculationOperator='';
  //console.log(currentNumber);
};

const clearBtn=document.querySelector('.all-clear');

clearBtn.addEventListener('click',()=>{
  //console.log('AC button is pressed');
  clearAll();
  updateScreen(currentNumber);
});

//menghapus
const clearAll=()=>{
  prevNumber='';
  calculationOperator='';
  currentNumber='0';
  hasil='0';
  currentHistory='0';
};

//angka desimal
const decimal=document.querySelector('.decimal');

decimal.addEventListener('click',(event)=>{
  //console.log(event.target.value);
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal=(dot)=>{
  if(currentNumber.includes('.')){
    return;
  }
  currentNumber += dot;
};

//persent %
const percentage=document.querySelector('.percentage');

percentage.addEventListener('click',()=>{

  hasil='1';
  persen();
  updateScreen(currentNumber);
  console.log(currentNumber);
});

const persen=()=>{
  let persens='';
  if(currentNumber ==='0'){
    persens='0';
  }else{
    persens=parseFloat(currentNumber) /100;
  }
  currentNumber=persens;
};

//kurang tampilan di historyScreen
//updateHistory(currentNumber);

//=======================================//
