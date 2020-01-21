import envalid from "envalid";

const env = envalid.cleanEnv(process.env, {
  BOT_TOKEN: envalid.str(),
  CACHE_INTERVAL: envalid.num(),
});

export default env;
