var post_button = document.querySelector(".post-button");
post_button.addEventListener("click",function(){
    
    // This is a a way to dynamically generate html when the plus button is clicked, when the button is clicked, the user will be able to create a post 
    // Below the form, this gets created when the user clicks on the post button to create a post 
    var card = `
    <div class="card-body">
        <h5 class="card-title">New Blog Post</h5>
        <form action="/submit" method="POST"> 
          <div class="form-group">
            <label for="postTitle">Title</label>
            <input type="text" name="postTitle" class="form-control" id="postTitle" placeholder="Enter title">
          </div>
          <div class="form-group">
            <label for="postContent" class="mt-2">Content</label>
            <textarea class="form-control" name="postContent" id="postContent" rows="5" placeholder="Just Say it!"></textarea>
          </div>
          <button type="submit" class= "btn btn-primary mt-3" id="publishButton"> Publish</button>
        </form>
      </div>
    </div>
  `;
  document.getElementById('cardContainer').innerHTML += card;  // get the card with the cardContainer, then add this card to the container for the user to create a post 

  var publishButton = document.getElementById('publishButton');// connected correctly
    publishButton.addEventListener('click', function () { // This is the behavior that occurs when the publish button is pressed
      // This function will be called when the publish button inside the dynamically generated card is clicked
        
        //var postTitle = document.querySelector('.main-post-title');
        var postTitleInput = document.getElementById('postTitle'); // Get the input element
        var postTitleText = postTitleInput.value; // Get the value of the input
        console.log(postTitleText); // testing purposes only this will output the title of the post 
        // You can add your logic here to handle publishing the post below he
        // below here you can add the logic for converting the title post into an achor tag and adding it to the posts table
        
        // Below the anchor items is created dynamically,
       // var anchorItem = document.createElement("a");
        //anchorItem.textContent = postTitleText;

        //Append the anchor item to the list of posts
        var postTitleContainer = document.getElementById('post-list-container');
        var listElement = document.createElement("li");
        listElement.textContent = "Hello";
        postTitleContainer.appendChild(listElement);


        //try creating an array and storing the post as an object inside the array posts 
        
        
        
        

        ///There is a big logic error, you can only see the post in the post list container, if you press back on the webpage, the same goes for outputting the text for the post title
    });

  
});
// When plus is clicked on the publishButton will be retrieved and you further functionality will be able to be executed on the publish button


/*
var newAnchor = document.createElement("a"); // create new anchor tag
        newAnchor.href = "#"; // set anchor tag to empty link
        newAnchor.textContent = postTitleText; // set the post title text as the text to the anchor tag
        var postListContainer = document.querySelector(".post-list-container"); // Select the post-list-container
        postListContainer.appendChild(newAnchor); // add the newly created anchor tag to the postListContainer
*/


