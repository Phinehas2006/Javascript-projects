function boolcheck(bool){
    if (typeof(bool) === "boolean") {
        return true
    } else {
        return false
    }
}
boolcheck(true)
boolcheck(false)
boolcheck("true")
boolcheck(1)
