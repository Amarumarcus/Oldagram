let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const contentSectionEl = document.getElementById("contentSection")

let curerntPost = ""

for (let i = 0; i < posts.length; i++) {
    curerntPost = posts[i]
    appendUserInfo(curerntPost)
    appendPost(curerntPost)
    appendCommentSection(curerntPost)
}

function appendUserInfo(item) {
    let userInfoValue = item
    let finalUserInfo = `
        <img src="${userInfoValue.avatar}" alt="avatars" class="avatar">
        <p><span class="blockElement boldText">${userInfoValue.name}</span>${userInfoValue.location}</p>
    `

    let userInfoDiv = document.createElement("div")
    userInfoDiv.innerHTML = finalUserInfo
    userInfoDiv.setAttribute("class", "topBox boxStyle")
    contentSectionEl.appendChild(userInfoDiv)
}

function appendPost(item) {
    let postValue = item

    let postImg = document.createElement("img")
    postImg.setAttribute("class", "imagePost")
    postImg.src = postValue.post
    contentSectionEl.appendChild(postImg)
}

function appendCommentSection(item) {
    let commentSectionValue = item
    let finalCommentSection = `
        <div>
            <img src="images/icon-heart.png" alt="heart" class="icons" id="likeBtn">
            <img src="images/icon-comment.png" alt="comment" class="icons">
            <img src="images/icon-dm.png" alt="dm" class="icons">
        </div>
        <p class="boldText" id="likes">${commentSectionValue.likes}</p> likes<br>
        <p><span class="boldText">${commentSectionValue.username}</span> ${commentSectionValue.comment}</p>
    `

    let commentSectionDiv = document.createElement("div")
    commentSectionDiv.innerHTML = finalCommentSection
    commentSectionDiv.setAttribute("class", "boxStyle")
    contentSectionEl.appendChild(commentSectionDiv)

    let spacer = document.createElement("div")
    spacer.setAttribute("class", "spacer")
    contentSectionEl.appendChild(spacer)
}


const likeBtn = document.getElementById("likeBtn")
const likes = document.getElementById("likes")

let likeCounter = posts[0]
likeCounter.likes = 30



console.log(likeCounter)
console.log(likeCounter.likes)

likeBtn.addEventListener('click', () => {
    let likeCounter = posts[0]
    likeCounter.likes = 30
    console.log(likeCounter.likes)
})








