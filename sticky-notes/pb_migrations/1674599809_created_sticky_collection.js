migrate((db) => {
  const collection = new Collection({
    "id": "ozkuvsrw8s2rnz9",
    "created": "2023-01-24 22:36:49.938Z",
    "updated": "2023-01-24 22:36:49.938Z",
    "name": "sticky_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ytj35tfc",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8vniyxj6",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ozkuvsrw8s2rnz9");

  return dao.deleteCollection(collection);
})
