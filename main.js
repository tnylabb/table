const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

const table = document.createElement("table")
const tableHeader = document.createElement("thead")
const tableHeaderRow = document.createElement("tr")
const tableHeaderRowLastName = document.createElement("th")
const tableHeaderRowFirstName = document.createElement("th")

const tableBody = document.createElement("tbody")

tableHeaderRowLastName.innerHTML = "Vezetéknév"
tableHeaderRowFirstName.innerHTML = "Keresztnév"
tableHeaderRowFirstName.colSpan = 2

for(const person of array){

    const tr = document.createElement("tr")

    tr.addEventListener('click', function(e){
        const selectedRow = tableBody.querySelector('.selected')
        if (selectedRow != undefined)
        {
            selectedRow.classList.remove('selected')
        }
        console.log('click')
        e.currentTarget.classList.add('selected')
        
    })
    
    tableBody.appendChild(tr)
    const td = document.createElement("td")
    tr.appendChild(td)
    td.innerHTML = person.lastname

    const firstname1 = document.createElement("td")
    firstname1.innerHTML = person.firstname1
    tr.appendChild(firstname1)

    if(person.firstname2 === undefined){
        firstname1.colSpan = 2 
    }
    else {
        const firstname2  = document.createElement("td")
        firstname2.innerHTML = person.firstname2
        tr.appendChild(firstname2)
    }
}

document.body.appendChild(table)
table.appendChild(tableHeader)
tableHeader.appendChild(tableHeaderRow)
tableHeaderRow.appendChild(tableHeaderRowLastName)
tableHeaderRow.appendChild(tableHeaderRowFirstName)
table.appendChild(tableBody)

