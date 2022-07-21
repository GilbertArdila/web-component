class products extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'});
    }

    static get observedAttributes(){
        return ['img','resume','price']
    }

    attributeChangedCallback(attribute,oldValue,newValue){
        if(attribute==='img'){
            this.img=newValue
        }
        if(attribute==='resume'){
            this.resume=newValue
        }
        if(attribute==='price'){
            this.price=newValue
        }
    }

    getTemplate(){
        const content=document.createElement("template");
        content.innerHTML=`
         <div>
           <img src=${this.img} alt=${this.resume}>
           <span>${this.resume}</span>
           <p>${this.price}</p>
         </div> 
           ${this.getStyles() }
        `
        return content;
    }
    getStyles(){
        return `
          <style>
          :host{
            --borde-color:#33b1ff;
            --main-text-color:hsl(215deg 14% 90%);
            --secondary-text-color:hsl(215deg 14% 80%);
          }
          div{
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:250px;
            height:300px
            paddin:5px;
            margin:10px auto
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
            color:var(--secondary-text-color);
            font-size:1.6 rem;
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
    connectedCallback(){
        this.shadowRoot.removeChild(this.getTemplate());
    }
}

customElements.define('platzi-products',products);

