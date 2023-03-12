import { create, insertBatch, search } from "@lyrasearch/lyra";

(async () => {
  const productDB = await create({
    schema: {
      title: "string",
      short: "string",
    },
  });
})();

const data = [
  {
    title: "MacBook Air with M1 chip",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548047",
  },

  {
    title: "iPad Pro",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1664578794100",
  },

  {
    title: "iPhone 14 Pro",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
  },
  {
    title: "Apple Watch Ultra",
    short: "",
    name: "Ready for adventure",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra-202209?wid=340&hei=264&fmt=png-alpha&.v=1674585946449",
  },

  {
    title: "MacBook Air with M2 chip",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548178",
  },

  {
    title: "Mac Pro",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-202108_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1625866834000",
  },

  {
    title: "MacBook Pro 13”",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548178",
  },

  {
    title: "Apple Watch SE",
    short: "",
    name: "Capable and affordable",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202209_GEO_US_FMT_WHH?wid=508&hei=472&fmt=png-alpha&.v=1674585946405",
  },

  {
    title: "AirPods Pro",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660803972361",
  },

  {
    title: "HomePod - Midnight",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1670557210097",
  },

  {
    title: "HomePod mini - Yellow",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925510000",
  },

  {
    title: "AirPods Max - Silver",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000",
  },

  {
    title: "AirPods",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000",
  },

  {
    title: "iPhone 14",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958160674",
  },

  {
    title: "iPhone SE",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646415838921",
  },

  {
    title: "iPhone 13",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452",
  },

  {
    title: "iPad Air",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1674662574485",
  },

  {
    title: "iPad mini",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1674662574477",
  },

  {
    title: "Apple Watch Series 8",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-s8-202209?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1674585946144",
  },

  {
    title: "Magic Keyboard",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833",
  },

  {
    title: "Studio Display",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=532&hei=582&fmt=png-alpha&.v=1646446502337",
  },

  {
    title: "Magic Trackpad",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=532&hei=582&fmt=png-alpha&.v=1645136899926",
  },

  {
    title: "AirTag",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761671000",
  },

  {
    title: "Magic Mouse",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=532&hei=582&fmt=png-alpha&.v=1645138486301",
  },

  {
    title: "Apple Pencil",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=532&hei=582&fmt=png-alpha&.v=1564075356758",
  },

  {
    title: "USB-C Digital AV",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUF82?wid=532&hei=582&fmt=png-alpha&.v=1590526633000",
  },

  {
    title: "USB-C to USB",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJ1M2?wid=532&hei=582&fmt=png-alpha&.v=1591650473000",
  },

  {
    title: "Mac mini",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1670549737872",
  },

  {
    title: "Mac 24”",
    short: "",
    name: "",
    description: "From $999 or $83.12/mo.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=490&hei=500&fmt=jpeg&qlt=95&.v=1625868688000",
  },
];

async function addProducts() {
  await insertBatch(productDB, data, { batchSize: 500 });
}

async function searchProduct(text) {
  const searchResult = await search(productDB, {
    term: text,
    properties: ["title"],
    limit: 5,
  });
  return searchResult;
}

export { addProducts, searchProduct };
