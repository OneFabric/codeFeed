var path = require('path')

function codePull() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var listOfRepos = []
    var data = {}
    var request = new XMLHttpRequest()
    const rootUrl1 = 'https://api.github.com/users/OneFabric/repos' // Change the path segment 'OneFabric' to 'your-id'
    const rootUrl2 = 'https://api.github.com/repos'

    var date = new Date()
    data = date.toISOString

    openRequest(rootUrl1)

    request.onload = function(li=listOfRepos) {
        load1(li)
    };

    (() => {
        request.send() 

        for(index in listOfRepos) {
            var data;

            url = listOfRepos[index]+"&since="+date
            openRequest(url)

            request.onload = function(da=data, u=url) {
                load2(da,u) 
            }
            request.send()
        }
    })()

    function openRequest(url) {
        request.open('GET',url,false)
    }

    function load1(list) {

            var d = JSON.parse(request.responseText)

            // Assumption: Only master branch's commits will be reflected.
            for(let index in d) {
                list[index] = rootUrl2 + '/' + d[index].full_name + '/commits?sha=master' 
            }
        }

    function load2(d,url) {
        d = JSON.parse(request.responseText)

        if(d=="") {
            console.log("No recent activity for "+ path.relative(rootUrl2,url)  )
        } else {
            push(d,url)
        }
    }

    function push(data,url) {
        console.log(url+"-> Activity: "+data[0].commit.message)
    }
}

module.exports.codePull = codePull