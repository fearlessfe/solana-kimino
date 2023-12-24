import got from 'got';

// ['production', 'devnet']
const marketUrl = 'https://api.solend.fi/v1/markets/configs?scope=solend&deployment=devnet'

const resp = await got(marketUrl);

const markets = JSON.parse(resp.body)

for (let i = 0; i < markets.length; i++) {
    console.log(markets[i].reserves)
    // console.log(markets[i].name + ' ' + markets[i].address)
}

const titleCase = (name) => {
    return name.charAt(0).toUpperCase().concat(name.slice(1));
  };

// format to pool
// pool address 就是 market address

const pools = markets.map(c => ({
    name: titleCase(c.name),
        owner: c.owner,
        address: c.address,
        authorityAddress: c.authorityAddress,
        reserves: c.reserves.map((r) => ({
          name: r.liquidityToken.name,
          logo: r.liquidityToken.logo,
          mintAddress: r.liquidityToken.mint,
          address: r.address,
        })),
}))

console.log(pools[0].reserves)
console.log(pools[1].reserves)

const assets1 = pools[0].reserves.map(r => r.mintAddress)
console.log(assets1.filter((item, pos) => assets1.indexOf(item) === pos))


const assets2 = pools[1].reserves.map(r => r.mintAddress)
console.log(assets2.filter((item, pos) => assets2.indexOf(item) === pos))