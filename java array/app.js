var team1="karachi"
var team2="islamabad"
var team3="multan"
var team4="lahore"
var team4="quetta"

var teams=["karachi","islamabad","multan","lahore","quetta"]

// adding from start

const addingteam=teams.unshift('peshawar')

console.log(teams)
console.log(addingteam)

// removing from start

const removeteam=teams.shift()

console.log(teams)
console.log(removeteam)

// adding from end

const addingteamfromend=teams.push('peshawar')

console.log(teams)
console.log(addingteamfromend)

// removing from end

const removingteamfromend=teams.pop()

console.log(teams)
console.log(removingteamfromend)