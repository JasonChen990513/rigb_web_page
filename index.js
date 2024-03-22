//set contract abi and address
const contractAddress = "0x3B69D1d17A257fdb7AE7d8d9A27cC906FCC62a40";
const contractABI = [{"inputs":[{"internalType":"address","name":"_USDT","type":"address"},{"internalType":"address","name":"_USDC","type":"address"},{"internalType":"address","name":"_priceFeedETHUSD","type":"address"},{"internalType":"address","name":"_treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stageIndex","type":"uint256"}],"name":"NextStageBegins","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"PresaleBegins","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"claimStart","type":"uint256"}],"name":"PresaleFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"stageIndex","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"priceInETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenSaleTarget","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"USDTTarget","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBuyAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"soldOut","type":"bool"}],"name":"StageCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"currentStage","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"newEndTime","type":"uint256"}],"name":"StageExtended","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryUpdated","type":"event"},{"inputs":[],"name":"PKCToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"buyTokensWithETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"amountBuy","type":"uint256"}],"name":"buyTokensWithStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"purchaseAmount","type":"uint256"}],"name":"calculateReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stageIndex","type":"uint256"}],"name":"concludeCurrentStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimalOfStablecoin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ethToUSDTDecimalPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_currentStageIndex","type":"uint8"},{"internalType":"uint256","name":"_newEndTime","type":"uint256"}],"name":"extendCurrentStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_claimStart","type":"uint256"},{"internalType":"contract IERC20","name":"_PKCToken","type":"address"}],"name":"finalizePresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"findCurrentStageIndex","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestETHPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralTiers","outputs":[{"internalType":"uint256","name":"amountThreshold","type":"uint256"},{"internalType":"uint256","name":"bonusPercentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralsCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stages","outputs":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"priceInUSDT","type":"uint256"},{"internalType":"uint256","name":"nextStagePrice","type":"uint256"},{"internalType":"uint256","name":"totalTokensSold","type":"uint256"},{"internalType":"uint256","name":"totalUSDTRaised","type":"uint256"},{"internalType":"uint256","name":"minBuyAmount","type":"uint256"},{"internalType":"bool","name":"soldOut","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stagesInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"startPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalAmountInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStages","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSoldGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalUSDTBoughtByReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUSDTRaisedGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierIndex","type":"uint256"},{"internalType":"uint256","name":"amountThreshold","type":"uint256"},{"internalType":"uint256","name":"bonusPercentage","type":"uint256"}],"name":"updateReferralTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasury","type":"address"}],"name":"updateTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userTokenBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"}],"name":"withdrawStablecoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(contractAddress, contractABI, signer);
const readGameContract = new ethers.Contract(contractAddress, contractABI, provider);
const oneEther = 1000000000000000000;
const totalSupply = 100000000000000000000000000;

//css and animation

//setting the card slider section
const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1080: {
        slidesPerView: 3,
    },
},
  

});



const faqs = document.querySelectorAll(".faqsBtn");

//use to control the faq section show and hide content and buttom
// faqs.forEach(faq => faq.addEventListener("click", (e)=>{
//   content = faq.querySelector(".faqContent")

//   if (content.classList.contains('show')) {
//     content.style.animationName = "hide";
//     setTimeout(()=>{
//       content.classList.remove('show');
//     },500);
//     faq.querySelector(".showContent").classList.remove('hidden');
//     faq.querySelector(".hideContent").classList.add('hidden');
//   } else {
//     content.style.animationName = "show";
//     content.classList.add('show');
//     faq.querySelector(".showContent").classList.add('hidden');
//     faq.querySelector(".hideContent").classList.remove('hidden');
//   }

// }));


const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');
const navbar = document.getElementById('navBar');

//set event listener for menu animation and change background color
menuIcon.addEventListener('click', (e) => {
    if (menu.classList.contains('show')) {
      document.querySelector("#menu").style.animationName = "menuHide";
      document.querySelector("#navBar").style.animationName = "menuHidebg";
      //navbar.style.backgroundColor = "";
      setTimeout(()=>{
        menu.classList.remove('show');
        //navbar.classList.remove('show');
      },500);
      
    } else {
      document.querySelector("#menu").style.animationName = "menuShow";
      document.querySelector("#navBar").style.animationName = "menuShowbg";
      menu.classList.add('show');
      //navbar.classList.remove('show');
      //navbar.style.backgroundColor = "white";
    }
});
//set event listener for screen size change
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  //hide the drop down menu for lx size screen
  if(screenWidth >= 1280){
    document.querySelector("#menu").style.animationName = "menuHide";
    setTimeout(()=>{
      menu.classList.remove('show');
    },500);
  }
  setMainmt();
  changeNavbg();
  adjustBarWidth();
});


setMainmt();
//set main mergin top. 
function setMainmt(){
  const navbar = document.getElementById('navBar');
  const height = navbar.clientHeight;
  const main = document.getElementById('main');
  main.style.marginTop = (height+10) + "px"; 
}

const element = document.getElementById('navBar');

// Create a ResizeObserver instance
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    // Log the new height of the observed element
    //console.log('Height:', entry.contentRect.height);
    
    // Get the position of the special area relative to the viewport
    const faqsectionAreaPosition = faqsection.getBoundingClientRect().top;

    // Check if the top of the special area is visible in the viewport
    if (faqsectionAreaPosition < navbar.clientHeight) {
        // Change the background color when the special area is in view
        navbar.style.backgroundColor = 'white';
    }
  }
});

// Observe the target element for size changes
observer.observe(element);

const faqsection = document.getElementById('faqsection');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  changeNavbg();
});

function changeNavbg(){
  const navbar = document.getElementById('navBar');
  // Get the current scroll position
  // const scrollPosition = window.scrollY;
  // console.log('Scroll position:', scrollPosition);

  // Get the position of the special area relative to the viewport
  const faqsectionAreaPosition = faqsection.getBoundingClientRect().top;
  //if the navbar is active then do not change the bg color
  if(!(menu.classList.contains('show'))){
    // Check if the top of the special area is visible in the viewport
    if (faqsectionAreaPosition < navbar.clientHeight) {
        // Change the background color when the special area is in view
        navbar.style.backgroundColor = 'white';
    } else {
        // Reset the background color when the special area is out of view
        navbar.style.backgroundColor = '';
    }
  }
}


// This is the important part!
function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';
  
  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we 
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 0 + 'px';
    });
  });
  
  // mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  //console.log("expandSection height 1: " + sectionHeight);
  
  // Ensure the browser has rendered the initial height change before proceeding
  requestAnimationFrame(function() {
      // have the element transition to the height of its inner content
      element.style.height = sectionHeight + 'px';
      
      //console.log("expandSection height 2: " + sectionHeight);
      
      // Ensure the browser has started the transition before proceeding
      requestAnimationFrame(function() {
          // when the next css transition finishes (which should be the one we just triggered)
          element.addEventListener('transitionend', function(e) {
              // remove this event listener so it only gets triggered once
              //console.log("expandSection height final: " + element.offsetHeight);
              element.removeEventListener('transitionend', arguments.callee);
              
              // remove "height" from the element's inline styles, so it can return to its initial value
              element.style.height = null;
          });
      });
  });
  
  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}

faqs.forEach(faq => faq.addEventListener("click", (e)=>{
  let content = faq.querySelector(".faqContent")
  //console.log(content.textContent)
  var isCollapsed = content.getAttribute('data-collapsed') === 'true';

  if(isCollapsed) {
    faq.querySelector(".showContent").classList.add('hidden');
    faq.querySelector(".hideContent").classList.remove('hidden');
    //console.log(content.offsetHeight);
    //console.log('expandSection')
    expandSection(content);
    //setTimeout(()=>{console.log(content.offsetHeight);},1000);
    content.style.height = 140 + "px";
    content.setAttribute('data-collapsed', 'false');

    const computedStyle = window.getComputedStyle(content);
    const textColor = computedStyle.color;
    //console.log(textColor);
  } else {
    faq.querySelector(".showContent").classList.remove('hidden');
    faq.querySelector(".hideContent").classList.add('hidden');
    //console.log('collapseSection')
    //console.log(content.offsetHeight);
    collapseSection(content);
    //setTimeout(()=>{console.log(content.offsetHeight);},1000);
  }
}));

faqs.forEach(faq => {
  let content = faq.querySelector(".faqContent");
  collapseSection(content);
});



// basic show and hide for faq section
// const faqs = document.querySelectorAll(".faqsBtn");
// faqs.forEach(faq => faq.addEventListener("click", (e)=>{
//   content = faq.querySelector(".faqContent")

//   if (content.classList.contains('hidden')) {
//     content.classList.remove('hidden');
//   } else {
//     content.classList.add('hidden');
//   }

// }));

// basic hide and show for menu
// const menuIcon = document.querySelector('#menuIcon');
// const menu = document.querySelector('#menu');

// menuIcon.addEventListener('click', (e) => {
//     if (menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');
//         menu.classList.add('visible'); // Add the visible class to trigger the animation
//     } else {
//       menu.classList.remove('visible'); // Remove the visible class to trigger the animation
//         menu.classList.add('hidden');
//     }
// });

//get data from smart contract and put in UI

const userInput = document.getElementById('payToken');
const getToken = document.getElementById('getToken');
const inputType = document.getElementById('inputType'); 
const remainAmount = document.getElementById('remainAmount');
const remainPersent = document.getElementById('remainPersent');
const remainBar = document.getElementById('remainBar');
const totalsupply = document.getElementById('totalsupply');
const Participants = document.getElementById('Participants');
const listingPrice = document.getElementById('listingPrice');
const currentPrice = document.getElementById('currentPrice');
const ETH = document.getElementById('ETH');
const USDT = document.getElementById('USDT');
const BNB = document.getElementById('BNB');
const parentBar = document.getElementById('parentBar');
const connectWellat = document.getElementById('connectWellat');
let bnbPrice = 0;

const tokenSaleTargets = [
  30000000,
  30000000,
  30000000,
  35000000,
  35000000,
  60000000,
  80000000,
  100000000
];

let tokenType = "ETH";
userInput.value = 0;
getToken.value = 0;
ETH.onclick = () =>{
  tokenType = "ETH";
  inputType.textContent = "Amount in " + tokenType +" you";
  updateBuyToken();
  updateRoyaltoToken();
}

USDT.onclick = () =>{
  tokenType = "USDT";
  inputType.textContent = "Amount in " + tokenType +" you";
  updateBuyToken();
  updateRoyaltoToken();
}

BNB.onclick = () =>{
  tokenType = "BNB";
  inputType.textContent = "Amount in " + tokenType +" you";
  updateBuyToken();
  updateRoyaltoToken();
}

connectWellat.onclick = () =>{
  if(tokenType == "ETH" && (userInput!=0)){
    alert('Call ETH buy token function')
  } else if(tokenType == "USDT" && (userInput!=0)){
    alert('Call USDT buy token function')
  }
}

async function updateRoyaltoToken(){
  let text = "1 ROYAL = "
  if(tokenType == "ETH"){
    let result = await tokensToETH(1);
    currentPrice.textContent = text + result + "ETH";
  } else if(tokenType == "USDT"){
    let result = await tokentoStableCoin(1);
    currentPrice.textContent = text + "$"+ result;
  } else{
    let result = await tokentoStableCoin(1);
    currentPrice.textContent = text + result/bnbPrice + "BNB";
  }
}


//const 

async function buyTokenwithETH(inputValue){
  let currentETHPrice = await readGameContract.getLatestETHPrice();
  //console.log(currentETHPrice.toString());
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  //console.log(CurrentStageIndex.toString());
  //const inputValue = userInput.value;
  let ethToUSDTDecimalPoints = await readGameContract.ethToUSDTDecimalPoints();
  //console.log(CurrentStageIndex.toString());

  let amountInUSDT = (inputValue * currentETHPrice) / (10**ethToUSDTDecimalPoints);

  const stage = await readGameContract.stages(CurrentStageIndex);
  //console.log(stage)
  let tokensToPurchase = (amountInUSDT * oneEther) / (stage.priceInUSDT);
  //console.log(tokensToPurchase)
  console.log(tokensToPurchase/oneEther)
  return tokensToPurchase;
}



async function tokensToETH(tokenAmount) {
  let currentETHPrice = await readGameContract.getLatestETHPrice();

  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();

  //const inputValue = tokenAmount;
  let ethToUSDTDecimalPoints = await readGameContract.ethToUSDTDecimalPoints();


  //let amountInUSDT = (inputValue * currentETHPrice) / (10**ethToUSDTDecimalPoints);

  const stage = await readGameContract.stages(CurrentStageIndex);

  //let ETH=(((inputValue * (stage.priceInUSDT))/ oneEther) * (10**ethToUSDTDecimalPoints))/currentETHPrice;
  //const eth = (inputValue * stage.priceInUSDT *(10 ** ethToUSDTDecimalPoints)) / (currentETHPrice * oneEther);
  let ETH = (tokenAmount * stage.priceInUSDT) / ((currentETHPrice / (10 ** ethToUSDTDecimalPoints)) * oneEther);
  console.log(ETH)
  return ETH;
}

async function buyTokensWithStableCoin(inputValue){
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  const stage = await readGameContract.stages(CurrentStageIndex);
  //let amountInUSDT = userInput.value;
  let tokensToPurchase = (inputValue * oneEther) / (stage.priceInUSDT);
  return tokensToPurchase;
}

async function tokentoStableCoin(tokenAmount){
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  const stage = await readGameContract.stages(CurrentStageIndex);
  //let amountInToken = tokenAmount;
  let amountInUSDT = (tokenAmount * (stage.priceInUSDT))/oneEther;
  return amountInUSDT;
}


getToken.addEventListener('input',async function(){
  let tokenAmount = getToken.value;
  if(tokenType == "ETH" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await tokensToETH(tokenAmount);
    //console.log(result)
    userInput.value = result;
  } else if(tokenType == "USDT" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await tokentoStableCoin(tokenAmount);
    console.log(result)
    //console.log(result)
    userInput.value = result;
  } else{
    let result = await tokentoStableCoin(tokenAmount);
    //console.log(result)
    userInput.value = result/bnbPrice;
  }
})


//according to user input to claculate the receive token
userInput.addEventListener('input',async function(){
  await updateBuyToken();
})

async function updateBuyToken(){
  let inputValue = userInput.value;
  if(tokenType == "ETH" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await buyTokenwithETH(inputValue);
    //console.log(result)
    getToken.value = result;
  } else if(tokenType == "USDT" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await buyTokensWithStableCoin(inputValue);
    //console.log(result)
    getToken.value = result;
  } else{
    //BNB
    let result = await buyTokensWithStableCoin(inputValue);
    //console.log(result)
    getToken.value = result*bnbPrice;
  }
} 
async function getLatestSoldInfo(){

}

async function adjustBarWidth(){
  let soldToken = (await readGameContract.totalTokensSoldGlobal())/oneEther;
  //let totalToken = totalSupply/oneEther;
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  let goalToken = tokenSaleTargets[CurrentStageIndex];
  remainAmount.textContent  = "$ "+soldToken.toLocaleString(undefined, { minimumFractionDigits: 2 });
  const percentage = ((soldToken /goalToken) * 100).toLocaleString(undefined, { minimumFractionDigits: 2 });

  let pbarwidth = parentBar.offsetWidth;
  let cbarwidth = remainBar.offsetWidth;
  const computedStyle = window.getComputedStyle(remainBar);
  const marginRight = parseFloat(computedStyle.getPropertyValue('margin-right'));
  // console.log(pbarwidth)
  // console.log(cbarwidth)
  // console.log(marginRight)
  remainBar.style.width = (((percentage/100)*pbarwidth)-marginRight*2)+"px";
  //console.log(remainBar.offsetWidth)
}

initPage();
async function initPage(){
  checkNetwork();
  //get the data from smart contract
  
  let soldToken = (await readGameContract.totalTokensSoldGlobal())/oneEther;
  //let totalToken = totalSupply/oneEther;
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  let goalToken = tokenSaleTargets[CurrentStageIndex];
  console.log(soldToken)
  console.log(goalToken)
  //remainAmount.textContent  = "$"+soldToken.toLocaleString(undefined, { minimumFractionDigits: 1 });
  const percentage = ((soldToken /goalToken) * 100).toLocaleString(undefined, { minimumFractionDigits: 2 });
 
  adjustBarWidth();
  updateRoyaltoToken();
  remainPersent.textContent = percentage + "% of minimum goal raise";
  totalsupply.textContent = "$"+goalToken.toLocaleString(undefined, { minimumFractionDigits: 1 });
  bnbPrice = await getBNBPrice();
  console.log("BNB ptice to usd: " + bnbPrice);

}

function checkNetwork(){
  // Check if MetaMask is installed and enabled
  if (typeof ethereum !== 'undefined' && ethereum.isMetaMask) {
      //get current chain id
      ethereum.request({ method: 'eth_chainId' })
      .then(chainId => {
          // Check if the network is the maal testnet or other
          console.log("this is "+chainId)
          if (chainId !== '0xaa36a7') { //choose the chain ID want to connect
              // Prompt the user to switch networks
              if (confirm('Please switch to the Maal testnet to continue.')) {
                SwitchChainToSepolia();
              } else {
                  alert("You need to switch to Maal testnet to contunue.")  
              }
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
  } else {
      // MetaMask is not installed or not enabled
      alert('Please install MetaMask to use this feature.');
  }
}
//if not maal test net then switch to maal test net
async function SwitchChainToSepolia(){
  try {
      //switch the netword to maal testnet network
      await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7' }],
      });
      //after change refresh the page
      location.reload();
  } catch (switchError) {
    if (switchError.code === 4902) { // 4902 mean the network not at wallet
      //request to add the chain to wallet here
      if(confirm("Maal testnet Chain hasn't been added to the wallet! Do you want to add it now?")){
          addSepoliaTestNetwork();
      }
    }
  }
}
//if no in wallet, add network to wallet
async function addSepoliaTestNetwork() {
  try {
      //add maal testnet network to user wallet
      const result = await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
          chainId: "0xaa36a7",
          rpcUrls: ["https://ethereum-sepolia-rpc.publicnode.com"],
          chainName: "Sepolia",
          nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18
          },
          blockExplorerUrls: ["https://sepolia.etherscan.io/"]
          }]
      });
      alert("Add network successfully")
      location.reload();
  } catch (error){
      alert("Something wrong " + error)
  }
}  
//use api get the bnb price 

// var liveprice = {
//   "async": true,
//   "scroosDomain": true,
//   "url": "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd",

//   "method": "GET",
//   "headers": {}
// }

// $.ajax(liveprice).done(function (response){
//   console.log(response)
// });

// async function getBNBPrice(){
//   const options = {method: 'GET'};
//   let price;
//   fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd', options)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response)
//       price = response.binancecoin.usd;
//       console.log("price: " + price);
//       return price;
//     })
//     .catch(err => console.error(err));

// }

async function getBNBPrice() {
  const options = { method: 'GET' };

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd', options);
    const data = await response.json();
    const price = data.binancecoin.usd;
    //console.log("price: " + price);
    return price;
  } catch (error) {
    console.error(error);
    throw error;
  }
}





