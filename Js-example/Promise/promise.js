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

function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Error:something went wrong!')
            }

        },2000)
    })
}

//
createPost({title: 'post three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err))


// async / await

async function init(){
    await createPost({title: 'post three', body: 'This is post three'});

    // 只有createPost 执行完成后才执行getPosts()
    getPosts();
}

init()

async function getUsers(){
    const res = await fetch('');
    const res = await res.then(res => res.json())
}


