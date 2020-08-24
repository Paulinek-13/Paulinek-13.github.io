window.onload = function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/Paulinek-13/repos', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        var repos_list = document.getElementsByClassName("repos-list").item(0);
        var str_new_innerHTML = "";
        for (var i in data) {
            if (!data[i].private) {
                if (data[i].name != "Paulinek-13.github.io") {
                    str_new_innerHTML += "<a href=\"" + data[i].html_url + "\">" + data[i].name + "</a>";
                }
            }
        }
        repos_list.innerHTML = str_new_innerHTML;
    }
    request.onerror = function () {
        document.getElementsByClassName("repos-list").item(0).innerHTML = "<a></a>";
    }
    request.send();
}