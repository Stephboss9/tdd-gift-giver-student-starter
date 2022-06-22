const Errors = require("../utils/errors")
const BadRequestError = Errors.BadRequestError

class GiftExchange {


   static pairs(names){
    let pairedNames = []
        if(!names){ throw new BadRequestError("number of names cannot be odd")
    }
    
        if (names.length % 2 != 0){
            throw new BadRequestError("number of names cannot be odd")
        } else {

            names = names.sort(() =>  Math.random() - 0.5)

            
    
            while(names.length){
               
                    let pair = names.splice(0, 2);
                    pairedNames.push(pair)
                
            }
            return pairedNames
        }
    }

    static traditional(names){
        if(!names){ throw new BadRequestError("number of names cannot be odd")
    }
        names = names.sort(() => Math.random() - 0.5)
        let gifting = []

        for(let index = 0; index < names.length; index++){
            if (index === names.length - 1){
                gifting.push(`${names[index]} is giving a gift to ${names[0]}`)
                console.log(names[index])
            }
            else {
                gifting.push(`${names[index]} is giving a gift to ${names[index+1]}`)
            }
        }
        return gifting
    }

}
module.exports = GiftExchange
