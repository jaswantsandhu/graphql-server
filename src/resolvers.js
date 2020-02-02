const axios = require("axios");

module.exports = {
    Query: {

    },
    Mutation: {
        
    }
};


// resturant: async (_, { resturantID }, { dataSources, user, id }) => {

//     console.log(user, id);

//     const response = await axios(`https://jsonplaceholder.typicode.com/posts/${resturantID}`)
//     .then((response)=>{
//         return response.data;
//     });

//     return{
//         id : response.id,
//         name : response.title,
//         desc : response.body
//     }
// },