function postComment() {
    let commenter = document.getElementById('commenterName').value
    let comment = document.getElementById('commentText').value

    let commentTemplate = document.getElementById('comment-template').innerHTML;
    // '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>'
    let templateFn = _.template(commentTemplate)

    let commentsDiv = document.getElementById('comments')

    let templateHTML = templateFn({ comment: comment, commenter: commenter })

    commentsDiv.innerHTML += templateHTML
}



// Why do we need specific _.template to make it as a template?

// lodash treats the someDynamicValues below like instances ???
// let commentNode = document.getElementById("comments");
// commentNode.innerHTML = "<div class='some-class'>This is a comment and
// it's real long</div><p>" + someDynamicValue + "</p><p>" + someOtherValue
// + "</p>";