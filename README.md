# Scrimba-Class-of-2020

First, in the HTML, copy a John Doe" or "Jane Doe" card to edit.

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
