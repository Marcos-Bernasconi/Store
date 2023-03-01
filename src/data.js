import {create,insertBatch, search} from "@lyrasearch/lyra";

const productDB = await create({
    schema:{
title: "string",
short: "string"
    },
})


const data= [{

title:"MacBook Air with M1 chip",
short:"",
name:"",
description:"From $999 or $83.12/mo.",
image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548047",


},

{

title:"iPad Pro",
short:"",
name:"",
description:"From $999 or $83.12/mo.",
image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1664578794100",
    
    
},



{

    title:"iPhone 14 Pro",
    short:"",
    name:"",
    description:"From $999 or $83.12/mo.",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
        
        
},
{

title:"Apple Watch Ultra",
short:"",
name:"",
description:"From $999 or $83.12/mo.",
image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra-202209?wid=340&hei=264&fmt=png-alpha&.v=1674585946449",
    
    
},

{

    title:"MacBook Air with M2 chip",
    short:"",
    name:"",
    description:"From $999 or $83.12/mo.",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548178",
        
        
},



{

    title:"Mac Pro",
    short:"",
    name:"",
    description:"From $999 or $83.12/mo.",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-202108_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1625866834000",
        
        
},



{

    title:"MacBook Pro 13”",
    short:"",
    name:"",
    description:"From $999 or $83.12/mo.",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548178",
        
        
},




{

    title:"Apple Watch SE",
    short:"",
    name:"",
    description:"From $999 or $83.12/mo.",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202209_GEO_US_FMT_WHH?wid=508&hei=472&fmt=png-alpha&.v=1674585946405",
        
        
},

]

async function addProducts(){
    await insertBatch(productDB, data, { batchSize: 500 });
}

 async function searchProduct(text){
    const searchResult = await search(productDB,{
        term: text,
        properties: ["title"],
        limit: 5,
      
        
    }) 
    return searchResult;
}

export {addProducts,searchProduct} 