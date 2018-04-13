const displayContacts = () => {
  const contactsList = document.querySelector('#contacts-list')
  contactsList.innerHTML = ''
  const ul = document.createElement('ul')
  const contacts = JSON.parse(localStorage.getItem('contacts'))
  contacts.forEach((contact) => {
    const li = document.createElement('li')
    li.innerHTML = `<span>${contact.name} | ${contact.phone}</span>`
    ul.appendChild(li)
  })
  contactsList.appendChild(ul)
}

document.addEventListener('DOMContentLoaded',() => {
  const addContactForm = document.querySelector('.new-contact-form')
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

    console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    displayContacts()

  })
})
