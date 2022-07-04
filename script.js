let searchBook = document.getElementById("searchBook");
let submitBtn = document.getElementById("submitBtn");
let error = document.getElementById("error");
// data fetch from user request
let loadBook = () => {
  if (searchBook.value == "") {
    error.innerHTML = "Search box must not be empty!";
  } else {
    error.innerHTML = "";
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook.value}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayLoadBook(data.items));
    searchBook.value = "";
  }
};
submitBtn.addEventListener("click", loadBook);

// display data
let displayData = document.getElementById("displayData");
let displayLoadBook = (temp) => {
  // console.log(dataItem);
  if (temp == undefined) {
    error.innerText = "Item not Found";
  } else {
    for (let singleItem of temp) {
      console.log(singleItem);
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
      <div onclick="detailsBook('${singleItem.selfLink}')" class="card-body">
       <img src="${
         singleItem.volumeInfo.imageLinks.thumbnail
       }" class="card-img-top" alt="book image" />
       <h5 class="card-title">${singleItem.id}</h5>
        <h5 class="card-title">${singleItem.volumeInfo.title}</h5>
        <h5 class="card-title">${singleItem.volumeInfo.authors}</h5>
        <h5 class="card-title">${singleItem.volumeInfo.publishedDate}</h5>
    
        <p class="card-text">
        ${singleItem.volumeInfo.description.slice(0, 150)}
        </p>
      </div>
    
      `;
      displayData.appendChild(div);
    }
  }
};

//  detailsBook

let detailsBook = (details) => {
  // let url = `https://www.googleapis.com/books/v1/volumes?q=${details}`;
  let url = `${details}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetailsBook(data));
};
let fullDisplayImage = document.getElementById("fullDisplayImage");
let displayDetailsBook = (bookApiData) => {
  console.log(bookApiData);

  // console.log(singleUser);
  fullDisplayImage.innerHTML = `
  <div id="fullCard" class="card">
  <img src="${bookApiData.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="book image" />
  <h5 class="card-title">${bookApiData.id}</h5>
   <h5 class="card-title">${bookApiData.volumeInfo.title}</h5>
   <h5 class="card-title">${bookApiData.volumeInfo.authors}</h5>
   <h5 class="card-title">${bookApiData.volumeInfo.publishedDate}</h5>
   <p class="card-text">
   ${bookApiData.volumeInfo.description}
   </p>
</div>

  `;
};

// for (let singleTemp of temp) {
//   console.log(singleTemp);
//   fullDisplayImage.innerHTML = `
//   <div class="card">
//   <img src="${singleTemp.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="book image" />
//   <h5 class="card-title">${singleTemp.id}</h5>
//    <h5 class="card-title">${singleTemp.volumeInfo.title}</h5>
//    <h5 class="card-title">${singleTemp.volumeInfo.authors}</h5>
//    <h5 class="card-title">${singleTemp.volumeInfo.publishedDate}</h5>

//    <p class="card-text">
//    ${singleTemp.volumeInfo.description}
//    </p>
// </div>

//   `;
// }
{
  /*  */
}

// for (let singleUser of Object.values(bookApiData)) {}
