import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  fetchCFData: () => {
    return new Promise(async (resolve, reject) => {
      await client
        .getEntries({ order: "sys.createdAt" })
        .then((entries) => {
          let cfData = {};
          if (entries) {
            entries.items.forEach((item) => {
              if (
                item.sys &&
                item.sys.contentType &&
                item.sys.contentType.sys &&
                item.sys.contentType.sys.id
              )
                cfData[item.sys.contentType.sys.id] = item.fields;
            });
          }
          if (cfData.topBar && cfData.topBar.menuItems) cfData.topBar.menuItems = cfData.topBar.menuItems.map((item) => { if (item.link.search('#') >= 0) item.link = { path: item.link.split('#')[0], hash: '#' + item.link.split('#')[1] }; return item; })
          if (cfData.bottomBar && cfData.bottomBar.menuItems) cfData.bottomBar.menuItems = cfData.bottomBar.menuItems.map((item) => { if (item.link.search('#') >= 0) item.link = { path: item.link.split('#')[0], hash: '#' + item.link.split('#')[1] }; return item; })
          resolve(cfData);
        })
        .catch((e) => { reject(e) });
    });
  }
}