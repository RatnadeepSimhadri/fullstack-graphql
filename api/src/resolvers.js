/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_,{ input }, {models}) {
      console.log(models)
      let allpets = models.Pet.findMany()
      return allpets.filter(pet => pet.type === input.type);
    }
  },
  Pet: {
    img(pet,{input}, {models}) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {
    
  }
}
