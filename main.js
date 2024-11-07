/**
 * Stores the information of each person in an array of objects
 */
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

/**
 * Renders the table structure with headers and tbody, appending it to the document body
 */
CreateHTMLElement("table", "persontable", document.body)
CreateHTMLElementWithParentID("thead", "personthead", "persontable")
CreateHTMLElementWithParentID("tr", "persontr", "personthead")
RenderTableHeader("persontr")
CreateHTMLElementWithParentID("tbody", "persontbody", "persontable")

RenderTable(array)

/**
 * Handles form submission, validates inputs, and adds a new person to the array if valid
 */
const form = document.getElementById("form")
form.addEventListener('submit', function (e) {
    e.preventDefault() // Prevents default form submission
    
    const tableBody = document.getElementById("persontbody");
    tableBody.innerHTML = ''  // Clears current table content
    
    // Get input values from form fields
    const lastname = document.getElementById('lastname')
    const firstname1 = document.getElementById('firstname1')
    const firstname2 = document.getElementById('firstname2')
    const married = document.getElementById('married')
    const pet = document.getElementById('pet')

    // Extract values from fields
    const lastnameValue = lastname.value
    const firstname1Value = firstname1.value
    let firstname2Value = firstname2.value
    const marriedValue = married.checked
    const petValue = pet.value

    // Validate fields and add new entry to array if all fields are valid
    if (validatefields(lastname, firstname1, pet)) {
        array.push({
            lastname: lastnameValue,
            firstname1: firstname1Value,
            firstname2: firstname2Value || undefined,
            married: marriedValue,
            pet: petValue,
        })
    }

    RenderTable(array) // Rerender table to include the new entry
    console.log(array) // Log updated array to console
    form.reset() // Reset form fields
})

/**
 * Validates required fields: last name, first name, and pet fields.
 * Displays an error message if a field is empty
 * @param {*} lastnamevali
 * @param {*} firstname1vali
 * @param {*} petvali
 */
function validatefields(lastnamevali, firstname1vali, petvali) {
    const errormessages = form.querySelectorAll('.error')
    errormessages.forEach(error => error.innerHTML = '') // Clear previous errors

    let result = true
    // Check last name field
    if (lastnamevali.value === '') {
        let error = lastnamevali.parentElement.querySelector('.error')
        error.innerHTML = 'Vezetéknév kötelező!'
        result = false
    }
    // Check first name field
    if (firstname1vali.value === '') {
        let error = firstname1vali.parentElement.querySelector('.error')
        error.innerHTML = 'Keresztnév kötelező!'
        result = false
    }
    // Check pet field
    if (petvali.value === '') {
        let error = petvali.parentElement.querySelector('.error')
        error.innerHTML = 'Háziállat kötelező!'
        result = false
    }

    return result
}

// Initializes the main table element in the document body
CreateHTMLElement('table', 'persontable', document.body)

