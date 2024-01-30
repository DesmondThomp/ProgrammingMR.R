// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randomincrease = [1,2,3,4,5,6,7,8,9,10]

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    }else if (styles.contains("minus")) {
      count--,count--,count--,count--,count--,count--,count--,count--,count--,count--
    } else if (styles.contains("increase")) {
      count++;
    }else if (styles.contains("plus")){
    count++, count++, count++, count++, count++, count++, count++, count++,  count++,  count++ 
    }else if (styles.contains("RANDOM")){
      count += randomincrease[getRandomNumber()];
    }else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
function getRandomNumber(){
  return Math.floor(Math.random() * randomincrease.length);
}
