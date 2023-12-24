## 网络

依赖包： @solendprotocol/solend-sdk

目前有两个环境：'production', 'devnet'

每个环境下可以获取对应的market信息：'https://api.solend.fi/v1/markets/configs?scope=solend&deployment=devnet'

每个 market 有对应的名称，地址等，还有一系列的 reserves，每个reserve的格式如下
```
{
    liquidityToken: {
      mint: 'DxHj7TMuG5R9mXdy6UYj6G5K5GWkFPEGKjpc67mEo4Wz',
      symbol: 'RAY',
      name: 'Raydium',
      decimals: 6,
      coingeckoID: '',
      logo: '',
      volume24h: ''
    },
    pythOracle: '4WSN3XDSTfBX9A1YXGg8HJ7n2GtWMDNbtz1ab6aGGXfG',
    switchboardOracle: 'Lp3VNoRQi699VZe6u59TV8J38ELEUzxkaisoWsDuJgB',
    address: 'CRsHewGBRceCKVQNV9vF15HQVDTvqgqExtCfDQtRWGRi',
    collateralMintAddress: '6SspvG4AxDzThprZKpmdh95Wdj8baWLJhyrrRnP3wCxP',
    collateralSupplyAddress: 'iCs4vZd1Cz3ygybbyRf6VmQVhunNFeVwNt55bujmh69',
    liquidityAddress: 'DY93wrycxhZePZWgqq2oKnUQ8vqXTSPqJefreAjNkyr9',
    liquidityFeeReceiverAddress: 'FnaTEj5uBSdDntyb4ngevtgYGqwn5Fkh1FCdczqq8HVg'
  },
```