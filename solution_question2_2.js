const fetch = require("cross-fetch");

let userInfo = {}
let updatedWalletInfo = {}

async function fetchData(url,payload,method='POST'){
    const headers =  {
        "Content-Type": "application/json"
    };
    try {
        const res = await fetch(url, {method,body: payload,headers})
        const response = await res.json()
        return response;
    } catch (error) {
        console.log('error',error)
    }
}


async function loginUser(username,password) {
    const payload = JSON.stringify({username,password})
    const userData = await fetchData('https://api.okra.ng/v2/mock-api/login',payload)

    if(userData.status === 'success'){
        const {name,id,wallet} = userData.data.profile;
        return {
            name,
            id,
            wallet_amount:  wallet.amount.toString()
        }
    }else{
        return userData
    }
}

async function refreshUserWallet(wallet_id,variable='variable') {
    const payload = JSON.stringify({id:wallet_id,variable})
    const balanceRes = await fetchData('https://api.okra.ng/v2/mock-api/refresh-wallet',payload)
    
    if(balanceRes.status === 'success'){
        return balanceRes.data.wallet
    }else{
        return balanceRes.message
    }
}

async function logOutUser(){
    const res = await fetchData('https://api.okra.ng/v2/mock-api/logout',null,'GET')
    return res.message
}

(async function(){
    let userData = await loginUser('okra_user','okra_pass')
    if(userData.id){
        updatedWalletInfo = await refreshUserWallet(userData.id)
    }
    let logout_message = await logOutUser()
    userInfo = userData;
    const response = {userInfo,updatedWalletInfo,logout_message}
    console.log(response)
    return response;
})();