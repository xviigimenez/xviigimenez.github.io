console.log("Running!")

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="flex content-center items-center justify-between p-4">
            <div>
                <h1 class="text-4xl underline">gimas</h1>
                <h1 class="text-xl">em busca de mais um emprego</h1>
            </div>
            <nav>
                <ul class="flex content-center gap-2">
                    <a href="contato.html"><li class="text-xl hover:font-bold">Contato</li></a>
                    <a href="descrição.html"><li class="text-xl hover:font-bold">Descrição</li></a>
                    <a href="projetos.html"><li class="text-xl hover:font-bold">Projetos</li></a>
                </ul>
            </nav>
            </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer
            <a id="dark-mode-toggle" href="#">
            Dark Mode
            </a>
        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)