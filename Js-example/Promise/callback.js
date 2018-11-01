/**
 * Created by 可乐鸡翅 on 2018/10/18.
 */
var posts = [
    {
        title: 'post one',
        body: 'This is post one'
    },
    {
        title: 'post two',
        body: 'This is post two'
    }
]

/**
 * 1秒后将posts的值在文档上渲染出来
 * */
function getPosts() {
    var output = '';
    setTimeout(function () {
        posts.forEach((post, index) => {
            output += `<p>${post.body}</p>`
            document.body.innerHTML = output;
        })
    }, 1000)

}

// getPosts();

function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post)
        callback()
    }, 2000)
}

createPost({title: 'post three', body: 'This is post three'}, getPosts)