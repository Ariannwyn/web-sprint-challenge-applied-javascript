// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.getElementsByClassName('cards-container')[0];
axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {
        let articleArray = [
            response.data.articles.bootstrap,
            response.data.articles.javascript,
            response.data.articles.jquery,
            response.data.articles.node,
            response.data.articles.technology
        ]
        articleArray.forEach(section =>{
            section.forEach(card => {
                cardsContainer.appendChild(cardMaker(card))
                
            })
        })
    })

    .catch(error => {
        console.log(error)
    })
const cardMaker = (data) => {
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const authImg = document.createElement('img');
const authName = document.createElement('span');

card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');

headline.textContent = data.headline;
authImg.setAttribute('src', data.authorPhoto);
authName.textContent = data.authorName;

card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
author.appendChild(authName);
imgContainer.appendChild(authImg);

headline.addEventListener('click', () => {
    console.log(data.headline)
})

return card;
}