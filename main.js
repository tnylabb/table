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



const form = document.getElementById("form")
form.addEventListener('submit', function(e){
    tableBody.innerHTML=''
        e.preventDefault()
        const lastname = document.getElementById('lastname')
        const firstname1 = document.getElementById('firstname1')
        const firstname2 = document.getElementById('firstname2')
        const married = document.getElementById('married')
        const pet = document.getElementById('pet')

        const lastnameValue = lastname.value;
        const firstname1Value = firstname1.value;
        let firstname2Value = firstname2.value;
        const marriedValue = married.checked;
        const petValue = pet.value;

        if(ValidateFields(lastname, firstname1, pet)){
            array.push({
                lastname: lastnameValue,
                firstname1: firstname1Value,
                firstname2: firstname2Value,
                married: marriedChecked,
                pet: petValue,
            })
        }

        if(firstname2Value === '')
            {
                firstname2Value = undefined
            }
        RenderTable();
        console.log(array)
})

RenderTable();

document.body.appendChild(table)
table.appendChild(tableHeader)
tableHeader.appendChild(tableHeaderRow)
tableHeaderRow.appendChild(tableHeaderRowLastName)
tableHeaderRow.appendChild(tableHeaderRowFirstName)
tableHeaderRow.appendChild(tableHeaderRowPet)
tableHeaderRow.appendChild(tableHeaderRowMarried)
table.appendChild(tableBody)

function RenderTable(){
    for(const person of array){
        person.lastname
        const tr = document.createElement("tr")
    
        tr.addEventListener('click', function(e){
            console.log('click') 
            const selectedrow = tableBody.querySelector('.selected')
            if(selectedrow != undefined)
            {
                selectedrow.classList.remove('selected')
            }
            e.currentTarget.classList.add('selected')
        })
    
        tr.innerHTML = person.lastname
        tableBody.appendChild(tr)
    
        const td = document.createElement("td")
        td.innerHTML = person.firstname1
        tr.appendChild(td)
    
        
        if(person.firstname2 === undefined)
        {
            td.colSpan = 2
        }
    
        else
        {
            const td2 = document.createElement("td")
            td2.innerHTML = person.firstname2
            tr.appendChild(td2)
        }
    
        
        const td3 = document.createElement("td")
        td3.innerHTML = person.married
    
    
        if(td3.innerHTML == "false")
        {
            td3.innerHTML = "Nem"
            tr.appendChild(td3)
        }
        else
        {
            td3.innerHTML = "Igen"
            tr.appendChild(td3)
        }
    
        
        const td4 = document.createElement("td")
        td4.innerHTML = person.pet
        tr.appendChild(td4)   
    }    
}

function validatefields(lastnamevali, firstname1vali, petvali){
    const errormessages = form.querySelectorAll('.error')
    for(const error of errormessages)
    {
        error.innerHTML = ''
    }
    let result = true
    if(lastnamevali.value === '')
    {
        let error = lastnamevali.parentElement.querySelector('.error')
        error.innerHTML = 'Vezetéknév kötelező!'
        result = false
    }
    else if(firstname1vali.value === '')
    {
        let error = firstname1vali.parentElement.querySelector('.error')
        error.innerHTML = 'Keresztnév kötelező!'
        result = false
    }
    else if(petvali.value === '')
    {
        let error = petvali.parentElement.querySelector('.error')
        error.innerHTML = 'Állat kötelező!'
        result = false
    }
    return result
} 
