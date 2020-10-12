### [Contributions are Welcome](https://github.com/MichaelLarocca/Scrimba-Class-of-2020/blob/master/CONTRIBUTING.md)
### [Code of Conduct](https://github.com/MichaelLarocca/Scrimba-Class-of-2020/blob/master/CODE_OF_CONDUCT.md)

# Scrimba Class of 2020 Project
## About this project 
Thank you for your consideration in contributing to this project! The purpose of this project is to get practice with collaboration and basic Git commands. The only limitation that I request is that contributing members are Scrimba students. If you are not a Scrimba student, you are welcome to create a copy of the project structure and edit it to meet your needs.

To start the project, I created student cards to fill out. I left detailed instructions below on how to fill them out and edit the code.

If you do not wish to fill out a student card, please consider other contributions to this project. A few suggestions I have are changing the overall style and structure, adding media queries, creating a search by class, or search by student name. Please feel free to make any contribution suggestions.

Thanks again, and I look forward to collaborating on this project!

## Instructions to fill out and edit a student card
First, in the HTML, copy a "Jane Doe" or "John Doe" card to edit.

Then add a picture to the images folder, then change the image source:
```html
<img src="images/Scrimba-logo.png" alt="">
```

Edit the name and study group:
```html
<p class="name"><strong>Name:</strong> Jane Doe</p>
<p class="contact"><em>fe-study-group-00</em></p>
```      

Rename the function name, replacing the underscore "janeDoe" or "johnDoe" with your name. (btnInfo_yourName)
```html
<button class="btn-info" onclick="btnInfo_janeDoe()">Info ⬇</button>
```

Rename the id name, replacing the hyphen "janeDoe" or "johnDoe" with your name. ("info-yourName")

```html
<div id="info-janeDoe" class="card-info">
```

Edit the hypertext references and place holder texts accordingly 

```html
<p class="link"><i class="fab fa-github"><a href="#" target="_blank"> PlaceHolder</a></i></p>
```

Replace the Lorem ipsum text with your "About Me" information

```html
<p class="about-title"><strong>About Me</strong></p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur pariatur totam!</p>
 ```
 
 Finally, in JavaScript, rename the function name, replacing the underscore "janeDoe" or "johnDoe" with your name. (btnInfo_yourName)

Then rename the class name, replacing the hyphen "janeDoe" or "johnDoe" with your name. ("info-yourName")
 
 ```js
 function btnInfo_janeDoe() {
  const userInfo = document.getElementById("info-janeDoe");
  userInfo.style.display === "none"
    ? (userInfo.style.display = "block")
    : (userInfo.style.display = "none");
}
```
