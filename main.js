let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
const tableBody = document.createElement("tbody")

const table = document.createElement("table")
const tableHeader = document.createElement("thead")
const tableHeaderRow = document.createElement("tr")

const tableHeaderRowLastName = document.createElement("th")
const tableHeaderRowFirstName = document.createElement("th")
const tableHeaderRowPet = document.createElement("th")
const tableHeaderRowMarried = document.createElement("th")


tableHeaderRowLastName.innerHTML = "Vezetéknév"
tableHeaderRowFirstName.innerHTML = "Keresztnév"
tableHeaderRowPet.innerHTML = "Pet"
tableHeaderRowMarried.innerHTML = "Married"
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
    const tdPet = document.createElement("td")
        tdPet.innerHTML = person.pet
        tr.appendChild(tdPet)
    
    const tdMarried = document.createElement("td")
        tdMarried.innerHTML = person.married ? 'Yes' : 'No'
        tr.appendChild(tdMarried)
}

document.body.appendChild(table)
table.appendChild(tableHeader)
tableHeader.appendChild(tableHeaderRow)
tableHeaderRow.appendChild(tableHeaderRowLastName)
tableHeaderRow.appendChild(tableHeaderRowFirstName)
tableHeaderRow.appendChild(tableHeaderRowPet)
tableHeaderRow.appendChild(tableHeaderRowMarried)
table.appendChild(tableBody)

