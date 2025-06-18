// html elements
let body = document.querySelector("body");
let container = document.querySelector(".container");

// 1. Create an h2 element.
// - Store it in a variable called h2.
let head2 = document.createElement("h2");

// 2. Set the innerHTML of h2 to your name.
head2.innerHTML = "Dan Phan";


// 3. Style at least two different properties for the heading.
head2.style.color = "blue";


// 4. Select the container div and append the h2 element.
container.appendChild(head2);


// 5. Create a paragraph element.

para = document.createElement("p");
// - Store it in a variable called para.


// 6. Set the innerHTML of para to a fact about yourself.
para.innerHTML = "My name is Dan!"

// 7. Style at least two different properties for the paragraph.
para.style.color = "red";

// 8. Select the container div and append the paragraph element.
container.appendChild(para);


// Uncomment the code below after completing 1-8.
// Where do you see this on the page?
// Why is it located there even though the body is selected?
// let h1 = document.createElement('h1');
// h1.innerHTML = "My Webpage";
// body.appendChild(h1);