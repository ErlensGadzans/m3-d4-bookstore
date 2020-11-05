window.onload = function(){
books()
}



function books (){
    let parent = document.querySelector('.books-container')
    fetch('https://striveschool-api.herokuapp.com/books', {'method':"GET"})
    .then(res=> res.json()
    ).then(result=>{
        
        result.forEach(elem => {
            console.log(elem)
            let card = `   <div class="col my-3">
                                <div class="card" style="height: 100%; width: 100%">
                                <img src="${elem.img}" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">${elem.title}</h5>
                                    <p class="card-text">Price $:
                                    ${elem.price}
                                    </p>
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                   
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
      event.currentTarget.parentNode.parentNode;
    targetCard.style.display = "none";
  }
