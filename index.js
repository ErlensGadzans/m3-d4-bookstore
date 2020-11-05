window.onload = function(){
books()
}
let booksList = []


function books (){
    let parent = document.querySelector('.books-container')
    fetch('https://striveschool-api.herokuapp.com/books', {'method':"GET"})
    .then(res=> res.json()
    ).then(result=>{
        booksList=result
        result.forEach(elem => {
           console.log(elem)
            let card = `   <div class="col my-3">
                                <div class="card" style="height: 100%; width: 100%">
                                <img src="${elem.img}" class="card-img-top" alt="..." />
                                <div class="card-body">
                                <h1></h1>
                                    <h5 class="card-title">${elem.title}</h5>
                                    <p class="card-text">Price $:
                                    ${elem.price}
                                    </p>
                                    <a onclick="addToCart()" class="btn btn-primary">Add to cart</a>
                                   
                                    <a onclick="hideCard()" class="btn btn-primary">Skip</a>
                                </div>
                                </div>
                            </div>`
            parent.innerHTML += card

        });
    }).catch(e=>console.log(e))
}

function hideCard() {
    const targetCard =
      event.currentTarget.parentNode.parentNode.parentNode;
    targetCard.style.display = "none";
  }

let total =0

  function addToCart() {

    const targetCard =
      event.currentTarget.parentNode;
    targetCard.style.backgroundColor = "green";
    const title = event.currentTarget.parentNode.children[1].innerText
    const bookInArr = booksList.find(book=>book.title===title)
   // console.log(bookInArr)
    let addedBookList = document.querySelector("#books-added")
    let newBook = document.createElement("li")
newBook.innerText = title + ' ' + bookInArr.price
addedBookList.appendChild(newBook)
total +=bookInArr.price
const priceNode = document.querySelector('.price')
priceNode.innerHTML=total.toFixed(2)
}

// function lessPrice() {
//     const targetCard =
//       event.currentTarget.parentNode;
//     const price = event.currentTarget.parentNode.children[2].innerText
//     const cheapBooks = booksList.find(book=>book.price < 10)

//     console.log(cheapBooks)

// }



function lessPrice (){
  
    document.getElementById("books").innerHTML = "";
    
        let parent1 = document.querySelector('.books-container')
        fetch('https://striveschool-api.herokuapp.com/books', {'method':"GET"})
        .then(res=> res.json()
        ).then(result=>{
           booksList=result
            let cheapBooks = booksList.filter(book => book.price < 10)
            cheapBooks.forEach(elem => {
               console.log(elem)
                let card = `   <div class="col my-3">
                                    <div class="card" style="height: 100%; width: 100%">
                                    <img src="${elem.img}" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                    <h1></h1>
                                        <h5 class="card-title">${elem.title}</h5>
                                        <p class="card-text">Price $:
                                        ${elem.price}
                                        </p>
                                        <a onclick="addToCart()" class="btn btn-primary">Add to cart</a>
                                       
                                        <a onclick="hideCard()" class="btn btn-primary">Skip</a>
                                    </div>
                                    </div>
                                </div>`
                                
                            
         parent1.innerHTML += card
                                
                
    
            });
        }).catch(e=>console.log(e))
    }



function betweenPrice (){
  
    document.getElementById("books").innerHTML = "";
    
        let parent1 = document.querySelector('.books-container')
        fetch('https://striveschool-api.herokuapp.com/books', {'method':"GET"})
        .then(res=> res.json()
        ).then(result=>{
           booksList=result
            let cheapBooks = booksList.filter(book => book.price >= 10 && book.price <= 15)
            cheapBooks.forEach(elem => {
               console.log(elem)
                let card = `   <div class="col my-3">
                                    <div class="card" style="height: 100%; width: 100%">
                                    <img src="${elem.img}" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                    <h1></h1>
                                        <h5 class="card-title">${elem.title}</h5>
                                        <p class="card-text">Price $:
                                        ${elem.price}
                                        </p>
                                        <a onclick="addToCart()" class="btn btn-primary">Add to cart</a>
                                       
                                        <a onclick="hideCard()" class="btn btn-primary">Skip</a>
                                    </div>
                                    </div>
                                </div>`
                                
                            
         parent1.innerHTML += card
                                
                
    
            });
        }).catch(e=>console.log(e))
    }
    
    function morePrice (){
  
        document.getElementById("books").innerHTML = "";
        
            let parent1 = document.querySelector('.books-container')
            fetch('https://striveschool-api.herokuapp.com/books', {'method':"GET"})
            .then(res=> res.json()
            ).then(result=>{
               booksList=result
                let cheapBooks = booksList.filter(book => book.price > 15)
                cheapBooks.forEach(elem => {
                   console.log(elem)
                    let card = `   <div class="col my-3">
                                        <div class="card" style="height: 100%; width: 100%">
                                        <img src="${elem.img}" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                        <h1></h1>
                                            <h5 class="card-title">${elem.title}</h5>
                                            <p class="card-text">Price $:
                                            ${elem.price}
                                            </p>
                                            <a onclick="addToCart()" class="btn btn-primary">Add to cart</a>
                                           
                                            <a onclick="hideCard()" class="btn btn-primary">Skip</a>
                                        </div>
                                        </div>
                                    </div>`
                                    
                                
             parent1.innerHTML += card
                                    
                    
        
                });
            }).catch(e=>console.log(e))
        }