document.addEventListener('DOMContentLoaded', getPosts);
// const log = document.getElementById('more');
// log.addEventListener("click",filterArray);

// document.getElementById('input-text').addEventListener('keyup',inputField);
// document.getElementById('6gb').addEventListener('change',firstCheckbox);


// document.getElementById('5gb').addEventListener('change',firstCheckbox);
// document.getElementById('4gb').addEventListener('change',firstCheckbox);
// document.getElementById('3gb').addEventListener('change',firstCheckbox);
// document.getElementById('2gb').addEventListener('change',firstCheckbox);


function getPosts () {
  http.get('http://localhost:3000/Phones')
    .then(data => showPosts(data))
    .catch(err => console.log(err));   
}

class EasyHttp {

  async get(url) {
   const respone = await fetch(url);
   const resData = await respone.json();
   return resData;
 }
}

const http = new EasyHttp();

let postArray;

function showPosts(posts) {
   postArray=[...posts];
   addToUI(postArray)
}

function addToUI (posts) {
  let output = '';
  posts.forEach((post) => {
    output += `
    <div class="line"></div>
    <div class="first-mobile">
      <div class="mobile-pic1">
        <img src=${post.imageurl} alt="">
        <br><br>
        <input type="checkbox" id="memory" name="memory">
        <label for="memory">Add to compare</label>
      </div>
      <div class="mobile-details">
        <h3>
          <img src="img/heart.png" alt="">
          ${post.name}
        </h3>
        <div class="mobile-rating">
          <button class="button-rating">
            <a href="">${post.rating}★</a>
          </button>
          <p>${post.review} Reviews</p>
        </div>
        <div class="mobile-specs">
          <ul class="mobile-specs">
            <li><a href="">${post.memory} </a></li>
            <li><a href="">${post.display} </a></li>
            <li><a href="">${post.camera} </a></li>
            <li><a href="">${post.battery}</a></li>
            <li><a href="">${post.processor}</a></li>
            <li><a href="">${post.protection}</a></li>
            <li><a href="">${post.charge}</a></li>
            <li><a href="">${post.warranty}</a></li>
          </ul>
        </div>
      </div>
      <div class="price">
        <div class="price-rate">
          <a href="">${post.price}</a>
          <img src="img/assured.png" alt="">
        </div>
        <div class="off">
          <p>${post.offer}</p>
          <span>${post.offerPercent} off</span>
        </div>
        <div class="nocost-emi">
          <p>No Cost Emi</p>
          <span>Upto ${post.deduction} Off on Exchange</span>
        </div>
      </div>
    </div>
    `;  
  });
  post = document.querySelector('.mobiles-container');
  post.innerHTML = output;
}

// function inputField(e) {
//   const result_array = postArray.filter(post=> post.name.toLowerCase().includes(e.target.value.toLowerCase()));
//   console.log(result_array)
//   post = document.querySelector('.mobiles-container');
//   post.innerHTML = '';
//   addToUI(result_array);
// }

// function firstCheckbox ({target}) {
//   if(target.checked){
//     const checkResult = postArray.filter(post => post.memory.includes(target.name.toUpperCase()));
//     console.log(checkResult);
//     post = document.querySelector('.mobiles-container');
//     post.innerHTML = '';
//     addToUI(checkResult);
//   } else {
//     showPosts(postArray);
//   }
// }

document.getElementById('input-text').addEventListener('keyup',mainEvent);
const checkboxes = document.querySelectorAll('.memory')
for(let i=0; i<checkboxes.length;i++){
document.getElementById(checkboxes[i].id).addEventListener('change', mainEvent);
}


function mainEvent() {
  const input = document.getElementById('input-text').value;
  if(input === '') {
    for(let i=0; i<checkboxes.length;i++){
      // console.log(checkboxes[i].value)
      if(checkboxes[i].checked){
        filterByCheckbox(checkboxes[i],postArray);
      }
    }

  } else {
    filterByinput(input);
  }
}

function filterByCheckbox(target,itemArray) {
    const checkResult = itemArray.filter(post => post.memory.includes(target.name.toUpperCase()));
    post = document.querySelector('.mobiles-container');
    post.innerHTML = '';
    addToUI(checkResult);
}

function filterByinput (input) {  
  const cb = document.getElementById('6gb')
  if(cb.checked === true) {
    const resultArray = postArray.filter(post=> post.name.toLowerCase().includes(input.toLowerCase()));
    filterByCheckbox(cb,resultArray);
  } else {
    const resultArray = postArray.filter(post=> post.name.toLowerCase().includes(input.toLowerCase()));
    addToUI(resultArray);
  }
}

