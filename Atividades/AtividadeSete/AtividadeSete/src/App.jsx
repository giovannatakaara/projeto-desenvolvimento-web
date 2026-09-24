import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const titulo = 'Receita de bolo de cenoura'
const autor = 'Giovanna'
const data = '15 de Setembro de 2026'

const conteudo = 'Ingredientes para Massa: 3 ovos, 275g de açúcar, 150ml de óleo, 200g de cenoura, 200g de farinha e 1 colher de sopa de fermento. Ingredientes para Cobertura: 1 leite condensado, 1 creme de leite, 1 colher de sopa de manteiga, achocolatado e 1 pitada de sal.'

function App() {
    return (
        <>
            <Header />
            <Navigation />

            <main>
                <Article
                    titulo={titulo}
                    autor={autor}
                    data={data}
                    conteudo={conteudo}
                />
            </main>

            <Sidebar />
            <Footer />
        </>
    )
}

export default App