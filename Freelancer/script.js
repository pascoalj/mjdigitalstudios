// Inicializa o EmailJS com sua public key
emailjs.init('5JB2ZMdQYi69HmEcb');

// Scroll suave para navegação entre seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação simples do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se os campos não estão vazios
    if (!nome || !email || !mensagem) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    // Cria o objeto com os dados do formulário
    const formData = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Envia os dados via EmailJS
    emailjs.send('service_gpp5z3h', 'template_ahee0vf', formData)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('form-contato').reset(); // Limpa o formulário
        }, function(error) {
            alert('Erro ao enviar a mensagem. Tente novamente!');
            console.error('Erro:', error);
        });
});
