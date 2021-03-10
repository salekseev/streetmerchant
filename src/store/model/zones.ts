import {Store} from './store';

export const Zones: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: '.availability-value.stock-status.fetched',
      text: ['In Stock'],
    },
    maxPrice: {
      container: '.prod-price.ga_ec_p_price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.availability-value.stock-status.fetched',
      text: ['Call for Availability'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.zones.com/site/product/index.html?id=105056061',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109124737',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109043572',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109149173',
    },
    {
      brand: 'asus',
      model: 'ko',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109155022',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109044609',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109137433',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108833686',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3090-O24G-GA.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3090-O24G-WH.html',
    },
    {
      brand: 'asus',
      model: 'strix lc',
      series: 'rx6800xt',
      url:
        'https://www.zones.com/site/product/index.html?id=109106874',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: 'rx6800',
      url:
        'https://www.zones.com/site/product/index.html?id=109106872',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109149047',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109043562',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108833684',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3090-O24G-GAMING.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3090-24G-GAMING.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-RTX3090-24G-EK.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=109134339',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800',
      url:
        'https://www.zones.com/site/product/index.html?id=109106879',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800xt',
      url:
        'https://www.zones.com/site/product/index.html?id=109106871',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6900xt',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RX6900XT-O16G-GAMING.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109112171',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109112236',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108911655',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108911661',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108911660',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108827708',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108827706',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108827707',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3985-KR.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3987-KR.html',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3973-KR.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3975-KR.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109115975',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109080656',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108876831',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090AORUS-M-24GD.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=109080636',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090AORUS-X-24GD.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109115975',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109117229',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109117026',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108945959',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108950063',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108953537',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=109080700',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108833798',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108833967',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108876806',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090EAGLE-24GD.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090EAGLE-OC-24GD.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090GAMING-OC-24GD.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090VISION-OC-24GD.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109080930',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3060ti',
      url:
        'https://www.zones.com/site/product/index.html?id=109107032',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108824954',
    },
    {
      brand: 'pny',
      model: 'dual fan',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=108824961',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG309024TFXPPB.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108824952',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108824956',
    },
    {
      brand: 'pny',
      model: 'xlr8 epic x',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG309024TFXMPB.html',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800',
      url:
        'https://www.zones.com/site/product/index.html?id=109121353',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6800xt',
      url:
        'https://www.zones.com/site/product/index.html?id=109121251',
    },
    {
      brand: 'sapphire',
      model: 'pulse',
      series: 'rx6800xt',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-11304-03-20G.html',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url:
        'https://www.zones.com/site/product/index.html?id=109034747',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url:
        'https://www.zones.com/site/product/index.html?id=108822141',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/zotac-video-cards-ZT-A30900D-10P.html',
    },
  ],
  name: 'zones',
};
