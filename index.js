let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift()
}

function appendDriver(name){
    const newDriver = [...drivers, name]
    return newDriver
}

function prependDriver(name){
    const newDriverStart = [name,...drivers]
    return newDriverStart
}

function removeLastDriver(){
    const newDriverLastRemove = drivers.slice(0,drivers.length-1)
    return newDriverLastRemove
}

function removeFirstDriver(){
    const newDriverFirstRemove = drivers.slice(1)
    return newDriverFirstRemove
}
