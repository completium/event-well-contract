const { deploy, setEndpoint, getAccount, setQuiet, getContract } = require('@completium/completium-cli');
const fs = require('fs');

// contracts
let event_well;

const stage = 'mockup'
const prefix = ''

const getName = name => stage + '_' + prefix + '_' + name

const originator = 'tz1hmBJYyUyDNsbGkudBPAzTV5dSjBmhDWmJ';
const path = './contract/event_well.arl';
const id = 'event_well';
const metadata = 'ipfs://QmeujYaXRZtLPHo6bH17VnEFPmkKo9tLcurfNCA7fXvU7Q'

const env = {
  stages: {
    mockup: {
      quiet: true,
      endpoint: 'mockup',
    },
    hangzhounet: {
      quiet: false,
      endpoint: 'https://hangzhounet.api.tez.ie',
    },
    ithacanet: {
      quiet: false,
      endpoint: 'https://ithacanet.ecadinfra.com',
    },
    mainnet: {
      quiet: false,
      endpoint: 'https://mainnet.api.tez.ie',
    }
  }
}
const objstage = env.stages[stage]

setEndpoint(objstage.endpoint);
setQuiet(objstage.quiet);

describe("Deploy", async () => {
  it("Event Well", async () => {
    [event_well, _] = await deploy(path, {
      metadata_uri: metadata,
      named: getName(id),
      as: originator
    });
  });

});
