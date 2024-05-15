function Livro(titulo, autor, anoDePublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoDePublicacao = anoDePublicacao;
}

Livro.prototype.exibirInformacoes = function() {
    return `título: ${this.titulo}, autor: ${this.autor}, ano: ${this.anoDePublicacao}`;
};

let biblioteca = [];

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    adicionarLivro(titulo, autor, parseInt(ano));
    document.getElementById('bookForm').reset();
});

function adicionarLivro(titulo, autor, ano) {
    const novoLivro = new Livro(titulo, autor, ano);
    biblioteca.push(novoLivro);
}

function listarLivros() {
    const listaLivros = document.getElementById('listaLivros');
    listaLivros.innerHTML = '';
    biblioteca.forEach(livro => {
        const div = document.createElement('div');
        div.textContent = livro.exibirInformacoes();
        listaLivros.appendChild(div);
    });
}

// Inicializar a biblioteca com livros de Tolkien
window.onload = function() {
    adicionarLivro('o hobbit', 'j.r.r. tolkien', 1937);
    adicionarLivro('o senhor dos anéis: a sociedade do anel', 'j.r.r. tolkien', 1954);
    adicionarLivro('o senhor dos anéis: as duas torres', 'j.r.r. tolkien', 1954);
    adicionarLivro('o senhor dos anéis: o retorno do rei', 'j.r.r. tolkien', 1955);
    adicionarLivro('o silmarillion', 'j.r.r. tolkien', 1977);
    adicionarLivro('contos inacabados de númenor e da terra média', 'j.r.r. tolkien', 1980);
    adicionarLivro('os filhos de húrin', 'j.r.r. tolkien', 2007);
    adicionarLivro('beren e lúthien', 'j.r.r. tolkien', 2017);
    adicionarLivro('a queda de gondolin', 'j.r.r. tolkien', 2018);
    adicionarLivro('cartas de j.r.r. tolkien', 'j.r.r. tolkien', 1981);
    adicionarLivro('a lenda de sigurd e gudrún', 'j.r.r. tolkien', 2009);
};
