function Article(props) {
    return (
        <article>
            <h2>{props.titulo}</h2>

            <h3>{props.autor}</h3>

            <time dateTime={props.data}>{props.data}</time>

            <p>{props.conteudo}</p>

            <figure>
                <img
                    src="/image.png"
                    alt="Foto de um pedaço de bolo de cenoura com cobertura de chocolate"
                />

                <figcaption>
                    Foto do bolo de cenoura com cobertura de chocolate.
                </figcaption>
            </figure>
        </article>
    )
}

export default Article