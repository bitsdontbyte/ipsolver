importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/clearcut_modules/@clearcut/forms/layout-manager/images/preload.gif",
    "revision": "e5ea4e58e333b1bf96a154f15e4fa29e"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/forms/layout-manager/images/tabopts_hover.png",
    "revision": "6333004ac1eb465e134644a651f7e89f"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/forms/layout-manager/images/tabopts.png",
    "revision": "ee42b25bc7b6741bcb611017151fb885"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_checked_half.png",
    "revision": "ff9dc0622e527282cc12831bdfbe143c"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_checked.png",
    "revision": "b95a20d64b71ac873bbefc907e821ee5"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_closed_chh.png",
    "revision": "c529c3b3cf65f169986b96f264472568"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_closed_cho.png",
    "revision": "60167246ed04e86ff58024db1a183685"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_closed_chx.png",
    "revision": "987f3ea8394386dd0a99de67739e210e"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_closed.png",
    "revision": "b27ab0f719dc880ca1832901520a1f63"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_empty.png",
    "revision": "84664eeaa883480d4bd779fc37d5b209"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_loading.png",
    "revision": "d12dedf35f9e9e033a4a37fe1ad60970"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_opened_chh.png",
    "revision": "26c1e6ffc42027c1918235e3d538734d"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_opened_cho.png",
    "revision": "3ec4243d700bfb79d2d6677b28fbdf8e"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_opened_chx.png",
    "revision": "569a9e33c9631452cc6bf8f722ff64fd"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_opened.png",
    "revision": "aa4d1a142db764eba744389bba83b06f"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/icon_option.png",
    "revision": "8a3d5f74ae7659d58da083b54837aae1"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/utl_highlight_down.png",
    "revision": "86a2a9b1138794e1aad801afe09f50f6"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/utl_highlight_left.png",
    "revision": "01c54f09ec9b3f482395c5aa955938e8"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/utl_highlight_right.png",
    "revision": "d20788b7c851a9689a936e2423cb1383"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/old/utlist/images/utl_highlight_up.png",
    "revision": "e59dd5d02e7459eb3be86c31684c896a"
  },
  {
    "url": "assets/clearcut_modules/@clearcut/styles/material-icons.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/src/images/logo.png",
    "revision": "6114e3ee14f5381b2ec3d2cb646e9abd"
  },
  {
    "url": "config.json",
    "revision": "19c24c7915940b7a6300e45e1f64ceb4"
  },
  {
    "url": "data/Deterministic Problems/Dynamic Lot Sizing/description.html",
    "revision": "7eaf561f20a3933a177d9ce6dcdcfd5b"
  },
  {
    "url": "data/Deterministic Problems/Dynamic Lot Sizing/inputs.csv",
    "revision": "d8ccf0c69851b0f67e7aeeb7b29be831"
  },
  {
    "url": "data/Deterministic Problems/Dynamic Lot Sizing/outputs.csv",
    "revision": "dfb0198b915990ea541ad29b3be22841"
  },
  {
    "url": "data/Deterministic Problems/Economic Lot Scheduling/description.html",
    "revision": "6f20e6bcbd0ce4431583fc3814b87e46"
  },
  {
    "url": "data/Deterministic Problems/Economic Lot Scheduling/inputs.csv",
    "revision": "8faeffc8a0814120e877d80efa6a191f"
  },
  {
    "url": "data/Deterministic Problems/Economic Lot Scheduling/outputs.csv",
    "revision": "a091967841a2411a5c38f3b11787ef0f"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ for Deteriorating Items/description.html",
    "revision": "1dabcbaffb4673369e830ffb67dd1537"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ for Deteriorating Items/inputs.csv",
    "revision": "745fd06d049f5b553fd35e8c536384f1"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ for Deteriorating Items/outputs.csv",
    "revision": "710069c7db6fdcf807637ab44c14f97d"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ with Discounted Costs/description.html",
    "revision": "68a0bf9ce902a22f0b9b80ab51a5634d"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ with Discounted Costs/inputs.csv",
    "revision": "365583985cbe4fe931942b6066060256"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ with Discounted Costs/outputs.csv",
    "revision": "40b2ef4d06d7cee81270f12a6b0a4814"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ with Random Supplier Capacity/description.html",
    "revision": "a71cb3ab3847cb266f860ab45583a81a"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ with Random Supplier Capacity/inputs.csv",
    "revision": "6f69550a350b8f05b0b0ea55310f6648"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EOQ with Random Supplier Capacity/outputs.csv",
    "revision": "51e68b607a9f8346347e7ebea27c9609"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EPQ with Imperfect Processes/description.html",
    "revision": "47c018a9073db5967ab56ee509132e6d"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EPQ with Imperfect Processes/inputs.csv",
    "revision": "9448cfb2f0366daae530279148e0b1f8"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EPQ with Imperfect Processes/outputs.csv",
    "revision": "a07f3a84046d440861bed0365805e4ec"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EPQ with Machine Breakdowns/description.html",
    "revision": "1999eebd74fa0c906052e80efc29d0ef"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EPQ with Machine Breakdowns/inputs.csv",
    "revision": "004a63f78cd6c2b1ec0340647e783ad3"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/EPQ with Machine Breakdowns/outputs.csv",
    "revision": "2c8b199a1a74979af9c811f10517c3c6"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Implied Shortage Costs/description.html",
    "revision": "b63bf72401ad8910b5c0037010207b4d"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Implied Shortage Costs/inputs.csv",
    "revision": "6712de5f4226cabc5ea9afe43e14f5a1"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Implied Shortage Costs/outputs.csv",
    "revision": "814319ebd3fc5366de45991aa2ccb2ed"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Powers-of-two reorder interval/description.html",
    "revision": "c0942eeb29656092e5536d385d3b4b16"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Powers-of-two reorder interval/inputs.csv",
    "revision": "7111849107c544b9eecdf6ca1fa4c23c"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Powers-of-two reorder interval/outputs.csv",
    "revision": "1bec6af1ae4b0f3ca92af5fe535350a6"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Static Lot Sizing Problem with two warehouses/description.html",
    "revision": "908ee5131e6db044804be9f0f056a16e"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Static Lot Sizing Problem with two warehouses/inputs.csv",
    "revision": "0fc5608a51755b69bc51d74bbaad606b"
  },
  {
    "url": "data/Deterministic Problems/Extended Static Lot Sizing/Static Lot Sizing Problem with two warehouses/outputs.csv",
    "revision": "34e8760950d006173437c4a220c7c197"
  },
  {
    "url": "data/Deterministic Problems/Joint Replenishment/description.html",
    "revision": "0e6b4f4c32900bc39f837e0fa756de03"
  },
  {
    "url": "data/Deterministic Problems/Joint Replenishment/inputs.csv",
    "revision": "0aa10226fd8808b4af07ae0331895edc"
  },
  {
    "url": "data/Deterministic Problems/Joint Replenishment/outputs.csv",
    "revision": "86d16fc3b808296cc288c2e6f9c56ef3"
  },
  {
    "url": "data/Deterministic Problems/Quantity Discount/description.html",
    "revision": "35d63517a63953718f9b3d8ad3cbd8d8"
  },
  {
    "url": "data/Deterministic Problems/Quantity Discount/inputs.csv",
    "revision": "e2c2e4a0433b0e4e014565d50e2366d8"
  },
  {
    "url": "data/Deterministic Problems/Quantity Discount/outputs.csv",
    "revision": "ab6252a2287e470b4e2938b71de960a3"
  },
  {
    "url": "data/Deterministic Problems/Resources Constrained/description.html",
    "revision": "b7a397eace37b38a8db2ab4e260ba833"
  },
  {
    "url": "data/Deterministic Problems/Resources Constrained/inputs.csv",
    "revision": "809795ccc946b0f3a3bd60d5079d13aa"
  },
  {
    "url": "data/Deterministic Problems/Resources Constrained/outputs.csv",
    "revision": "7985718257a9a07d0d21f7f6f9cc235c"
  },
  {
    "url": "data/Deterministic Problems/Static Lot Sizing/description.html",
    "revision": "bc19e4b89bc63f738358b9aaedb6e7b3"
  },
  {
    "url": "data/Deterministic Problems/Static Lot Sizing/inputs.csv",
    "revision": "48b7d12d05e1e3fe4d8426d8c0c55f2e"
  },
  {
    "url": "data/Deterministic Problems/Static Lot Sizing/outputs.csv",
    "revision": "268ce9fe62d81ffde78b4a9ba9e5fc14"
  },
  {
    "url": "data/solvers.csv",
    "revision": "960e09619757986e9495cf382fadd454"
  },
  {
    "url": "data/Stochastic Problems/Continuous Review Problems/Empirical Distribution/description.html",
    "revision": "fb5b518d1e5088e3daa0156691b3419e"
  },
  {
    "url": "data/Stochastic Problems/Continuous Review Problems/Empirical Distribution/inputs.csv",
    "revision": "28504caee4e3e8408b70e641d6902d28"
  },
  {
    "url": "data/Stochastic Problems/Continuous Review Problems/Empirical Distribution/outputs.csv",
    "revision": "4d25f18fc54246e80cce9dc0b038d61b"
  },
  {
    "url": "data/Stochastic Problems/Continuous Review Problems/Theoretical Distributions/description.html",
    "revision": "fb5b518d1e5088e3daa0156691b3419e"
  },
  {
    "url": "data/Stochastic Problems/Continuous Review Problems/Theoretical Distributions/inputs.csv",
    "revision": "1e961a699afeaf53cb49468451f19413"
  },
  {
    "url": "data/Stochastic Problems/Continuous Review Problems/Theoretical Distributions/outputs.csv",
    "revision": "4d25f18fc54246e80cce9dc0b038d61b"
  },
  {
    "url": "data/Stochastic Problems/Periodic Review Problems/Empirical Distribution/description.html",
    "revision": "9b268cd77b952e25d6efbbedd0aaaae5"
  },
  {
    "url": "data/Stochastic Problems/Periodic Review Problems/Empirical Distribution/inputs.csv",
    "revision": "8f2c106abab8d5f109863af375460ec3"
  },
  {
    "url": "data/Stochastic Problems/Periodic Review Problems/Empirical Distribution/outputs.csv",
    "revision": "a6283cf3774e965978cc9534b0db8674"
  },
  {
    "url": "data/Stochastic Problems/Periodic Review Problems/Theoretical Distributions/description.html",
    "revision": "9b268cd77b952e25d6efbbedd0aaaae5"
  },
  {
    "url": "data/Stochastic Problems/Periodic Review Problems/Theoretical Distributions/inputs.csv",
    "revision": "7cff0a24859ec13e6430d5c0d2672260"
  },
  {
    "url": "data/Stochastic Problems/Periodic Review Problems/Theoretical Distributions/outputs.csv",
    "revision": "1b0ddb5a256d493aa5502b2e62132db7"
  },
  {
    "url": "data/Stochastic Problems/Service Level Approach/description.html",
    "revision": "efb8e94ee4198515de14c8229d8c1eb4"
  },
  {
    "url": "data/Stochastic Problems/Service Level Approach/inputs.csv",
    "revision": "36e24259a6426025b602149e01e86e86"
  },
  {
    "url": "data/Stochastic Problems/Service Level Approach/outputs.csv",
    "revision": "5d3590a0deff4eb33528804ebb011285"
  },
  {
    "url": "data/Stochastic Problems/Single Period Problems/Empirical Distribution/description.html",
    "revision": "1d7523d521d13aca2be1741c36d36cb3"
  },
  {
    "url": "data/Stochastic Problems/Single Period Problems/Empirical Distribution/inputs.csv",
    "revision": "a4f69d1aadac50b3022a34b881f6ad87"
  },
  {
    "url": "data/Stochastic Problems/Single Period Problems/Empirical Distribution/outputs.csv",
    "revision": "0d9ce094a7bde458708fe7b8268f7357"
  },
  {
    "url": "data/Stochastic Problems/Single Period Problems/Theoretical Distributions/description.html",
    "revision": "1d7523d521d13aca2be1741c36d36cb3"
  },
  {
    "url": "data/Stochastic Problems/Single Period Problems/Theoretical Distributions/inputs.csv",
    "revision": "90022239dabb2df69c5211a78ece985c"
  },
  {
    "url": "data/Stochastic Problems/Single Period Problems/Theoretical Distributions/outputs.csv",
    "revision": "270f315adcde13e03d15a19ba28aac96"
  },
  {
    "url": "images/aus.png",
    "revision": "077c7ac4615afd54e7a212190a1f32b9"
  },
  {
    "url": "images/aus1.png",
    "revision": "8ac8102455aab1b85a240a98626e5716"
  },
  {
    "url": "images/aus11.png",
    "revision": "6eecab4f725e96b781a2390ebbb949fc"
  },
  {
    "url": "images/aus2.png",
    "revision": "1eccca2b92a25552b9bc9686ed33f565"
  },
  {
    "url": "images/aus3.png",
    "revision": "4d095256018439f0336d16dfbdaf4ea0"
  },
  {
    "url": "images/aus4.png",
    "revision": "8ac8102455aab1b85a240a98626e5716"
  },
  {
    "url": "images/backup.png",
    "revision": "f724e49c561fab979ceca19699854994"
  },
  {
    "url": "images/clean.png",
    "revision": "1d9f18c341df5472135b3114380bb920"
  },
  {
    "url": "images/ips_icon_128.png",
    "revision": "3c0cc8f2c4f8295bae3c2f872c883f43"
  },
  {
    "url": "images/ips_icon_144.png",
    "revision": "9d634e604c961857031eae13f206ab2c"
  },
  {
    "url": "images/ips_icon_192.png",
    "revision": "7778648108ab6cfef1a8ed4ee08c12ab"
  },
  {
    "url": "images/ips_icon_300.png",
    "revision": "f8703fa80ad1df02e1668ecb8710267a"
  },
  {
    "url": "images/ips_icon_64.png",
    "revision": "f4ced6b5d00b1fc63ccc5929f838adfa"
  },
  {
    "url": "images/logo.png",
    "revision": "6114e3ee14f5381b2ec3d2cb646e9abd"
  },
  {
    "url": "images/print.png",
    "revision": "a1bc10e49e2d2b6b64f9f6226a770b67"
  },
  {
    "url": "images/refresh.png",
    "revision": "02b58137f776024bdad1fe12d75c3d0d"
  },
  {
    "url": "images/remove.png",
    "revision": "3f9dc98840f035d2084075b4fcc8d9bc"
  },
  {
    "url": "images/restore.png",
    "revision": "ec75fcb546e913c7f28ff1a748e7f030"
  },
  {
    "url": "images/save-as.png",
    "revision": "6e04319c19f31a7756c4d9f42d03337a"
  },
  {
    "url": "images/save.png",
    "revision": "d3f0258f60f2692d82c1d4b1dbbe1db6"
  },
  {
    "url": "images/screen.png",
    "revision": "df055f1264d7f507b7f1cbb2b76fddbd"
  },
  {
    "url": "images/solver.png",
    "revision": "29c1ac3f881f8facbd4d28e75dab9f99"
  },
  {
    "url": "index.html",
    "revision": "44614cf4ec9618497df6187319b3d744"
  },
  {
    "url": "inventory.bundle.css",
    "revision": "30d9085b4103f110404e0758405c4d89"
  },
  {
    "url": "inventory.bundle.js",
    "revision": "fc224027f06e7904cbd65cbd267b2be3"
  },
  {
    "url": "manifest.json",
    "revision": "8b3ea60e6b37907f5b4beb71af9bfd69"
  },
  {
    "url": "solvers/bridge.min.js",
    "revision": "4defaad38aaf62297ee875e9007b873f"
  },
  {
    "url": "solvers/InventorySolverJS.min.js",
    "revision": "722e4447ddb12ce26bb74897acf2c178"
  },
  {
    "url": "vendor.bundle.css",
    "revision": "575fb4effcd5aaae1aa4c7836b1179aa"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
