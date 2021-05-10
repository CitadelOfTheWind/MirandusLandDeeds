let shops = [];

function generateshopsjson() {
  shops = openseaAssets.map((asset) => {
    return {
      id: asset.id,
      token_id: asset.token_id,
      image_original_url: asset.image_original_url,
      name: asset.name,
      description: asset.description,
      permalink: asset.permalink,
    };
  });
}

generateshopsjson();
console.log(shops);
