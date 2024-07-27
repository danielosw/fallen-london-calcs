document.addEventListener("DOMContentLoaded",() => {
    runcode()
})
function runcode(){
document.getElementById("submit").onclick = function(){
    actions = document.getElementById("actions").value;
    let bees = actions*25;
    let hints = notzero(Math.floor(10*(bees-50)))
    // From this point on I use recursion
    let clues = cluesget(hints)
    let secrets = secretsget(clues)
    let tales = talesget(secrets)
    let implications = implicationsget(tales)
    let incunabulums = incunabulumsget(implications)
    document.getElementById("bees").innerText = "Bees caught: "+bees
    document.getElementById("hints").innerText = "Whispered Hints: "+hints
    document.getElementById("clues").innerText = "Cryptic Clues: "+clues
    document.getElementById("secrets").innerText = "Appalling Secrets: "+secrets
    document.getElementById("tales").innerText = "Tales of Terror!!: "+tales
    document.getElementById("implications").innerText = "Extraordinary Implications: "+implications
    document.getElementById("incunabulums").innerText = "Uncanny Incunabulum: "+incunabulums
    
}}
function incunabulumsget(implications){
    if(implications<25){
	return 0
    }
    else{
	return 5+incunabulumsget(implications-25)
    }
}
function implicationsget(tales){
    if(tales<50){
	return 0
    }
    else{
	return 10+implicationsget(tales-50)
    }
}
function talesget(secrets){
    if (secrets<333){
	return 0
    }
    else{
	return 105 + talesget(secrets-333)
    }
}
function secretsget(clues){
    if(clues<500){
	return 0
    }
    else{
	return 70 + secretsget(clues-500)
    }
}
function cluesget(hints){
    if(hints<500){
	return 0
    }
    else{
	return 200 + cluesget(hints-500)
    }
}
function notzero(num) {
    if (num<0) {
    	return 0
    }
    else{
	return num
    }
}
