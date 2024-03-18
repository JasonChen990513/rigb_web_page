//set contract abi and address
const contractAddress = "0x3B69D1d17A257fdb7AE7d8d9A27cC906FCC62a40";
const contractABI = [{"inputs":[{"internalType":"address","name":"_USDT","type":"address"},{"internalType":"address","name":"_USDC","type":"address"},{"internalType":"address","name":"_priceFeedETHUSD","type":"address"},{"internalType":"address","name":"_treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stageIndex","type":"uint256"}],"name":"NextStageBegins","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"PresaleBegins","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"claimStart","type":"uint256"}],"name":"PresaleFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"stageIndex","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"priceInETH","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenSaleTarget","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"USDTTarget","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBuyAmount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"soldOut","type":"bool"}],"name":"StageCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"currentStage","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"newEndTime","type":"uint256"}],"name":"StageExtended","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryUpdated","type":"event"},{"inputs":[],"name":"PKCToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"buyTokensWithETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"stageIndex","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"amountBuy","type":"uint256"}],"name":"buyTokensWithStableCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"purchaseAmount","type":"uint256"}],"name":"calculateReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stageIndex","type":"uint256"}],"name":"concludeCurrentStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimalOfStablecoin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ethToUSDTDecimalPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_currentStageIndex","type":"uint8"},{"internalType":"uint256","name":"_newEndTime","type":"uint256"}],"name":"extendCurrentStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_claimStart","type":"uint256"},{"internalType":"contract IERC20","name":"_PKCToken","type":"address"}],"name":"finalizePresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"findCurrentStageIndex","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestETHPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralTiers","outputs":[{"internalType":"uint256","name":"amountThreshold","type":"uint256"},{"internalType":"uint256","name":"bonusPercentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralsCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stages","outputs":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"priceInUSDT","type":"uint256"},{"internalType":"uint256","name":"nextStagePrice","type":"uint256"},{"internalType":"uint256","name":"totalTokensSold","type":"uint256"},{"internalType":"uint256","name":"totalUSDTRaised","type":"uint256"},{"internalType":"uint256","name":"minBuyAmount","type":"uint256"},{"internalType":"bool","name":"soldOut","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stagesInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"startPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalAmountInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStages","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSoldGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalUSDTBoughtByReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUSDTRaisedGlobal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierIndex","type":"uint256"},{"internalType":"uint256","name":"amountThreshold","type":"uint256"},{"internalType":"uint256","name":"bonusPercentage","type":"uint256"}],"name":"updateReferralTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTreasury","type":"address"}],"name":"updateTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userTokenBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"}],"name":"withdrawStablecoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(contractAddress, contractABI, signer);
const readGameContract = new ethers.Contract(contractAddress, contractABI, provider);
const oneEther = 1000000000000000000;
const totalSupply = 100000000000000000000000000;



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
faqs.forEach(faq => faq.addEventListener("click", (e)=>{
  content = faq.querySelector(".faqContent")

  if (content.classList.contains('show')) {
    content.style.animationName = "hide";
    setTimeout(()=>{
      content.classList.remove('show');
    },500);
    faq.querySelector(".showContent").classList.remove('hidden');
    faq.querySelector(".hideContent").classList.add('hidden');
  } else {
    content.style.animationName = "show";
    content.classList.add('show');
    faq.querySelector(".showContent").classList.add('hidden');
    faq.querySelector(".hideContent").classList.remove('hidden');
  }

}));


const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');
const navbar = document.getElementById('navBar');

//set event listener for menu animation and change background color
menuIcon.addEventListener('click', (e) => {
    if (menu.classList.contains('show')) {
      document.querySelector("#menu").style.animationName = "menuHide";
      navbar.style.backgroundColor = "";
      setTimeout(()=>{
        menu.classList.remove('show');
      },500);
      
    } else {
      document.querySelector("#menu").style.animationName = "menuShow";
      menu.classList.add('show');
      navbar.style.backgroundColor = "white";
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


const userInput = document.getElementById('payToken');
const getToken = document.getElementById('getToken');
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
  updateBuyToken();
}

USDT.onclick = () =>{
  tokenType = "USDT";
  updateBuyToken();
}

//const 

async function buyTokenwithETH(){
  let currentETHPrice = await readGameContract.getLatestETHPrice();
  //console.log(currentETHPrice.toString());
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  //console.log(CurrentStageIndex.toString());
  const inputValue = userInput.value;
  let ethToUSDTDecimalPoints = await readGameContract.ethToUSDTDecimalPoints();
  //console.log(CurrentStageIndex.toString());

  let amountInUSDT = (inputValue * currentETHPrice) / (10**ethToUSDTDecimalPoints);

  const stage = await readGameContract.stages(CurrentStageIndex);
  //console.log(stage)
  let tokensToPurchase = (amountInUSDT * oneEther) / (stage.priceInUSDT);
  //console.log(tokensToPurchase)
  console.log(tokensToPurchase/oneEther)
  return tokensToPurchase/oneEther;
}



async function tokensToETH(tokenAmount) {
  let currentETHPrice = await readGameContract.getLatestETHPrice();

  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();

  const inputValue = getToken.value;
  let ethToUSDTDecimalPoints = await readGameContract.ethToUSDTDecimalPoints();


  //let amountInUSDT = (inputValue * currentETHPrice) / (10**ethToUSDTDecimalPoints);

  const stage = await readGameContract.stages(CurrentStageIndex);

  //let ETH=(((inputValue * (stage.priceInUSDT))/ oneEther) * (10**ethToUSDTDecimalPoints))/currentETHPrice;
  //const eth = (inputValue * stage.priceInUSDT *(10 ** ethToUSDTDecimalPoints)) / (currentETHPrice * oneEther);
  let ETH = (inputValue * stage.priceInUSDT) / ((currentETHPrice / (10 ** ethToUSDTDecimalPoints)) * oneEther);
  console.log(ETH)
  return ETH*oneEther;
}

async function buyTokensWithStableCoin(){
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  const stage = await readGameContract.stages(CurrentStageIndex);
  let amountInUSDT = userInput.value;
  let tokensToPurchase = (amountInUSDT * oneEther) / (stage.priceInUSDT);
  return tokensToPurchase/oneEther;
}

async function tokentoStableCoin(){
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  const stage = await readGameContract.stages(CurrentStageIndex);
  let amountInToken = getToken.value;
  let amountInUSDT = (amountInToken * (stage.priceInUSDT))/oneEther;
  return amountInUSDT*oneEther;
}

getToken.addEventListener('input',async function(){
  if(tokenType == "ETH" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await tokensToETH();
    //console.log(result)
    userInput.value = result;
  } else if(tokenType == "USDT" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await tokentoStableCoin();
    console.log(result)
    //console.log(result)
    userInput.value = result;
  }


})


//according to user input to claculate the receive token
userInput.addEventListener('input',async function(){
  await updateBuyToken();
})

async function updateBuyToken(){
  if(tokenType == "ETH" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await buyTokenwithETH();
    //console.log(result)
    getToken.value = result;
  } else if(tokenType == "USDT" && (userInput.value!=null)){
    //const inputValue = userInput.value;
    let result = await buyTokensWithStableCoin();
    //console.log(result)
    getToken.value = result;
  }
} 
async function getLatestSoldInfo(){

}

async function adjustBarWidth(){
  let soldToken = (await readGameContract.totalTokensSoldGlobal())/oneEther;
  //let totalToken = totalSupply/oneEther;
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  let goalToken = tokenSaleTargets[CurrentStageIndex];
  remainAmount.textContent  = "$ "+soldToken.toFixed(2).toLocaleString(undefined, { minimumFractionDigits: 2 });
  const percentage = ((soldToken /goalToken) * 100).toLocaleString(undefined, { minimumFractionDigits: 2 });

  let pbarwidth = parentBar.offsetWidth;
  let cbarwidth = remainBar.offsetWidth;
  const computedStyle = window.getComputedStyle(remainBar);
  const marginRight = parseFloat(computedStyle.getPropertyValue('margin-right'));
  console.log(pbarwidth)
  console.log(cbarwidth)
  console.log(marginRight)
  remainBar.style.width = (((percentage/100)*pbarwidth)-marginRight*2)+"px";
  console.log(remainBar.offsetWidth)
}

initPage();
async function initPage(){
  //get the data from smart contract
  let soldToken = (await readGameContract.totalTokensSoldGlobal())/oneEther;
  //let totalToken = totalSupply/oneEther;
  let CurrentStageIndex = await readGameContract.findCurrentStageIndex();
  let goalToken = tokenSaleTargets[CurrentStageIndex];
  console.log(soldToken)
  console.log(goalToken)
  remainAmount.textContent  = "$"+soldToken.toFixed(2).toLocaleString(undefined, { minimumFractionDigits: 2 });
  const percentage = ((soldToken /goalToken) * 100).toLocaleString(undefined, { minimumFractionDigits: 2 });
 
  adjustBarWidth();

  remainPersent.textContent = percentage + "% of minimum goal raise";
  totalsupply.textContent = "$"+goalToken.toLocaleString(undefined, { minimumFractionDigits: 1 });



}




