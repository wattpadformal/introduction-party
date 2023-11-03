const pList = document.querySelector(".pList");
const subPlist = document.querySelectorAll(".sub-plist");
const About = document.querySelectorAll(".ketny");
const wa = document.querySelectorAll('.wa');

subPlist.forEach(e => {
  e.parentNode.addEventListener("mouseover", a => {
    if(a.target.nextElementSibling.className == 'ketny') {
      a.target.nextElementSibling.style.display = 'flex';
      a.target.style.opacity = '0.1';
      a.target.parentElement.style.backgroundColor = 'rgba(0, 47, 57, 1)';
      a.target.parentElement.style.transform = 'scale(1.05, 1.05)';
      a.target.parentNode.addEventListener("mouseout", z => {
        setTimeout(function() {
          if(z.target.nextElementSibling.className == 'ketny') {
            z.target.nextElementSibling.style.display = 'none';
            z.target.style.opacity = '1';
            z.target.parentElement.style.backgroundColor = 'white';
            z.target.parentElement.style.transform = 'scale(1, 1)';
        }
        }, 100);
        
      });
    }
    console.log(e.children);
  });
});