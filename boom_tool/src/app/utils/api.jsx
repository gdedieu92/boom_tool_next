import { faker } from '@faker-js/faker';


export const API_CLIENT = {
    fetchClients: async function(){
        //TODO when we had the api, instead of fake the response, will use that.
        // const response = await axios.get(baseUrl);
        
        
        const response = {status:true,data:[]};
        const numberOfClients = 35;
        
        for (let i = 0; i < numberOfClients; i++) {
            const client = {
                id: faker.number.int(),
                amount: faker.finance.amount(),
                status: faker.helpers.arrayElement(["failed", "successful", "pending"]),
                email: faker.internet.email(),
            };
            response.data.push(client);
        }
        return response;
    }
}