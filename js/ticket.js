const keybord = document.getElementsByClassName("kbd");

let seatAvailable = parseInt(
  document.getElementById("availableSeat").innerText
);

for (const keyloop of keybord) {
  keyloop.addEventListener("click", function makeBg(e) {
    const checkItem = document.getElementById("sideSeatNum").innerText;

    const checkItemNum = parseInt(checkItem);

    // condition

    if (checkItemNum <= 3 && !keyloop.disabled) {
      const seatNumber = keyloop.innerText;

      const bgMake = keyloop.classList.add("bg-green-500");

      // seat uplode

      const seatGetText = document.getElementById("availableSeat").innerText;

      const seatGetNum = parseInt(seatGetText);

      const nowSeat = seatGetNum - 1;

      document.getElementById("availableSeat").innerText = nowSeat;

      const sideSeatText = document.getElementById("sideSeatNum").innerText;

      const sideSeatNum = parseInt(sideSeatText);

      const sideSeatNow = sideSeatNum + 1;

      document.getElementById("sideSeatNum").innerText = sideSeatNow;

      //   seat show

      // const showItem =

      const showPlace = document.getElementById("seatShow");

      const p = document.createElement("div");

      p.innerText = `${seatNumber}    Economoy    550`;

      showPlace.appendChild(p);

      // total price

      const tp = document.getElementById("totalPrice");

      const tpNum = parseInt(tp.innerText);

      const tpNumNow = tpNum + 550;

      tp.innerText = tpNumNow;

      // grand total

      const gt = document.getElementById("grandTotal");

      gt.innerText = tpNumNow;

      if (checkItemNum == 3) {
        const couponClick = document.getElementById("applyButton");

        couponClick.addEventListener("click", function applyCoupon(gt) {
          const couponCode = document.getElementById("couponInput").value;

          if (couponCode === "NEW15") {
            const price = tp.innerText;

            const priceNum = parseFloat(price);

            const disPrice = priceNum * 0.15;

            // discount show

            const discountDiv = document.getElementById("disDiv");

            discountDiv.classList.remove("hidden");

            // discount upload

            const disUp = document.getElementById("discountPrice");

            const disUpNum = parseFloat(disUp.innerText);

            disUp.innerText = disPrice;

            // grand total update

            // total price

            const tpGt = document.getElementById("totalPrice");

            const tpNumGt = parseFloat(tpGt.innerText);

            // disPrice

            const disUpGt = document.getElementById("discountPrice");

            const disUpNumGt = parseFloat(disUpGt.innerText);

            const gtNow = tpNumGt - disUpNumGt;

            // gt upload

            const gt = document.getElementById("grandTotal");

            gt.innerText = gtNow;

            // input div haowa

            const inputDiv = document.getElementById("inputDiv");

            inputDiv.classList.add("hidden");
          } else if (couponCode === "Couple 20") {
            const price = tp.innerText;

            const priceNum = parseFloat(price);

            const disPrice = priceNum * 0.2;

            // discount show

            const discountDiv = document.getElementById("disDiv");

            discountDiv.classList.remove("hidden");

            // discount upload

            const disUp = document.getElementById("discountPrice");

            const disUpNum = parseFloat(disUp.innerText);

            disUp.innerText = disPrice;

            // grand total update

            // total price

            const tpGt = document.getElementById("totalPrice");

            const tpNumGt = parseFloat(tpGt.innerText);

            // disPrice

            const disUpGt = document.getElementById("discountPrice");

            const disUpNumGt = parseFloat(disUpGt.innerText);

            const gtNow = tpNumGt - disUpNumGt;

            // gt upload

            const gt = document.getElementById("grandTotal");

            gt.innerText = gtNow;

            // input div haowa

            const inputDiv = document.getElementById("inputDiv");

            inputDiv.classList.add("hidden");
          } else {
            alert("Please provide a valid coupon code.");
          }

          //  input clear
          document.getElementById("couponInput").value = "";

        

        });
      }

      const inputNum = document.getElementById("numberInput");

      inputNum.addEventListener("keyup", function modalActive(e) {
        const inputValue = e.target.value;

        const inputLenth = inputValue.length;

        if (inputLenth > 0) {
          const eleModal = document.getElementById("modalButton");

          eleModal.removeAttribute("disabled", "false");
        } 
      });
    }

    keyloop.disabled = true;
  });
}
