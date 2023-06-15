const addToDB = (id) =>{
    const basket = getDb();
    let localProduct = {};
    if(!basket){
        localProduct[id] = 1;
    }
    else{
        localProduct = JSON.parse(basket);
        if(localProduct[id]){
            const count = localProduct[id] + 1;
            localProduct[id] = count;
        }
        else{
            localProduct[id] = 1;
        }
    }
    change(localProduct)
}
const getDb = () => localStorage.getItem("basket");

const change = (cart)=> localStorage.setItem("basket", JSON.stringify(cart));

const storedProduct = () =>{
    const basket = getDb();
    return basket? JSON.parse(basket) : {};
}

const removeDB = (id) =>{
    const basket = getDb();
    if(!basket){
        
}
else{
    const localProduct = JSON.parse(basket)
        delete localProduct[id];
        change(localProduct)
    }
}


export { addToDB, removeDB, storedProduct };

