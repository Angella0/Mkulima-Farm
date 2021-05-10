class Mkulima{
    constructor(farms,grocery_vendor,product,orders){
        this.farms=[]
        this.grocery_vendor=[]
        this.products=[]
        this.orders=[]

    }


    addFarm(farmId, name, farmer, phone, address){
    var farmers={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phone:phone,
        address:address
    }
    this.farms.push(farmers);
    return this.farms
     
}

removeFarm(farmId){

    let newFarm= this.farms.find(newFarm=>newFarm.farmId==farmId)
    return delete this.farms[newFarm]
}

updateFarm(farmId,name,farmer,phoneNumber,address){

    let aFarm= this.farms.find(aFarm=>aFarm.farmId==farmId)
    aFarm={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phoneNumber:phoneNumber,
        address:address
    }
    return aFarm
}


getFarm(farmId){
    let tFarm= this.farms.find(tFarm=>tFarm.farmId==farmId)
    return tFarm
}


addProduct(productId, name, price){
    var r={
        productId:productId,
        name:name,
        price:price
    }
    this.products.push(r)
    return this.products
}


removeproductId(productId){
    let remove= this.products.find(remove=>remove.productId==productId)
    return delete this.products[remove]
}


updateProduct (productId, name, price){
    let update= this.products.find(update=>update.productId==productId)
     update={
        productId:productId,
        name:name,
        price:price
    }
    return update
}


getProduct(productId){
    let newProduct= this.products.find(newProduct=>newProduct.productId==productId)
    return newProduct
}

printProduct(){
    for( let items of this.products){
        console.log(items.name +"," + items.price)
    }
}
calculateOrderCost (productId, quantity){
    let cost = this.products.find(cost=>cost.productId==productId)
    return cost.price*quantity

}
}




let mkulima= new Mkulima([],[],[],[])

console.log(mkulima.addFarm("23455","M&M","Kevin","0752853816","Kiboga"))

console.log(mkulima.addFarm("76554","S&S","Kevo","07643721113","Kampala"))

console.log(mkulima.addFarm("09987","A&A","Karo","07588321115","Jinja"))

console.log(mkulima.removeFarm(23455))

console.log(mkulima.updateFarm("12345","P&P","Levis","0765432119","Lira"))

console.log(mkulima.getFarm(09987))

console.log(mkulima.addProduct(457,"Tomatoes",100))
console.log(mkulima.addProduct(243,"Mangoes",700))
console.log(mkulima.addProduct(234,"banana",500))

console.log(mkulima.removeproductId(234))

console.log(mkulima.updateProduct(4353,"cassava",600))

console.log(mkulima.getProduct(457))

mkulima.printProduct()


console.log(mkulima.calculateOrderCost(234,10))


 