import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { productList } from '@functions/ProductsList';
import { Product } from 'src/types/Product';

const getData = async (productList: Product[]): Promise<Product[] | null> => await Promise.resolve(productList);

export const getProducts = async () => {
  const arrProducts = await getData(productList);
  return formatJSONResponse({products: arrProducts});
}

export const main = middyfy(getProducts);
