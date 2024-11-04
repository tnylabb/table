/**
* Creates a new cell, adds innerHTML, appends to parent
* @param {'td' | 'th'} tagName
* @param {string} innerHTML
* @param {HTMLTableRowElement} parent
* @returns {HTMLTableCellElement}
*/
function createTableCell(tagName, innerHTML, parent){
    const cell = document.createElement(tagName);
    cell.innerHTML = innerHTML;
    parent.appendChild(cell)

    return cell
}

/**
 * Creates a new element, adds an id, appends to parent
 * @param {*} tag 
 * @param {string} id 
 * @param {*} parent 
 */
function CreateHTMLElement(tag, id, parent)
{   
    const elem  = document.createElement(tag)
    elem.id = id;
    parent.appendChild(elem)
}   

/**
 * Creates a new element (par) from parentid
 * @param {*} tag 
 * @param {*} id 
 * @param {*} parentid 
 */
function CreateHTMLElementWithParentID(tag, id, parentid)
{   
    const par = document.getElementById(parentid)
    if (par != undefined)
        {
            CreateHTMLElement(tag, id, par)
        }   

}

/**
 * Creates the Table Header
 */
function RenderTableHeader(persontr){
    const parent = document.getElementById(persontr)
    createTableCell('th' , 'Vezetéknév', parent)
    const kereszt = createTableCell('th' , 'Keresztnév', parent)
    kereszt.colSpan = 2
    createTableCell('th' , 'Házas', parent)
    createTableCell('th' , 'Állat', parent)
}

/**
 * Creates the table 
 */
function RenderTable(personarray) {
    const tableBody = document.getElementById("persontbody")
    tableBody.innerHTML = ''
    
    for (const person of personarray) {
        const tr = document.createElement("tr")

        tr.addEventListener('click', function (e) {
            const selectedrow = tableBody.querySelector('.selected')
            if (selectedrow) {
                selectedrow.classList.remove('selected')
            }
            e.currentTarget.classList.add('selected')
        })

        const tdLastName = document.createElement("td")
        tdLastName.innerHTML = person.lastname
        tr.appendChild(tdLastName)

        const tdFirstName1 = document.createElement("td")
        tdFirstName1.innerHTML = person.firstname1
        tr.appendChild(tdFirstName1)

        if (person.firstname2) {
            const tdFirstName2 = document.createElement("td")
            tdFirstName2.innerHTML = person.firstname2
            tr.appendChild(tdFirstName2)
        } else {
            tdFirstName1.colSpan = 2
        }

        const tdMarried = document.createElement("td")
        tdMarried.innerHTML = person.married ? "Igen" : "Nem"
        tr.appendChild(tdMarried)

        const tdPet = document.createElement("td")
        tdPet.innerHTML = person.pet
        tr.appendChild(tdPet)

        tableBody.appendChild(tr)
    }
}
