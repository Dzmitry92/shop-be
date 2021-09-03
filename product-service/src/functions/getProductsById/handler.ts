import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { productList } from '@functions/ProductsList';
import { Product } from 'src/types/Product';

const getProduct = async (productList: Product[], id: string): Promise<Product | null> => {
  const arrProducts = await Promise.resolve(productList);
  return arrProducts.find(elem => elem.id === id);
}

export const getProductsById = async (event) => {
  const productById = await getProduct(productList, event.pathParameters.productId)
  return formatJSONResponse({product: productById});
}

export const main = middyfy(getProductsById);
