const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Constant creation to select the items and thumbs containers
const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");

// Cycle to print on html all the arrays'values based on the created html structure
for (i = 0; i < items.length; i++) {
    itemsContainer.innerHTML += (`
        <div class="item">
            <img src=${items[i]} alt="">
            <div class="text">
                <h3>${title[i]}</h3>
                <p>${text[i]}</p>
            </div>
        </div>`);

    thumbsContainer.innerHTML += (`
        <div class="thumb">
            <img src=${items[i]} alt="">
        </div>`);
}

// Add the active class to the first element of the array
document.getElementsByClassName("item")[0].classList.add("active");
document.getElementsByClassName("thumb")[0].classList.add("active");

// Add the event click on prev and next buttons
    // i declare the active position variable
    let thumbPos = 0;
    // fuction that add the class to the next element and remove the class from the actual element
    document.querySelector(".next").addEventListener("click",
    function() {
        if (thumbPos > 3) {
            thumbPos = 0;
            document.getElementsByClassName("item")[0].classList.add("active");
            document.getElementsByClassName("item")[4].classList.remove("active");   
            document.getElementsByClassName("thumb")[0].classList.add("active");
            document.getElementsByClassName("thumb")[4].classList.remove("active");
            
        } else {
            thumbPos++;
            document.getElementsByClassName("item")[thumbPos].classList.add("active");
            document.getElementsByClassName("item")[thumbPos - 1].classList.remove("active");
            document.getElementsByClassName("thumb")[thumbPos].classList.add("active");
            document.getElementsByClassName("thumb")[thumbPos - 1].classList.remove("active");
            }
        }
    );

    document.querySelector(".prev").addEventListener("click",
    function() {
        if (thumbPos < 1) {
            thumbPos = 4;
            document.getElementsByClassName("item")[4].classList.add("active");
            document.getElementsByClassName("item")[0].classList.remove("active");   
            document.getElementsByClassName("thumb")[4].classList.add("active");
            document.getElementsByClassName("thumb")[0].classList.remove("active");
            
        } else {
            thumbPos--;
            document.getElementsByClassName("item")[thumbPos].classList.add("active");
            document.getElementsByClassName("item")[thumbPos + 1].classList.remove("active");
            document.getElementsByClassName("thumb")[thumbPos].classList.add("active");
            document.getElementsByClassName("thumb")[thumbPos + 1].classList.remove("active");
            }
        }
    );
    // maximum 5 addiction and then restart from the first