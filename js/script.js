const api = 'https://js2-contact-form-api.netlify.app/api/contact';

function addHTML(response) {
  document.getElementById('form').style.display = 'none';
  const item = document.getElementById('answer');

  const title = document.createElement('h1');
  title.innerHTML = 'Your form has been submitted';

  const name = document.createElement('p');
  name.setAttribute('class', 'first');
  name.innerHTML = response.name;

  const mail = document.createElement('p');
  mail.setAttribute('class', 'received');
  mail.innerHTML = response.email;

  const telephone = document.createElement('p');
  telephone.setAttribute('class', 'received');
  telephone.innerHTML = response.phone;

  const subject = document.createElement('p');
  subject.setAttribute('class', 'received');
  subject.innerHTML = response.subject;

  const text = document.createElement('p');
  text.setAttribute('class', 'received');
  text.innerHTML = response.message;

  const thank = document.createElement('h5');
  thank.innerHTML = 'We will contact you soon, thank you.';

  item.appendChild(title);
  item.appendChild(name);
  item.appendChild(mail);
  item.appendChild(telephone);
  item.appendChild(subject);
  item.appendChild(text);
  item.appendChild(thank);
}

function attributes() {
  const nameSend = document.dataForm.name.value;
  const mailSend = document.dataForm.mail.value;
  let telephoneSend = document.dataForm.telephone.value;
  const subjectSend = document.dataForm.subject.value;
  const textSend = document.dataForm.text.value;

  if (!telephoneSend) {
    telephoneSend = 'No fue proporcionado';
  }

  const formSend = {
    name: nameSend,
    email: mailSend,
    phone: telephoneSend,
    subject: subjectSend,
    message: textSend,
  };

  fetch(api, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(formSend),
  }).then((res) => res.json())

    .then((response) => {
      addHTML(response);
    });
}

document.getElementById('btn-submit').addEventListener('click', attributes);
