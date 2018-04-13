const displayContacts = () => {
  toggleForm()
  const contactsList = document.querySelector('#contacts-list')
  contactsList.innerHTML = ''
  const ul = document.createElement('ul')
  const contacts = JSON.parse(localStorage.getItem('contacts'))
  if (contacts) {
    contacts.forEach((contact) => {
      const li = document.createElement('li')
      li.innerHTML = `<span>${contact.name} | ${contact.phone}</span>`
      ul.appendChild(li)
    })
    contactsList.appendChild(ul)
  } else {
    contactsList.innerHTML =  '<p>You have no contacts in your address book</p>'
  }
}

const toggleForm = () => {
  const addContactForm = document.querySelector('.new-contact-form')
  const addButton = document.querySelector('.add-contact')
  const formStyle = addContactForm.style
  if (formStyle.display == 'none') {
    addButton.innerHTML = 'Cancel'
    formStyle.display = 'block'
  } else {
    formStyle.display = 'none'
    addButton.innerHTML = 'Add Contact'
  }
}

document.addEventListener('DOMContentLoaded',() => {
  displayContacts()
  const addButton = document.querySelector('.add-contact')
  const addContactForm = document.querySelector('.new-contact-form')

  addButton.addEventListener('click', toggleForm)

  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const localStorage = window.localStorage
    const{
      name,
      email,
      phone,
      company,
      notes,
      twitter
    } = addContactForm.elements

    const contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value
    }

    addContactForm.reset()
    console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    displayContacts()

  })
})
