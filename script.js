document.getElementById("btn").addEventListener("click", () => {
	let number = Number(document.getElementById("ip").value);
	 const output = document.getElementById("output");
  output.innerText = "";
	 const promise1 = new Promise((resolve, reject) => {
		 setTimeout(() => {
      output.innerText = `Result: ${number}`;
      resolve(number); 
    }, 2000);
  });
	
	 const promise2 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      let multiply = num * 2;
      output.innerText = `Result: ${multiply}`;
      resolve(multiply);
    }, 2000);
  });

  // Promise 3
  const promise3 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      let subtract = num - 3;
      output.innerText = `Result: ${subtract}`;
      resolve(subtract);
    }, 1000);
  });

  // Promise 4
  const promise4 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      let divide = num / 2;
      output.innerText = `Result: ${divide}`;
      resolve(divide);
    }, 1000);
  });
 // Promise 5
  const promise5 = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      let finalResult = num + 10;
      output.innerText = `Final Result: ${finalResult}`;
      resolve(finalResult);
    }, 1000);
  });

  
  promise1
    .then((data1) => promise2(data1))
    .then((data2) => promise3(data2))
    .then((data3) => promise4(data3))
    .then((data4) => promise5(data4));

});