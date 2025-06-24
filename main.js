let son = prompt ("Ismingizni kriting")

let xabar= son.toLocaleLowerCase()

let bor = prompt("Ismingizda qanday harf borligni bilishni hoxlaysizmi")

if(xabar.includes(bor)) {
    alert(`Sizning ismingiz  ichida ${bor} harfi bor `)
}else{
    alert(`Sizning   isming ichida ${bor} harfi yuq`)
}