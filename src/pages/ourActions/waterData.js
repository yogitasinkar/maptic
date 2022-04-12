const getRandomInt = () => {
    return 22
}
const getRandomUsed = () => {
    let min = 150;
    let max = 500;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(num)
}
const getRandomReplenished = () => {
    let min = 150;
    let max = 500;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(num)
}

export const waterData = [
    { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt(),no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished()  },
    { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'AS', state: 'Assam', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'BR', state: 'Bihar', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'CT', state: 'Chhattisgarh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'GA', state: 'Goa', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'GJ', state: 'Gujarat', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'HR', state: 'Haryana', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'HP', state: 'Himachal Pradesh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'JH', state: 'Jharkhand', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'KA', state: 'Karnataka', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'KL', state: 'Kerala', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'MP', state: 'Madhya Pradesh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'MH', state: 'Maharashtra', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'MN', state: 'Manipur', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'ML', state: 'Meghalaya', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'MZ', state: 'Mizoram', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'NL', state: 'Nagaland', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'OD', state: 'Odisha', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'PB', state: 'Punjab', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'RJ', state: 'Rajasthan', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'SK', state: 'Sikkim', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'TN', state: 'Tamil Nadu', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'TS', state: 'Telangana', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'TR', state: 'Tripura', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'UK', state: 'Uttarakhand', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'UP', state: 'Uttar Pradesh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'WB', state: 'West Bengal', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'WB', state: 'West Bengal', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'AN', state: 'Andaman and Nicobar Islands', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'CH', state: 'Chandigarh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'DN', state: 'Dadra and Nagar Haveli', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'DD', state: 'Daman and Diu', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'DL', state: 'Delhi', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'JK', state: 'Jammu and Kashmir', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'LA', state: 'Ladakh', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'LD', state: 'Lakshadweep', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() },
    { id: 'PY', state: 'Puducherry', value: getRandomInt() , no_of_csr_projects_identified: getRandomUsed(), existing_projects: getRandomReplenished() }
]

export const getStateData = (currentState) => {
    var result = waterData.find(obj => {
        return obj.id === currentState
    })
    console.log(result)
    return [result]
}