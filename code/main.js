/*
Code by Suman Jampala a.k.a. OneFabric
Would like to credit Tim Wheeler for reducing my research time
(via his tutorial: https://codesnippet.io/github-api-tutorial/). 
*/

'use strict'
const library = require("./codePull")
var codePull = library.codePull

function apiEndpoint() {
    return codePull()
}

module.exports.apiEndpoint = apiEndpoint
