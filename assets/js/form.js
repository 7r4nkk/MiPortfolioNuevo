const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this)
    const response = await fetch('this.action', {
        method: this.netlify,
        body: form,
        headers: {
            'Accept': 'application/json',
        }
    })
    if (response.ok) {
        this.reset
        alert('Thank you for your message!')
    }
}






