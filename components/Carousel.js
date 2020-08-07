/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.getElementsByClassName('carousel-container')[0];
carouselContainer.appendChild(createCarousel())

function createCarousel () {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  leftBtn.classList.add('button');
  rightBtn.classList.add('button');

  img1.setAttribute('src', "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg");
  img2.setAttribute('src', "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg");
  img3.setAttribute('src', "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg");
  img4.setAttribute('src', "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg");
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  img4.style.display = 'block';

  carousel.appendChild(leftBtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightBtn);

  leftBtn.addEventListener('click', () => {
    changeImg(leftBtn)
  })

  rightBtn.addEventListener('click', () => {
    changeImg(rightBtn)
  })

  //Here is the function that changes the image based on the button clicks
  let i = 0;
  function changeImg (button){
      let imgNum = [img1, img2, img3, img4]
      imgNum.forEach(img => {
        img.style.display = 'none';
      })
      imgNum[i].style.display = 'block';
      console.log(imgNum[i])
      i++; 
      if(i===4){
        i = 0;
      }
  }
//   rightBtn.addEventListener('click', () => {
//     let imgNum = [img1, img2, img3, img4]
//     imgNum.forEach(img => {
//       img.style.display = 'none';
//     })
//     imgNum[i].style.display = 'block';
//     console.log(imgNum[i])
//     i++; 
//     if(i===4){
//       i = 0;
//     }
// })
  
  return carousel;
}


// let imgOff = [img1, img2, img3, img4]
// leftBtn.addEventListener('click', () => {
//   let imgOn = imgOff.map(img => img.style.display = 'block')
//   console.log(imgOn)
    
// })