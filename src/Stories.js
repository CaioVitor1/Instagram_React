/*function RenderStories(props) {
    const storiesImg = ["imagens/9gag.svg","imagens/meowed.svg", 
        "imagens/barked.svg", "imagens/nathanwpylestrangeplanet.svg", "imagens/wawawicomics.svg",
        "imagens/respondeai.svg","imagens/filomoderna.svg", "imagens/memeriagourmet.svg"];
    const storiestitle = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics",
        "respondeai","filomoderna", "memeriagourmet" ];
    return (

        <div className="stories">
            <div className="story">
              <div className="imagem"></div>
              {storiesImg.map(img => <img src={img} />)}
              <div className="usuario"></div>
              {storiestitle.map(title => {title})}
              </div>
            </div>
    )      
}
*/

export default function Stories() {
    return (
    <div className="stories">
            

            <div className="story">
              <div className="imagem">
                <img src="imagens/meowed.svg" />
              </div>
              <div className="usuario">
                meowed
              </div>
            </div>

            <div className="story">
              <div className="imagem">
                <img src="imagens/barked.svg" />
              </div>
              <div className="usuario">
                barked
              </div>
            </div>

            <div className="story">
              <div className="imagem">
                <img src="imagens/nathanwpylestrangeplanet.svg" />
              </div>
              <div className="usuario">
                nathanwpylestrangeplanet
              </div>
            </div>

            <div className="story">
              <div className="imagem">
                <img src="imagens/wawawicomics.svg" />
              </div>
              <div className="usuario">
                wawawicomics
              </div>
            </div>
            
            <div className="story">
              <div className="imagem">
                <img src="imagens/respondeai.svg" />
              </div>
              <div className="usuario">
                respondeai
              </div>
            </div>

            <div className="story">
              <div className="imagem">
                <img src="imagens/filomoderna.svg" />
              </div>
              <div className="usuario">
                filomoderna
              </div>
            </div>

            <div className="story">
              <div className="imagem">
                <img src="imagens/memeriagourmet.svg" />
              </div>
              <div className="usuario">
                memeriagourmet
              </div>
            </div>

            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}