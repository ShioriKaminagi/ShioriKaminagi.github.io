document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("loading-overlay").style.display = "flex";
  
    var loadingTime = 6000;
  
    setTimeout(function() {
      document.getElementById("loading-overlay").style.display = "none";
      document.getElementById("video-container").style.display = "block";
    }, loadingTime);
  });

window.addEventListener('load', function() {

  var loadingOverlay = document.getElementById('loading-overlay');
  
    loadingOverlay.style.backgroundImage = "url('picture/ayaka swim.png')"; 
    loadingOverlay.style.backgroundSize = "cover"; 
    loadingOverlay.style.backgroundPosition = "center"; 
  });

  const container = document.getElementById('container');

  document.querySelectorAll('.dialog').forEach(dialog => {
    dialog.addEventListener('click', () => {
      dialog.classList.add('clicked');
      setTimeout(() => {
        dialog.classList.remove('clicked');
      }, 300); 
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const waifuImg = document.querySelector('.waifu-img');
    const images = ['picture/ayaka1.jpg', 'picture/ayaka2.jpg', 'picture/ayaka3.jpg', 'picture/ayaka4.jpg', 'picture/ayaka5.jpg', 'picture/ayaka6.jpg'];
    let currentImageIndex = 0;
  
    function showPrevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      waifuImg.src = images[currentImageIndex];
    }
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      waifuImg.src = images[currentImageIndex];
    }
  
    prevBtn.addEventListener('click', showPrevImage);
  
    nextBtn.addEventListener('click', showNextImage);
  });

  let isExpanded = false;

function toggleBoxSize() {
    const dialog = document.querySelector('.dialog.me');
    if (!isExpanded) {
        dialog.classList.add('expanded'); 
        dialog.classList.remove('shrinked'); 
    } else {
        dialog.classList.remove('expanded'); 
        dialog.classList.add('shrinked'); 
    }
    isExpanded = !isExpanded; 
}

document.querySelector('.button-container').addEventListener('click', function() {
  var tooltip = document.querySelector('.tooltip');
  if (tooltip.style.visibility === 'hidden') {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
  } else {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  }
});

function toggleHidden() {
  var hiddenDiv = document.querySelector('.hidden');
  var btOverlay = document.querySelector('.btoverlay');

  if (!hiddenDiv.classList.contains('show')) {
      hiddenDiv.classList.add('show');
      btOverlay.classList.add('show');
  } else {
      hiddenDiv.classList.remove('show');
      btOverlay.classList.remove('show');
  }
}

var hoyoaccData = [
  { name: "Genshin Impact", info: "UID: 800288176", imageSrc: "picture/gilogo.png" },
  { name: "Honkai Impact 3", info: "UID: 13049318", imageSrc: "picture/hi3logo.png" },
  { name: "Honkai Star Rail", info: "UID: 800423437", imageSrc: "picture/hsrlogo.png" },
];

var currentIndex = 0;
var hoyoaccImage = document.getElementById("hoyoacc-image");
var hoyoaccName = document.getElementById("hoyoacc-name");
var hoyoaccInfo = document.getElementById("hoyoacc-info");

function showHoyoacc(index) {
  var hoyoacc = hoyoaccData[index];
  hoyoaccImage.src = hoyoacc.imageSrc;
  hoyoaccName.textContent = hoyoacc.name;
  hoyoaccInfo.textContent = hoyoacc.info;
}

function showPrevious() {
  currentIndex = (currentIndex === 0) ? (hoyoaccData.length - 1) : (currentIndex - 1);
  showHoyoacc(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex === (hoyoaccData.length - 1)) ? 0 : (currentIndex + 1);
  showHoyoacc(currentIndex);
}

showHoyoacc(currentIndex);




  
  

  
  

  
  