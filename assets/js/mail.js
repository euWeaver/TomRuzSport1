const fname = document.getElementById('fname');
const email = document.getElementById('email');
const text = document.getElementById('text');
const sub = document.getElementById('sub');
const submit = document.getElementsByClassName('contact-form')[0];


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("success")
    let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Subject: </b>${sub.value}
    <br>
    <b>Text: </b>${text.value}
    <br>
    `;



    Email.send({
        SecureToken : "9cfe091b-d991-489b-b989-f1718535d95d", //add your token here
        To : 'contact@tomruz.com', 
        From : "contact@tomruz.com",
        Subject : "email from tomruz.com ",
        Body : ebody
    }).then(
      message => location.reload(message)
      
    );
});