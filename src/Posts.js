const everyPost = [
    {image:"imagens/meowed.svg" , title: "meowed", imagepost: "imagens/gato-telefone.svg",
    likeimage: "imagens/respondeai.svg",liketitle:"respondeai" ,id:1}, 
    {image:"imagens/barked.svg" , title: "barked", imagepost: "imagens/adorable_animals.svg",
    likeimage: "imagens/adorable_animals.svg",liketitle:"adorable_animals", id:2}
    
]

function Post(props) {
    return ( 
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.image} />
                        {props.title}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img src={props.imagepost} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.likeimage} />
                        <div className="texto">
                            Curtido por <strong>{props.liketitle}</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default function Posts() {
    return (
        <div class="posts">
            {everyPost.map((url) => (<Post image={url.image} title={url.title} imagepost={url.imagepost} likeimage={url.likeimage} liketitle={url.liketitle}/>))}
        </div>
    )
}