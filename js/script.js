let rotated = document.querySelectorAll("#buttonRotate");
rotated.forEach((item) => {
  let isRotate = false,
    count = 1;
  console.log("here");
  item.parentNode.addEventListener("click", () => {
    console.log(isRotate);
    console.log(count);

    if (isRotate && count == 2) {
      item.style.transform = `rotate(${0}deg)`;
      isRotate = false;
      count = 1;
    } else {
      rotated.forEach((itemNode) => {
        // console.log(item !== itemNode);
        if (item != itemNode) {
          itemNode.style.transform = `rotate(${0}deg)`;
          isRotate = false;
          count = 1;
        }
      });

      item.style.transform = `rotate(${180}deg)`;
      isRotate = true;
    }
    count++;
  });
});

// /////////////////////////////////////////////////////////////
// Clip Board
let copyButton = document.querySelectorAll("#copy-button");

copyButton.forEach(
  item => (item.onclick = () => alert("Have been Finished "))
);
