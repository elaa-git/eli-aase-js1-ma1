// Question 1

const cat = {
    complain: "Meow!",
    getMeow: function() {
    console.log(this.complain);
}
}

cat.getMeow();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";


// Question 4

for(let i = 0; i < heading.length; i++) {
    heading[i].classList.add("subheading");
}

// Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.innerHTML.style.backgroundColor = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        age: "Age unknown"
    },
    {
        name: "Blurt",
        age: 21
    }
];

function myFunction(list) {
    for(let i = 0; i < list.length; i++)
    console.log(list[i].name);
}

myFunction(cats);

// Question 8: version 1
// Question 8 was very difficult, but tried as best I could.

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        age: "Age unknown"
    },
    {
        name: "Blurt",
        age: 21
    }
];

let html = "";

function createCats(cats) {
    for(let i = 0; i < cats.length; i++)
    console.log(cats[i]);

    html += `<div class="cat-container">
                <h5>Name ${cats[i].name}</h5>
                <p>Age ${cats[i].age}</p>
            </div>
            `;
    
    console.log(html);
}

createCats.innerHTML = html;

// Question 8: version 2

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        age: "Age unknown"
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createCats(cats) {
    for(let i = 0; i < cats.length; i++)
    console.log(cats[i]);
}

createCats.innerHTML = [`
{
<div>
    <h5>name: ${cats.name}</h5>
    <p>age: ${cats.age}</p>
</div>
},
{
<div>
    <h5>name: ${cats.name}</h5>
    <p>age: ${cats.age}</p>
</div>
},
{
<div>
    <h5>name: ${cats.name}</h5>
    <p>age: ${cats.age}</p>
</div>
} `
];

createCats(cats);

createCats.innerHTML = document.querySelector(".cat-container");



