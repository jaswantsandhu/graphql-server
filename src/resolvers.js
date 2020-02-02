const axios = require("axios");

module.exports = {
    Query: {
        cloths : async (_, {  }, {  }) => {
            return await axios("http://localhost:3000/clothes").then((response)=>{
                return response.data;
            });
        },
        cloth : async (_, { id }, {  }) => {
            return await axios(`http://localhost:3000/clothes/${id}`).then((response)=>{
                return response.data;
            });
        },
    },
    Cloth : {
        matchingProducts : async (cloth, {  }, {  }) => {

            return await axios(`http://localhost:3000/clothes/${cloth.matchingProducts[0]}`).then((response)=>{
                return [response.data];
            });
        },
    },
    User : {
        matchingProducts : async (_, {  }, {  }) => {
            return await axios("http://localhost:3000/clothes").then((response)=>{
                return response.data;
            });
        },
    },
    Mutation: {
        
    }
};


