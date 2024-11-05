//* Оживление кнопок 

document.querySelector("#reproduction").addEventListener("click", () => {
  document
    .querySelector(".reproductionPage")
    .scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".productBtn").addEventListener("click", () => {
  document
    .querySelector(".reproductionPage")
    .scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#about").addEventListener("click", () => {
  document.querySelector(".teamSection").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#news").addEventListener("click", () => {
  document.querySelector(".websiteInfo").scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.websiteInfoBtn').addEventListener('click', () => {
  alert('К сожалению, тут ничего нет.')
})

document.querySelector('#footerFrance').addEventListener('click', () => {
  document.querySelector('.reproductionPage').scrollIntoView({ behavior: 'smooth'});
  document.querySelector('.catalogSwitcher:first-child').click();
})

document.querySelector('#footerGermany').addEventListener('click', () => {
  document.querySelector('.reproductionPage').scrollIntoView({ behavior: 'smooth'});
  document.querySelector('.catalogSwitcher:nth-child(2)').click();
})

document.querySelector('#footerEngland').addEventListener('click', () => {
  document.querySelector('.reproductionPage').scrollIntoView({ behavior: 'smooth'});
  document.querySelector('.catalogSwitcher:last-child').click();
})

document.querySelector('#burger').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('open');
})

//* Смена каталога 

const catalogSwitcher = document.querySelectorAll(".catalogSwitcher");
const catalog = document.querySelectorAll(".catalog");

catalogSwitcher.forEach((item) => {
  item.addEventListener("click", () => {
    var currentBtn = item;
    var catalogId = currentBtn.getAttribute("data-tab");
    var currentTab = document.querySelector(catalogId);

    if( ! currentBtn.classList.contains('active')) {
        catalogSwitcher.forEach((item) => {
            item.classList.remove("active");
          });
      
          catalog.forEach((item) => {
            item.classList.remove('active');
          });
      
          currentBtn.classList.add("active");
          currentTab.classList.add("active");
    }
  });
});
document.querySelector('.catalogSwitcher').click();