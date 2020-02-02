const axios = require('axios');

module.exports = {
  Query: {
    cloths: async (_, {}, {}) => {
      return await axios('http://localhost:3001/clothes').then(response => {
        return response.data;
      });
    },
    cloth: async (_, { id }, {}) => {
      return await axios(`http://localhost:3001/clothes/${id}`).then(
        response => {
          return response.data;
        }
      );
    }
  },
  Cloth: {
    matchingProducts: async (cloth, {}, {}) => {
      return await axios(
        `http://localhost:3001/clothes/${cloth.matchingProducts[0]}`
      ).then(response => {
        return [response.data];
      });
    }
  },
  User: {
    matchingProducts: async (_, {}, {}) => {
      return await axios('http://localhost:3001/clothes').then(response => {
        return response.data;
      });
    }
  },
  Mutation: {
    checkout: async (_, { cloths }, {}) => {
      return await Promise.all(
        cloths.map(cloth => {
          return axios({
            url: 'http://localhost:3001/cart/',
            method: 'POST',
            data: cloth
          });
        })
      ).then(() => {
        return true;
      });
    },
    addProduct: async (_, { name, size }, {}) => {
      console.log(name, size);
      return await axios({
        url: `http://localhost:3001/clothes/`,
        method: 'POST',
        data: {
          name,
          availableSize: [size]
        }
      }).then(response => {
        return response.data;
      });
    }
  }
};
