'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "53b26490c257cadb72f7667ba440c7eb",
"assets/AssetManifest.bin.json": "0b6f220529e24c27244ed0bc96713d6f",
"assets/AssetManifest.json": "7081359305796e1272b8a51be1ff2023",
"assets/assets/fonts/MabiClassic/Mabinogi_Classic_TTF.ttf": "9051ed631bd595a9c08e81bff15affa7",
"assets/assets/fonts/Noto_Sans/Noto_Sans/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/fonts/Noto_Sans/Noto_Sans/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/fonts/Noto_Sans/Noto_Sans_JP/NotoSansJP-Bold.ttf": "1bdb5bf9e923e1bc6418342bcf6fb3e0",
"assets/assets/fonts/Noto_Sans/Noto_Sans_JP/NotoSansJP-Regular.ttf": "dd4fa7df965b4d3227bf42b9a77da3e0",
"assets/assets/fonts/Noto_Sans/Noto_Sans_KR/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/assets/fonts/Noto_Sans/Noto_Sans_KR/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/assets/images/logo/logo.png": "20ccc09f4da7b3953fe4dadd8a9c65ca",
"assets/assets/images/nao.webp": "1a22e450141bcea15dc9b66c8af16105",
"assets/assets/images/npcs/%25EA%25B7%2580%25EB%2584%25A5.webp": "bc76174f54cf901ab976567fa3830f7f",
"assets/assets/images/npcs/%25EB%258D%25B0%25EC%259C%2584.webp": "6ffbed4032a810f00eaabf90fb0c841d",
"assets/assets/images/npcs/%25EB%258D%25B8%25EB%25A0%258C.webp": "ccfb7bfe8b3c2d9beac2b43d8431c184",
"assets/assets/images/npcs/%25EB%258D%25B8.webp": "ef3ae4485e810f38775235b3961a6dfc",
"assets/assets/images/npcs/%25EB%25A6%25AC%25EB%2582%2598.webp": "55165dd5e8574b545590ea647758e832",
"assets/assets/images/npcs/%25EB%25AA%25A8%25EB%259D%25BD.webp": "55c7e52163c761e51f59da1ae6c17ff4",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EB%2584%25A4%25EB%25A3%25A8.webp": "2ddcffe03d531651206fb402388793bd",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EB%2588%2584%25EB%2588%2584.webp": "c24c650b20ebdd3e470b7d4e2c585e08",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EB%259D%25BC%25EB%2588%2584.webp": "212620e2f512024444d910b7eb872b59",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EB%25A9%2594%25EB%25A3%25A8.webp": "c3e109c02cdbb02e49700df250aa717e",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EB%25B2%25A0%25EB%25A3%25A8.webp": "900e663dc5b27e7e0a6d72e827344fa8",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EC%2584%25B8%25EB%2588%2584.webp": "0a1224692eb3ef9a3b9ba04ee06ad324",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EC%2595%2584%25EB%25A3%25A8.webp": "d725c078f91ede1c3e78d9d79535d7f8",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25EC%2597%2590%25EB%25A3%25A8.webp": "a87f93c7f5ea06614e72a887cd72921e",
"assets/assets/images/npcs/%25EC%2583%2581%25EC%259D%25B8%2520%25ED%2594%25BC%25EB%25A3%25A8.webp": "e654947f48982e3361515b57a4deaa76",
"assets/assets/images/npcs/%25EC%2596%25BC%25EB%25A6%25AC.webp": "2a10c08f5bfd5343f74b9561d8c0abca",
"assets/assets/images/npcs/%25EC%259D%25B8%25EC%259E%25A5%2520%25EC%2583%2581%25EC%259D%25B8.webp": "351bcef5b961c6b8e50c9632497e2db2",
"assets/assets/images/npcs/%25EC%25B9%25B4%25EB%2594%2594.webp": "dca4d405c9de2ba5385399867b56d299",
"assets/assets/images/npcs/%25EC%25BC%2584.webp": "acca49defb4848c83db6e2634521f37a",
"assets/assets/images/npcs/%25ED%2585%258C%25EC%259D%25BC%25EB%25A1%259C.webp": "cff7303acf9e781adf62434ae29a27e0",
"assets/assets/images/npcs/%25ED%2594%2584%25EB%259D%25BC%25EC%259D%25B4%25EC%258A%25A4.webp": "522fae1cf5749ab3e11865e4986c8580",
"assets/assets/images/npcs/%25ED%2594%25BC%25EC%2598%25A4%25EB%2582%2598%25ED%258A%25B8.webp": "26ce93859590ea2e463655632efa4174",
"assets/assets/Items/Names/%25EA%25B0%259C%25EC%25A1%25B0%25EC%2584%259D.txt": "22791734d90db8f1d598a05176fa52bf",
"assets/assets/Items/Names/%25EA%25B2%2580.txt": "49ecb91aeb1600becd89dfc7994ecb2c",
"assets/assets/Items/Names/%25EA%25B2%25BD%25EA%25B0%2591%25EC%2598%25B7.txt": "379f19f6618ac993b175af3e7b023600",
"assets/assets/Items/Names/%25EA%25B8%25B0%25ED%2583%2580%2520%25EC%2586%258C%25EB%25AA%25A8%25ED%2592%2588.txt": "1b7080efba0067c2e259888ba2cb987b",
"assets/assets/Items/Names/%25EA%25B8%25B0%25ED%2583%2580%2520%25EC%258A%25A4%25ED%2581%25AC%25EB%25A1%25A4.txt": "d982eec4f2f7e200991c9f382aca5eeb",
"assets/assets/Items/Names/%25EA%25B8%25B0%25ED%2583%2580%2520%25EC%259E%25A5%25EB%25B9%2584.txt": "00b7ec1675689559e0f844631baf2bfd",
"assets/assets/Items/Names/%25EA%25B8%25B0%25ED%2583%2580%2520%25EC%259E%25AC%25EB%25A3%258C.txt": "0805383347ecdab912088bd593909635",
"assets/assets/Items/Names/%25EA%25B8%25B0%25ED%2583%2580.txt": "6c5c18f72204fa932f620853b15e7938",
"assets/assets/Items/Names/%25EA%25BC%25AC%25EB%25A6%25AC.txt": "6ce8c5a22390fb331efab92fecd1f281",
"assets/assets/Items/Names/%25EB%2582%25A0%25EA%25B0%259C.txt": "e01ea72e5bddee29d1cd0d7ceda8199a",
"assets/assets/Items/Names/%25EB%2582%25AD%25EB%25A7%258C%25EB%2586%258D%25EC%259E%25A5_%25EB%258B%25AC%25EB%25B9%259B%25EC%2584%25AC.txt": "57a8b539f71fdfa74fac17c54a0e55d1",
"assets/assets/Items/Names/%25EB%2584%2588%25ED%2581%25B4.txt": "56cc2d8417b757527a619b5b1f6ebbd3",
"assets/assets/Items/Names/%25EB%258D%2598%25EC%25A0%2584%2520%25ED%2586%25B5%25ED%2596%2589%25EC%25A6%259D.txt": "d69d9639dddcce474370b5c3cd4302ad",
"assets/assets/Items/Names/%25EB%258F%2584%25EB%2581%25BC.txt": "3c8c1900d1340de41b010769f6132380",
"assets/assets/Items/Names/%25EB%258F%2584%25EB%25A9%25B4.txt": "c1ba7ca0e2c7cc5e1bf12647f5a7ae44",
"assets/assets/Items/Names/%25EB%2591%2594%25EA%25B8%25B0.txt": "0fe47e02f6621e41a8976ab99ecc33af",
"assets/assets/Items/Names/%25EB%2593%2580%25EC%2596%25BC%25EA%25B1%25B4.txt": "ceef4af8f02a233e8b050080647975d3",
"assets/assets/Items/Names/%25EB%259E%259C%25EC%258A%25A4.txt": "fd0fb233999d0f843e5655a343c37d72",
"assets/assets/Items/Names/%25EB%25A1%259C%25EB%25B8%258C.txt": "a7d02e6bff99f6f0a60142cf4fb1470e",
"assets/assets/Items/Names/%25EB%25A7%2588%25EA%25B8%25B0%25EA%25B7%25B8%25EB%259E%2598%25ED%2594%2584%2520%25EB%258F%2584%25EC%2595%2588.txt": "b0bc81983a1d3c142c0437d81482835f",
"assets/assets/Items/Names/%25EB%25A7%2588%25EA%25B8%25B0%25EA%25B7%25B8%25EB%259E%2598%25ED%2594%2584.txt": "cfafe778e8d8fc96b66db3ff48ccb503",
"assets/assets/Items/Names/%25EB%25A7%2588%25EB%258F%2584%25EC%2584%259C.txt": "8872672305d51e4e3b2c2a4fc88b4dc1",
"assets/assets/Items/Names/%25EB%25A7%2588%25EB%25A6%25AC%25EC%2598%25A4%25EB%2584%25A4%25ED%258A%25B8.txt": "a7e9032c6ee31e25aa6ca8b15cdef4d8",
"assets/assets/Items/Names/%25EB%25A7%2588%25EB%25B2%2595%25EA%25B0%2580%25EB%25A3%25A8.txt": "300c2d0ae8067bb9f4a1ad78abb1ad7e",
"assets/assets/Items/Names/%25EB%25A7%2588%25EB%25B9%2584%25EB%2585%25B8%25EB%25B2%25A8.txt": "e657ef1170615b7e0e0a1cdc5eb83181",
"assets/assets/Items/Names/%25EB%25A7%2588%25EC%25A1%25B1%2520%25EC%258A%25A4%25ED%2581%25AC%25EB%25A1%25A4.txt": "087b6f7288f1e6334513dcc5baf6718a",
"assets/assets/Items/Names/%25EB%25A7%2590%25ED%2592%258D%25EC%2584%25A0%2520%25EC%258A%25A4%25ED%258B%25B0%25EC%25BB%25A4.txt": "ad8e3160a5474df3387ab9eec47350a1",
"assets/assets/Items/Names/%25EB%25A7%25A4%25EC%25A7%2581%2520%25ED%2581%25AC%25EB%259E%2598%25ED%2594%2584%25ED%258A%25B8.txt": "1fbbd1ec56c669189bee7a43bc91a009",
"assets/assets/Items/Names/%25EB%25AA%25A8%25EC%259E%2590_%25EA%25B0%2580%25EB%25B0%259C.txt": "0a938dc68b72e05f3b3ec0ef1392cacc",
"assets/assets/Items/Names/%25EB%25B3%2580%25EC%258B%25A0%2520%25EB%25A9%2594%25EB%258B%25AC.txt": "8b9739dcdde7bd6addb7de5312439807",
"assets/assets/Items/Names/%25EB%25B3%25B4%25EC%2584%259D.txt": "fd61b6526f686bca36e3a9e3fe9925d0",
"assets/assets/Items/Names/%25EB%25B6%2584%25EC%2596%2591%2520%25EB%25A9%2594%25EB%258B%25AC.txt": "6c9a4e2c3b75d8b46e000c3958220e9f",
"assets/assets/Items/Names/%25EB%25B6%2588%25ED%2583%2580%25EB%259E%2598.txt": "9f9af338e4f754117c3ebc150408b3c7",
"assets/assets/Items/Names/%25EB%25B7%25B0%25ED%258B%25B0%2520%25EC%25BF%25A0%25ED%258F%25B0.txt": "63648e32d3b0dc8a4bc148254f7af251",
"assets/assets/Items/Names/%25EC%2583%259D%25ED%2599%259C%2520%25EB%258F%2584%25EA%25B5%25AC.txt": "558d474aecc807eebadf333b057526c1",
"assets/assets/Items/Names/%25EC%2584%259D%25EA%25B6%2581.txt": "1ece00c85ffb94dc11b95dafbba1451d",
"assets/assets/Items/Names/%25EC%2588%2598%25EB%25A6%25AC%25EA%25B2%2580.txt": "4a4e3e9b9312ef536c13f2e2310c11d5",
"assets/assets/Items/Names/%25EC%258A%25A4%25EC%25BC%2580%25EC%25B9%2598.txt": "a10d1308f749432b692ba14217713195",
"assets/assets/Items/Names/%25EC%258A%25A4%25ED%2583%259C%25ED%2594%2584.txt": "ff4ec96570a1bdefea1988f16e4e8e48",
"assets/assets/Items/Names/%25EC%258B%25A0%25EB%25B0%259C.txt": "13a174914d7cb362aeca793d57a20a09",
"assets/assets/Items/Names/%25EC%258B%25A4%25EB%25A6%25B0%25EB%258D%2594.txt": "5ccbb80d47e371ea11437d558824b2cc",
"assets/assets/Items/Names/%25EC%2595%2584%25ED%258B%2580%25EB%259D%25BC%25ED%258B%2580.txt": "3bfa1665208c7d7d059af2136deb1bf0",
"assets/assets/Items/Names/%25EC%2595%2585%25EA%25B8%25B0.txt": "f4218d6a40658da862afd2e766b2588a",
"assets/assets/Items/Names/%25EC%2595%258C%25EB%25B0%2598%2520%25ED%259B%2588%25EB%25A0%25A8%25EC%2584%259D.txt": "99a24cc14bcde37ae7136e8ab3d79d51",
"assets/assets/Items/Names/%25EC%2595%25A1%25EC%2584%25B8%25EC%2584%259C%25EB%25A6%25AC.txt": "c1bcb278fad0cfcdf1ffbf415dda417b",
"assets/assets/Items/Names/%25EC%2596%2591%25EC%2586%2590%2520%25EC%259E%25A5%25EB%25B9%2584.txt": "ba9cb0c05e49e5c66860af9295dceee9",
"assets/assets/Items/Names/%25EC%2596%25BC%25EA%25B5%25B4%2520%25EC%259E%25A5%25EC%258B%259D.txt": "41ebd14545a05bed3cadfb9b3829fce0",
"assets/assets/Items/Names/%25EC%2597%2590%25EC%259D%25B4%25EB%258F%2584%25EC%258A%25A4.txt": "2ed66fec19e75b538479b9a0d8a855cf",
"assets/assets/Items/Names/%25EC%2597%2590%25EC%25BD%2594%25EC%258A%25A4%25ED%2586%25A4.txt": "1c009d311f702eaa00a6a7a5904afe83",
"assets/assets/Items/Names/%25EC%2597%25BC%25EC%2583%2589%2520%25EC%2595%25B0%25ED%2594%258C.txt": "0fe858258f105f84dd49a5079c8ce3ce",
"assets/assets/Items/Names/%25EC%2598%25A4%25EB%25B8%258C.txt": "a5543b919e5decb5711ce739299f4e32",
"assets/assets/Items/Names/%25EC%2598%25B7%25EB%25B3%25B8.txt": "4b86e323b0b2f3f080c9749e800b0dc4",
"assets/assets/Items/Names/%25EC%259B%2590%25EB%2593%259C.txt": "d908873aec3190dae2d391356bedc2f0",
"assets/assets/Items/Names/%25EC%259D%258C%25EC%258B%259D.txt": "ccb33faf88c61c3f84619b76a466b6de",
"assets/assets/Items/Names/%25EC%259D%2598%25EC%259E%2590_%25EC%2582%25AC%25EB%25AC%25BC.txt": "e9d692fd4f53ee56970dd569edb3a419",
"assets/assets/Items/Names/%25EC%259D%25B8%25EC%25B1%2588%25ED%258A%25B8%2520%25EC%258A%25A4%25ED%2581%25AC%25EB%25A1%25A4.txt": "4b641e7f06e63741462da3661e934877",
"assets/assets/Items/Names/%25EC%259E%25A5%25EA%25B0%2591.txt": "9f56bdb06129511ee77bce3da8f6e869",
"assets/assets/Items/Names/%25EC%25A0%259C%25EB%25A0%25A8_%25EB%25B8%2594%25EB%259E%2599%25EC%258A%25A4%25EB%25AF%25B8%25EC%258A%25A4.txt": "02a62965837dcd73373742ea5df6daea",
"assets/assets/Items/Names/%25EC%25A0%259C%25EC%258A%25A4%25EC%25B2%2598.txt": "b6cd319b6d19476ab3adea1164c84a71",
"assets/assets/Items/Names/%25EC%25A3%25BC%25EB%25A8%25B8%25EB%258B%2588.txt": "d80face9d2457212d0869cdbf61edd29",
"assets/assets/Items/Names/%25EC%25A4%2591%25EA%25B0%2591%25EC%2598%25B7.txt": "7f5536189811bf2429479d47a4a937e7",
"assets/assets/Items/Names/%25EC%25B1%2585.txt": "d35c715028457abaf071bdfa02297823",
"assets/assets/Items/Names/%25EC%25B2%259C%25EC%2598%25B7.txt": "5d7133b379375eeef6c159fa17f9384f",
"assets/assets/Items/Names/%25EC%25B2%259C%25EC%2598%25B7_%25EB%25B0%25A9%25EC%25A7%2581.txt": "05b4d0209c52154e75fc2cec2c63ed80",
"assets/assets/Items/Names/%25EC%25B2%25B4%25EC%259D%25B8%2520%25EB%25B8%2594%25EB%25A0%2588%25EC%259D%25B4%25EB%2593%259C.txt": "1b1e56dcf971eaa6a4d63f053d72aad6",
"assets/assets/Items/Names/%25ED%2586%25A0%25ED%2585%259C.txt": "00ae833b7e244e5b8ddc293d240eb263",
"assets/assets/Items/Names/%25ED%258C%2594%25EB%25A6%25AC%25EC%2595%2584%25EC%258A%25A4%2520%25EC%259C%25A0%25EB%25AC%25BC.txt": "37e80eecb6215a3cc733cd809d51aecc",
"assets/assets/Items/Names/%25ED%258D%25BC%25ED%2593%25B8.txt": "a4c93c562a7b711ff8ee4643613ee15b",
"assets/assets/Items/Names/%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580.txt": "f36b304628aa3022ac6a184e7659b95a",
"assets/assets/Items/Names/%25ED%258F%25AC%25EC%2585%2598.txt": "92e6809ade5879aedc8f024d36974ed5",
"assets/assets/Items/Names/%25ED%2594%25BC%25EB%258B%2588%2520%25ED%258E%25AB.txt": "b321ff8d795adcb8339d41f1759545ad",
"assets/assets/Items/Names/%25ED%2595%2580%25EC%25A6%2588%25EB%25B9%2584%25EC%25A6%2588.txt": "3888108c09eb89eb425ee1416e6aa574",
"assets/assets/Items/Names/%25ED%2595%259C%25EC%2586%2590%2520%25EC%259E%25A5%25EB%25B9%2584.txt": "3ad4a74f381412c0bfdb5b36872f4b41",
"assets/assets/Items/Names/%25ED%2595%25B8%25EB%2593%25A4.txt": "e9929211080da5dc64c9d845cdeab63a",
"assets/assets/Items/Names/%25ED%2597%2588%25EB%25B8%258C.txt": "b9e6ec8f8b8a9fc368bef42306d6efd6",
"assets/assets/Items/Names/%25ED%2599%259C.txt": "a3df99e34637c4b9e42d01b63246d610",
"assets/assets/Items/Names/%25ED%259E%2590%25EC%259B%25AC%2520%25EA%25B3%25B5%25ED%2595%2599.txt": "f70f4c84685dc73b0fc241d5e423b9a8",
"assets/assets/Items/Names/names.json": "b2cdf5553be62afb1ba53fe66fd5da7c",
"assets/FontManifest.json": "6e31c551d23507d233d4bf459b2298a7",
"assets/fonts/MaterialIcons-Regular.otf": "634399a24a60766392095a3f05a9fe6e",
"assets/NOTICES": "7d965847a40d1f7734bacfce01086401",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c6f09cbcafd754206617875b289ec9be",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c7c210bb8cbbc83379be27adccbc5841",
"http.htaccess": "e97169737f6d59d50dbdb0388f5335bd",
"icons/Icon-192.png": "85ae5918dbb3805049e11fafde2e9f39",
"icons/Icon-512.png": "f37eb5b1182c70aa5af25e3cbbbf4394",
"icons/Icon-maskable-192.png": "85ae5918dbb3805049e11fafde2e9f39",
"icons/Icon-maskable-512.png": "f37eb5b1182c70aa5af25e3cbbbf4394",
"index.html": "0d42c86622dfd6a2c6d9df619e5c5ae4",
"/": "0d42c86622dfd6a2c6d9df619e5c5ae4",
"main.dart.js": "be0faf2f236fd9b7d884d96db4deb63a",
"manifest.json": "a49d84e04e508d48276fdb28d8607301",
"version.json": "50a7be1a11756aeeecba90b096a3c631"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
