document.addEventListener("DOMContentLoaded", function() {
  const listCard = [
    { id: 0, "firstImg": "./assets/INSTA.png", "secondImg": "./assets/FLYERS.png", "logo": "./assets/logoRequiem.png", "link": "https://www.instagram.com/requiembasics/"},
    { id: 1, "firstImg": "./assets/InstaNP.png", "secondImg": "./assets/FlyersNP.png", "logo": "./assets/Logo-NP.png", "link": "https://www.instagram.com/nightparty.ok/"},
    { id: 2, "firstImg": "./assets/InstaSMDV.png","secondImg": "./assets/FlyersSMMDV.png", "logo": "./assets/Logo-SMDV.png", "link": "https://www.instagram.com/semedavueltafc/"},
    { id: 3, "firstImg": "./assets/InstaLobos.png","secondImg": "./assets/FlyersLobos.png", "logo":  "/assets/Logo-Lobos.png", "link": "https://www.instagram.com/lobosfcsp/"},
  ]
  const contenedorCarousel = document.querySelector(".card__trabajo-instagram")
  const generateItemCarousel = (index) => {
    while (contenedorCarousel.firstChild) {
      contenedorCarousel.removeChild(contenedorCarousel.firstChild);
    }
    const firstImg = document.createElement("img")
    const secondImg = document.createElement("img")
    const logo = document.createElement("img")
    const btnLink = document.createElement("button")
    const link = document.createElement("a")
    link.appendChild(btnLink)
    const contenedorSocial = document.createElement("div")
    const svg = document.createElement("svg")
    contenedorSocial.classList.add("socialRequiem")
    btnLink.innerHTML = "Ver instagram"
    link.setAttribute("href", `${listCard[index].link}`)
    link.setAttribute("target", "_blank")
    firstImg.src = listCard[index].firstImg
    secondImg.src = listCard[index].secondImg
    logo.src = listCard[index].logo
    btnLink.href = listCard[index].link
    btnLink.classList.add("btnContact")
    
    btnLink.appendChild(svg)
    contenedorCarousel.appendChild(firstImg)
    contenedorCarousel.appendChild(secondImg)
    contenedorSocial.appendChild(logo)
    contenedorSocial.appendChild(link)
    contenedorCarousel.appendChild(contenedorSocial)
  }
  generateItemCarousel(0)
  

  


  const navContainer = document.querySelector(".nav");
  const ul = navContainer.children[1].children;
  ul[0].children[0].classList.add("activeLink");

  const containerCarosuel = document.querySelector(".container__trabajo-carousel");
  const carouselBullets = containerCarosuel.children[0];
  const containerBullets = carouselBullets.children;
  containerBullets[0].classList.add("bulletCarouselActive");

  for (let i = 0; i < containerBullets.length; i++) {
    containerBullets[i].addEventListener("click", (e) => {
      
      const bullet = e.target;
      const activeBullet = containerCarosuel.querySelector(".bulletCarouselActive");
      if (activeBullet) {
        activeBullet.classList.remove("bulletCarouselActive");
        
      }

      bullet.classList.add("bulletCarouselActive");
  
      generateItemCarousel(i)
    });
  }

  for (let i = 0; i < ul.length; i++) {
    ul[i].children[0].addEventListener("click", function() {
      for (let j = 0; j < ul.length; j++) {
        ul[j].children[0].classList.remove("activeLink");
      }
      this.classList.add("activeLink");
    });
  }
  

});
