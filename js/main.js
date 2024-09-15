// Card hover effect

const process = document.querySelectorAll('#processo-container .card-process');
const content = document.querySelectorAll('#process-content-container .card-grid');

// process.forEach((card, index) => {
//   card.addEventListener('mouseover', () => {
//       content[index].classList.remove('card-grid');
//       content[index].classList.add('show');
//   });
//   card.addEventListener('mouseout', () => {
//       content[index].classList.remove('show');
//       content[index].classList.add('card-grid');
//   });
// });

process.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        content[index].classList.add('active');
    })

    card.addEventListener('mouseout', () => {
      content[index].classList.remove('active');      
  });
})

processCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        content[index].classList.remove('card-grid');
        contentCards[index].classList.add("show");        
    })
})