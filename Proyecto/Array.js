const paginas = [
    {
        titulo: "Home",
        direccion: "index.html"
    },
    {
        titulo: "Login",
        direccion: "login.html"
    },
    {
        titulo: "Registro",
        direccion: "register.html"
    },
    {
        titulo: "Categoría 1",
        direccion: "category1.html"
    },
    {
        titulo: "Categoría 2",
        direccion: "category2.html"
    },
    {
        titulo: "Categoría 3",
        direccion: "category3.html"
    },
    {
        titulo: "Carrito de Compras",
        direccion: "Carrito.html"
    }
];

paginas.forEach(pagina => {
    console.log(`Título: ${pagina.titulo}, Dirección: ${pagina.direccion}`);
});