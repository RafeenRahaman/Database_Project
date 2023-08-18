const database = firebase.database().ref()



let submit = document.getElementById('submit')
submit.addEventListener('click', submitFunction)
function submitFunction() {
    let title = document.getElementById('title_input').value
    let blog = document.getElementById('blog_input').value
    let author = document.getElementById('author_input').value
    let data = {
        TITLE: title,
        BLOG: blog,
        AUTHOR: author
    }
    database.push(data)
    addBlog(title, blog, author)
}

function addBlog(a, b, c) {

    let blog_box = document.getElementById('blog_box')
    let new_title = document.createElement('p')
    new_title.innerHTML = a
    blog_box.append(new_title)
    let new_blog = document.createElement('p')
    new_blog.innerHTML = b
    blog_box.append(new_blog)
    let new_author = document.createElement('p')
    new_author.innerHTML = c
    blog_box.append(new_author)
    
}
//couldn't get firebase to work for some reason, had issues reading data