import { Connection, Keypair, LAMPORTS_PER_SOL, Transaction } from "@solana/web3.js";
import { SolendAction, SolendMarket } from "@solendprotocol/solend-sdk";
import BN from 'bn.js';

// dev, main market address: GvjoVKNjBvQcFaSKUW1gTE7DxhSpjHbE69umVR5nPuQp
const connection = new Connection('https://api.devnet.solana.com', {
      commitment: "finalized",
    });

const depositAmount = new BN("1000")

const account = Keypair.generate();

const signature = await connection.requestAirdrop(account.publicKey, LAMPORTS_PER_SOL)
const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()
await connection.confirmTransaction({
    blockhash,
    lastValidBlockHeight,
    signature
})

const solendAction = await SolendAction.buildDepositTxns(
    connection,
    depositAmount,
    "SOL",
    account.publicKey,
    "devnet"
)


// ({ blockhash, lastValidBlockHeight }) = await connection.getLatestBlockhash()

const txHash = await solendAction.sendTransactions(async(txn, connection) => {
    
    txn.recentBlockhash = blockhash
    txn.feePayer = account.publicKey
    txn.sign(account)
    return connection.sendRawTransaction(txn.serialize())
})

await connection.confirmTransaction({
    blockhash,
    lastValidBlockHeight,
    signature
})

console.log(txHash)

const market = await SolendMarket.initialize(connection, 'devnet')

const obligation = await market.fetchObligationByWallet(account.publicKey)

console.log(obligation.deposits[0].account)