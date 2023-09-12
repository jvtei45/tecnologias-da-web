function fieldValidated() {
    const fields = [
        {
            id: 'name',
            errorId: 'name-error',
            errorMessage: 'O campo Nome é obrigatório.',
        },
        {
            id: 'email',
            errorId: 'email-error',
            errorMessage: 'O campo Email é obrigatório.',
        },
        {
            id: 'message',
            errorId: 'message-error',
            errorMessage: 'O campo Mensagem é obrigatório.',
        },
    ];

    let isValid = true;

    fields.forEach((field) => {
        const value = document.getElementById(field.id).value.trim();
        const errorElement = document.getElementById(field.errorId);

        if (value === '') {
            isValid = false;
            errorElement.textContent = field.errorMessage;
        } else {
            errorElement.textContent = '';
        }
    });

    if (isValid) {
        alert('Mensagem enviada com sucesso!');
    }

    return isValid;
}
