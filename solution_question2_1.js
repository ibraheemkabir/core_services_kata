const fetch = require("cross-fetch");
//company ID: 484929849
//customer ID: 573839293

async function fetchData(url,payload){
    const headers =  {
        "Content-Type": "application/json"
    };
    try {
        const res = await fetch(url, {method: 'POST',body: payload,headers})
        const response = await res.json()
        return response;
    } catch (error) {
        console.log('error',error)
    }
}

async function getWalletBalance(id) {
    const payload = JSON.stringify({id})
    const balanceRes = await fetchData('https://api.okra.ng/v2/mock-api/fetch-wallet',payload)
    if(balanceRes.status === 'success'){
        return balanceRes.data.wallet
    }else{
        return balanceRes
    }
}

async function payUserWallet(from_id,to_id,amount) {
    const payload = JSON.stringify({from_id,to_id,amount})
    try {
        const balanceRes = await fetchData('https://api.okra.ng/v2/mock-api/pay',payload)
        if(balanceRes.status === 'success' ){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log('error',error)
    }
    
}

async function refundCustomer(company, user, amount) {
    try {
        const previousBalance =  await getWalletBalance(user)
        const refunded = payUserWallet(company,user,amount)
        const newBalance = await getWalletBalance(user)
        return {
            status: refunded ? 'success' : 'failed',
            previousBalance,
            newBalance
        }
    } catch (error) {
        console.log('error',error)
    }
    
}
  
(async function(){
    let data = await refundCustomer('484929849', '573839293', 2003.0)
    console.log(data)
    return data
})();

