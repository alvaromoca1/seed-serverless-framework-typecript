import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import HelloController from 'src/application/controllers/helloController';

const helloController = new HelloController();

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const helloResponse = await helloController.postHello(event.body);
  
  return formatJSONResponse(helloResponse.statusCode, helloResponse);
}

export const main = middyfy(hello);
