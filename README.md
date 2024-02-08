# Lesson 5.4: Revisiting DOM Manipulation

## Overview

This lesson covers essential techniques in JavaScript for dynamic HTML manipulation, focusing on creating new elements, updating their content and style, and appending them to the Document Object Model (DOM).

## Key Concepts

- **createElement()**: This method is used to create new HTML elements dynamically. 

```javascript
let heading = document.createElement("h1");  // Creates an <h1> element
```

- **Updating Elements**: Once an element is created, its content and style can be updated using properties like `innerHTML` and `style`.

```javascript
heading.innerHTML = "About Me";                // Sets the content of the heading
heading.style.backgroundColor = "pink";       // Sets the background color of the heading
```

- **appendChild()**: This method adds the newly created and updated element to the DOM, making it visible on the webpage.

```javascript
document.body.appendChild(heading);           // Appends the heading to the body of the document
```

## Practical Example

Creating and appending a simple paragraph to the body of an HTML document:

```javascript
// Step 1: Create the element
let paragraph = document.createElement("p");

// Step 2: Update the content of the element
paragraph.innerHTML = "I love JavaScript!";

// Step 3: Append the element to the body of the document
document.body.appendChild(paragraph);
```

---

Happy coding! 😊