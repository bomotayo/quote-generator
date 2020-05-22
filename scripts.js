  const app = document.getElementById('root');
  const btn = document.getElementById('btn');
  

  const container = document.createElement('div');
  container.setAttribute('class','container');

  const h1 = document.createElement('h1');
  h1.setAttribute('class','title');
  h1.textContent = `Click "Quote Button" To Generate Quote`;

  const quoteBox = document.createElement('div');
  quoteBox.setAttribute('id','quoteBox');

  app.appendChild(container);
  container.appendChild(h1);

  let quote = document.createElement('h4');
  quote.setAttribute('id','quote');

  let author = document.createElement('p');
  author.setAttribute('id','author');



  let arr = ['red', 'yellow', 'green'];
  let count = 0;


  btn.addEventListener("click", function(){
      // if(count === arr.length){
      //   count = 0;
      // }
      //  document.body.style.backgroundColor = arr[count];
      //  count++;

      fetch('https://type.fit/api/quotes')
          .then(response => {
            return response.json()
          })
          .then(data => {

              if(count === data.length){
                count = 0;
              }

              if(data[count].author !== null){
                quote.textContent = data[count].text;
                author.textContent = data[count].author;
              }
              count++;
          });
              quoteBox.appendChild(quote);
              quoteBox.appendChild(author);
              container.appendChild(quoteBox);

  });

    


