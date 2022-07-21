import './components/components.js';
const container=document.querySelector(".show-products-body");

// axios.get('https://api.escuelajs.co/api/v1/products')
// .then(response=>response.data.map(product=>{
    
//     container.innerHTML+=`
//     <platzi-products price='Precio ${product.price}'  title='Producto: ${product.title}' img=${product.images[0]}  ></platzi-products >
//     `
    
// }));

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