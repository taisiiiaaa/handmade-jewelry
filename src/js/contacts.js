const contactsForm = document.querySelector('.contacts-form');

if (contactsForm) {
  contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactsForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    alert('Thank you for your message! We will contact you shortly.');

    contactsForm.reset();
  });
}
