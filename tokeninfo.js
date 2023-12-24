import sdk from "@solflare-wallet/utl-sdk";
import { Connection, PublicKey } from "@solana/web3.js";

const { Client } = sdk

const mints = [
    '6hiEcA2aTgudqdP2DzEYpk5d4knFS8dv9RdotbxaErgQ',
    'BS4TfsqZtH9FEGL3LmyFn56PXj8AzLKEga3zvpCTGRat',
    'ECReE2Qo48af56BwUkx876eNP2M54NYp8HFLugTPrVWo',
    'Cj1qY2iPJNqJ1RJtMWZHya5jM53skKRVixPpvtthekPF',
    'So11111111111111111111111111111111111111112',
    'Bp2nLuamFZndE7gztA1iPsNVhdJeg9xfKdq7KmvjpGoP',
    'DdpesN97RCHtLmdQtvv1MwuubkY2thuCUJAZ5W1AgZWt',
    '6AHfYCDN9yVUjEf9hP9YwWfCR5UjdSRTHZEGezs8hJeL',
    'GLnwzTMdvETds6JrLoAVxTCZGaLNtJufp1QZ5HAiLb5q',
    'zVzi5VAf4qMEwzv7NXECVx5v2pQ7xnqVVjCXZwS9XzA',
    'DxHj7TMuG5R9mXdy6UYj6G5K5GWkFPEGKjpc67mEo4Wz',
    'B9FyrxFK8zFugDbrcyduwbVw2PTUN5ckUHZCTf3ogjn'
  ]

const connection = new Connection('https://api.devnet.solana.com', {
      commitment: "finalized",
    });

    const defaultConfig = new Client();
    const utl = new Client({
      ...defaultConfig.config,
      connection,
    });
  
    const tokens = await utl.fetchMints(
      mints.map((mint) => new PublicKey(mint))
    );


    const info = Object.fromEntries(
        tokens
          .map((token) =>
            token
              ? [
                  token.address,
                  {
                    symbol: token.symbol,
                    logoUri: token.logoURI,
                    decimals: token.decimals ?? 0,
                  },
                ]
              : []
          )
          .filter((x) => x.length)
      );

      console.log(info)