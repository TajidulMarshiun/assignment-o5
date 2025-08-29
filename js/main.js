// inner text to int covert
const history = [];

console.log(history);
function innerTextToInt(id) {
  const innerText = document.getElementById(id).innerText;
  const userInputValuue = parseInt(innerText);
  return userInputValuue;
}



//  copy easy function 

function copyMe(id, serviceName, serviceNumber) {
  document.getElementById(id).addEventListener("click", function () {
    const coin = innerTextToInt("coin");
     const copy = innerTextToInt("main-copy");
    const total1 = coin - 20;
    const total = copy + 1;
    if (copy>=5 || total1 < 0) {
      return alert("❌ To make a copy, you need at least 20 Coin");
    }

    document.getElementById("coin").innerText = total1;
    document.getElementById("main-copy").innerText = total;
    const headtext = document.querySelector(serviceName).innerText;

    const head2text = document.querySelector(serviceNumber).innerText;
    alert("📋 Copy "+headtext+" : " + head2text);

    const data = {
      name:"Copy "+ headtext,
      number: head2text,
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
  });
}

// all copy envet 
copyMe("emergency-copy", ".national-call", ".national-number");
copyMe("police-copy", ".police-call", ".police-number");
copyMe("fire-copy", ".fire-call", ".fire-number");
copyMe("ambulance-copy", ".ambulance-call", ".ambulance-number");
copyMe("women-copy", ".men", ".women-number");
copyMe("anti-copy", ".anti-call", ".anti-number");
copyMe("electricity-copy", ".electricity-call", ".electricity-number");
copyMe("brac-copy", ".brac-call", ".brac-number");
copyMe("railway-copy", ".railway-call", ".railway-number");





// aita diya korle call yar jonno onek tara tar hoi 
// call repeat function
function callMe(id, serviceName, serviceNumber) {
  document.getElementById(id).addEventListener("click", function () {
    const coin = innerTextToInt("coin");
    const total1 = coin - 20;
    if (total1 < 0) {
      return alert("❌ To make a call, you need at least 20 Coin");
    }

    document.getElementById("coin").innerText = total1;
    const headtext = document.querySelector(serviceName).innerText;

    const head2text = document.querySelector(serviceNumber).innerText;
    alert("📞 Calling "+headtext+" : " + head2text);

    const data = {
      name:"Calling "+ headtext,
      number: head2text,
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
  });
}
//  all call

callMe("emergency-call",".national-call",".national-number");
callMe("police-call", ".police-call", ".police-number");
callMe("fire-call", ".fire-call", ".fire-number");
callMe("ambulance-call", ".ambulance-call", ".ambulance-number");
callMe("women-call", ".men", ".women-number");
callMe("anti-call", ".anti-call", ".anti-number");
callMe("electricity-call", ".electricity-call", ".electricity-number");
callMe("brac-call", ".brac-call", ".brac-number");

callMe("railway-call", ".railway-call", ".railway-number");

//call option event

// heart icon section
const heart = document.getElementsByClassName("fa-heart");
document.querySelectorAll(".fa-heart").forEach(function (e) {
  e.addEventListener("click", function () {
    const heart = innerTextToInt("heart");
    const heartTotal = heart + 1;
    document.getElementById("heart").innerText = heartTotal;
  });
});

// this is call history section
const transationContainer = document.getElementById("transation-container");

function historyCall() {
  transationContainer.innerHTML = "";
  for (const h of history) {
    const div = document.createElement("div");
    div.innerHTML = `
               <div class=" bg-[#F2F2F2] rounded-lg">
                  
              <div class="flex justify-between mt-4 p-2">
                 <div>
                  <h1 class="font-medium text-xl">${h.name}</h1>
                  <p class="text-[#5C5C5C]">${h.number}</p>
                 </div>
                 <div>
                  <p>${h.date}</p>
                 </div>
              </div>
            
              </div>
              
    `;
    transationContainer.appendChild(div);
  }
}
document.getElementById("clear").addEventListener('click',function(){
  const transationContainer = document.getElementById("transation-container");
  transationContainer.style.display='none';
})
