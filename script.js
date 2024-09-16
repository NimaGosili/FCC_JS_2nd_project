const inputN = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const resultbox = document.querySelector("#resultbox");
const formb = document.getElementById("input-form");


if(output.innerText === ""){
    output.innerText = "Enter a number";
}
const rNums = [
    ["M" , 1000] ,
    ["CM" , 900] ,
    ["D" , 500] ,
    ["CD" , 400] ,
    ["C" , 100] ,
    ["XC" , 90] ,
    ["L" , 50] ,
    ["XL" , 40] ,
    ["X" , 10] ,
    ["IX" , 9] ,
    ["V" , 5] ,
    ["IV" , 4] ,
    ["I" , 1]
];

function converter(num) {
    let result = [];
    num = parseInt(num);
    let i = 0;
    while(num > 0){
        while(num/rNums[i][1] >= 1){
            num -= rNums[i][1];
            result.push(rNums[i][0]);

        }
        
        i += 1;
    }

    i = 0;
    return result.join("");

}

function updater(){
    resultbox.classList.remove("hide");
    resultbox.classList.add("show");
    if(inputN.value < 0){
      output.innerText ="Please enter a number greater than or equal to 1";
      return;
    }else if(inputN.value > 3999){
        output.innerText ="Please enter a number less than or equal to 3999";
      return;
    }
    output.textContent = converter(inputN.value);
    if(output.innerText === ""){
        output.innerText = "Please enter a valid number";
    }
    

    

}

btn.addEventListener("click" , updater);


formb.addEventListener("submit" , (e) => {
    e.preventDefault();
    updater();
});

inputN.addEventListener("keyup" , (k) => {
    
    if(k.key === "Enter"){
        updater();
    }
    if(output.innerText === ""){
        output.innerText = "Please enter a valid number";
    }
});
