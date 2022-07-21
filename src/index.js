import './components/components.js';
const container=document.querySelector(".show-products-body");



const getData=async()=>{
    
     try{ 
      
       const response=await axios.get('https://api.escuelajs.co/api/v1/products')
       container.innerHTML=""
       let src;
        response.data.map(product=>{
            
            src=product.images[0]
            
       
         container.innerHTML+=`
        <platzi-products price='Precio ${product.price}'  titulo='Producto: ${product.title}' img=${src}  ></platzi-products >
        `
       
       
        
    });
       
       
     }catch(error){console.log(error)}

    
   
    
}

window.onload=()=>getData();