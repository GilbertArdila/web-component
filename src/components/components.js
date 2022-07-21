class products extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'});
        this.img=this.getAttribute('img');
        this.price=this.getAttribute('price');
        this.titulo=this.getAttribute('titulo');

       
    }

  

    getTemplate(){
        const content=document.createElement("template");
        content.innerHTML=`
         <div>
           <img src=${this.img} alt=${this.titulo}>
           <span>${this.titulo}</span>
         
           <p>${this.price}</p>
         </div> 
           ${this.getStyles()}
        `
        return content;
    }
    getStyles(){
        return `
          <style>
          :host{
            --border-color:#33b1ff;
            --main-text-color:hsl(215deg 14% 90%);
            --secondary-text-color:hsl(215deg 14% 80%);
            --green-color:rgb(152, 202, 63);
          }
        
          div{
            display:flex;
            height:100%;
            flex-direction:column;
            justify-content:center;
            width:250px;
            paddin:5px;
            border:2px solid var(--border-color);
            
        }
        img{
            width:250px;
            height:200px
            
        }
        span{
            color:var(--main-text-color);
            font-size:2 rem;
        }
        p{
            width:50px;
            height:auto;
            color:var(--secondary-text-color);
            font-size:1.6 rem;
        }
        @media(min-width:1280px){
         
              img{
                width:180px;
                margin:32px auto;
               
                transform:rotate(18deg);
              }
              div{
                border:none;
              }
        }
          </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
    // disconnectedCallback(){
    //     console.log("Desconectado")
    // }
}

customElements.define('platzi-products',products);

