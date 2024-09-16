import app from './app';

import config from './app/config';
import { AppDataSource } from './data/data-source';


async function main() {
  try {
    await AppDataSource.initialize()
    console.log(`Database is connected 🔥🔥🔥`);
    app.listen(config.port, () => {
      console.log(`server is running from ${config.port} ✅✅✅`);
      
    });
  } catch (error) {
    console.log(`😭😭😭😭\n ${error}`);
  }
}
main();
