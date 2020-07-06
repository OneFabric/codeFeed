var path = require('path')

function codePull() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var listOfRepos = []
    var resultList = []
    var request = new XMLHttpRequest()
    const rootUrl1 = 'https://api.github.com/users/OneFabric/repos' // Change the path segment 'OneFabric' to 'your-id'
    const rootUrl2 = 'https://api.github.com/repos'

    const date = "2000-06-03T23:36:40Z"

    openRequest(rootUrl1)

    request.onload = function(li=listOfRepos) {
        load1(li)
    };

    var returnList = (() => {
        request.send() 

        for(index in listOfRepos) {
            var data
            var result = "Nothing returned"

            url = listOfRepos[index]+"&since="+date
            openRequest(url)

            request.onload = function(da=data, u=url) {
                result = load2(da,u) 
            }

            request.send()
            resultList[index] = result
        }
        return resultList
    })()

    return returnList


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
                result = "No recent activity for "+ path.relative(rootUrl2,url)
            } else {
                result = url+"-> Activity: "+d[0].commit.message
            }

            return result
        
    }
}

module.exports.codePull = codePull