const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line
const leoNewBalance= Math.abs (parseInt(leoBalance)) // make the balance positive
const sarahNewBalance = Math.abs (parseFloat(sarahBalance))

const owed=((leoNewBalance +sarahNewBalance).toFixed(2))

const leo = `${leoName}  ${leoSurname.trim() } (Owed: R ${(leoNewBalance.toFixed(2))})\n`

const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahNewBalance.toFixed(2)})\n`;

const total = "   Total amount owed: " 
 const result =`${leo}${sarah}\n${divider}\n${total}R ${owed}\n${divider}`;

console.log(result)




