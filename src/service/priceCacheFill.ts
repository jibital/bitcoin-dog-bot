import { getPrice } from "./blockchainApi";
import { cache } from "../utils/cache";

export default async function fillCacheEveryHour() {
  getPrice("USD");
  getPrice("USDT");
  getPrice("IRT");
  setTimeout(async function () {
    await fillCacheEveryHour();
  }, 3600 * 1000);
}

const latestCache = {
  history_USD_0_16: { t: 1605113296929, v: 15161.7833 },
  history_IRT_0_16: { t: 1605113297061, v: 416750000 },
  history_USDT_0_16: { t: 1605113297352, v: 27519 },
  history_USD_0_17: { t: 1605114009875, v: 15185.3805 },
  history_IRT_0_17: { t: 1605114010047, v: 417950000 },
  history_USDT_0_17: { t: 1605114010190, v: 27401 },
  history_USD_0_18: { t: 1605117626807, v: 15256.3467 },
  history_IRT_0_18: { t: 1605117626894, v: 419000000 },
  history_USDT_0_18: { t: 1605118999825, v: 27500 },
  history_USD_0_19: { t: 1605121235092, v: 15316.6817 },
  history_IRT_0_19: { t: 1605121235198, v: 419147600 },
  history_USDT_0_19: { t: 1605122218337, v: 27498 },
  history_USD_0_20: { t: 1605124826015, v: 15281.7383 },
  history_IRT_0_20: { t: 1605124826215, v: 417911400 },
  history_USDT_0_20: { t: 1605124826398, v: 27449 },
  history_USD_0_21: { t: 1605128444949, v: 15318.485 },
  history_IRT_0_21: { t: 1605128445179, v: 418430000 },
  history_USDT_0_21: { t: 1605128445406, v: 27450 },
  history_USD_0_22: { t: 1605132059523, v: 15296.2667 },
  history_IRT_0_22: { t: 1605132059606, v: 418000000 },
  history_USDT_0_22: { t: 1605135294761, v: 27439 },
  history_USD_0_23: { t: 1605135607473, v: 15386.6741 },
  history_IRT_0_23: { t: 1605135607562, v: 419498990 },
  history_USD_1_0: { t: 1605139215600, v: 15381.8178 },
  history_IRT_1_0: { t: 1605139215702, v: 419600000 },
  history_USD_1_1: { t: 1605142823558, v: 15313.4433 },
  history_IRT_1_1: { t: 1605142823628, v: 418221000 },
  history_USD_1_2: { t: 1605146431670, v: 15485.9967 },
  history_IRT_1_2: { t: 1605146431739, v: 421320000 },
  history_IRT_1_3: { t: 1605150039675, v: 419956000 },
  history_USD_1_3: { t: 1605150039695, v: 15456.8717 },
  history_USD_1_4: { t: 1605153647641, v: 15405.3733 },
  history_IRT_1_4: { t: 1605153647726, v: 418624601 },
  history_USD_1_5: { t: 1605157255614, v: 15422.4817 },
  history_IRT_1_5: { t: 1605157255714, v: 420502300 },
  history_IRT_1_6: { t: 1605160803815, v: 419520303 },
  history_USD_1_6: { t: 1605160803829, v: 15385.0133 },
  history_USDT_1_6: { t: 1605162659550, v: 27495 },
  history_USD_1_7: { t: 1605164411520, v: 15386.5867 },
  history_IRT_1_7: { t: 1605164411598, v: 420788900 },
  history_USDT_1_7: { t: 1605164542852, v: 27441 },
  history_USD_1_8: { t: 1605168019318, v: 15372.3183 },
  history_IRT_1_8: { t: 1605168019398, v: 418220300 },
  history_USDT_1_8: { t: 1605169095973, v: 27280 },
  history_USD_1_9: { t: 1605171627961, v: 15423.7742 },
  history_IRT_1_9: { t: 1605171628064, v: 420450000 },
  history_USDT_1_9: { t: 1605171878863, v: 27390 },
  history_USD_1_10: { t: 1605175235954, v: 15424.1636 },
  history_IRT_1_10: { t: 1605175236031, v: 419000000 },
  history_USDT_1_10: { t: 1605175432432, v: 27350 },
  history_USD_1_11: { t: 1605178843432, v: 15450.1069 },
  history_IRT_1_11: { t: 1605178843502, v: 418500000 },
  history_USDT_1_11: { t: 1605179567590, v: 27236 },
  history_USD_1_12: { t: 1605182451171, v: 15606.723 },
  history_IRT_1_12: { t: 1605182451252, v: 422000000 },
  history_USDT_1_12: { t: 1605182520236, v: 27300 },
  history_USDT_1_13: { t: 1605186025145, v: 27299 },
  history_USD_1_13: { t: 1605186058675, v: 15598.168 },
  history_IRT_1_13: { t: 1605186058759, v: 423501000 },
  history_IRT_1_14: { t: 1605189607226, v: 425000000 },
  history_USD_1_14: { t: 1605189607240, v: 15632.1492 },
  history_USDT_1_14: { t: 1605189798592, v: 27330 },
  history_USD_1_15: { t: 1605193215400, v: 15569.4083 },
  history_IRT_1_15: { t: 1605193215456, v: 426100000 },
  history_USDT_1_15: { t: 1605193483011, v: 27394 },
  history_USD_1_16: { t: 1605196823148, v: 15652.79 },
  history_IRT_1_16: { t: 1605196823244, v: 427000000 },
  history_USDT_1_16: { t: 1605198396231, v: 27360 },
};

export function initilizeHistoryCache() {
  try {
    Object.keys(latestCache).forEach((key) => {
      cache?.set(
        key,
        latestCache[key as keyof typeof latestCache].v,
        24 * 3600,
      );
    });
  } catch (error) {
    console.error(error);
  }
}
