import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsComplexTypes } from './Exercise-js-complex-types-in-js/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataBlok22Warmup } from './Blok22Warmup/router-data';
import { blockRouterMetaData as blockRouterMetaDataSetTimeout } from './SetTimeout/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsComplexTypes,
  blockRouterMetaDataJsFunctionBasics,
  blockRouterMetaDataBlok22Warmup,
  blockRouterMetaDataSetTimeout,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
