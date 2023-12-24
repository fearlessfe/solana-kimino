import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { Kamino } from '@hubbleprotocol/kamino-sdk';

const connection = new Connection(clusterApiUrl('devnet'));
const kamino = new Kamino('devnet', connection);

kamino.getCurrentPrice

// get all strategies supported by Kamino
const strategies = await kamino.getStrategies();

console.log(strategies)