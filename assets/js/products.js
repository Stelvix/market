(function () {
  const STORAGE_KEY = 'steeven_products_v1';

  const defaultProducts = [
    {
      id: 'p1',
      title: 'Echo Dot (5e génération)',
      description: 'Enceinte connectée compacte avec Alexa, son plus riche et contrôle vocal de la maison.',
      price: '59,99 €',
      image: 'https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B09B8V1LZ3?tag=votretag-21'
    },
    {
      id: 'p2',
      title: 'Anker PowerCore 20 000 mAh',
      description: 'Batterie externe haute capacité avec charge rapide pour smartphone, tablette et accessoires.',
      price: '49,99 €',
      image: 'https://m.media-amazon.com/images/I/71M9CbM8P4L._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B07S829LBX?tag=votretag-21'
    },
    {
      id: 'p3',
      title: 'Logitech MX Master 3S',
      description: 'Souris premium ultra-précise, idéale pour la productivité, la création et le travail quotidien.',
      price: '109,99 €',
      image: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B09HM94VDS?tag=votretag-21'
    }
  ];

  const isAmazonUrl = (value) => {
    try {
      const url = new URL(value);
      return /amazon\./i.test(url.hostname);
    } catch {
      return false;
    }
  };

  const hasAffiliateTag = (value) => {
    try {
      const url = new URL(value);
      return Boolean(url.searchParams.get('tag'));
    } catch {
      return false;
    }
  };

  const sanitizeProduct = (input) => ({
    id: input.id || `p_${Date.now()}`,
    title: String(input.title || '').trim(),
    description: String(input.description || '').trim(),
    price: String(input.price || '').trim(),
    image: String(input.image || '').trim(),
    affiliateUrl: String(input.affiliateUrl || '').trim(),
    createdAt: input.createdAt || new Date().toISOString()
  });

  const loadProducts = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
        return [...defaultProducts];
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
        return [...defaultProducts];
      }
      return parsed.map(sanitizeProduct);
    } catch {
      return [...defaultProducts];
    }
  };

  const saveProducts = (products) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products.map(sanitizeProduct)));
  };

  window.MarketProducts = {
    STORAGE_KEY,
    defaultProducts,
    isAmazonUrl,
    hasAffiliateTag,
    loadProducts,
    saveProducts,
    sanitizeProduct
  };
})();
