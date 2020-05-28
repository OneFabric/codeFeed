var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function codePull() {
    const request = new XMLHttpRequest()
    const url = 'https://api.github.com/users/OneFabric/repos'

    request.open('GET',url) 

    request.onload = function() {
        const data = JSON.parse(this.response)
        print(data)
    }

    request.send()
}

module.exports.codePull = codePull