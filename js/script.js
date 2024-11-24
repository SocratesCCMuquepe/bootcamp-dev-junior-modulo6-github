//fetch("https://api.imgflip.com/get_memes").then((response)=>{console.log(response.json())});

function search() {
    var username = document.getElementById("username").value;

    var url = `https://api.github.com/users/${username}`;
    var method = 'GET';

    $.getJSON(url, method, (user) => {
        showUserData(user);
        cleanError();
    }).fail(() => {
        // TODO FIx this
        showUserData({});
        showError("Não encontrado!")
    });
    function showError(msg) {
        document.getElementById("error").innerHTML = `<div class="alert alert-danger" role="alert">${msg}</div>`;
    }

    function cleanError() {
        document.getElementById("error").innerHTML = "";
    }

    function showUserData(user) {
        document.getElementById("name").innerHTML = user.name || "";
        document.getElementById("html_url").innerHTML = user.html_url || "";;
        document.getElementById("company").innerHTML = user.company || "";;
        document.getElementById("avatar_url").innerHTML = user.avatar_url ?
            `
                            <img src="${user.avatar_url}" alt="avatar" width="200" height="200" class="shadow rounded">
                        ` : "";



    }
}